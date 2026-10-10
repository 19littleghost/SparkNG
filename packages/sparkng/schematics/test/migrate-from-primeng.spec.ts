import { describe, expect, it } from 'vitest';
import { VERSIONS } from '../utils/mappings';
import { createAppTree, createRunner, DEFAULT_PKG } from './helpers';

const PRIMENG_PKG = {
    ...DEFAULT_PKG,
    dependencies: {
        '@angular/core': '^21.0.0',
        primeng: '^21.0.2',
        '@primeuix/themes': '^1.2.0',
        'tailwindcss-primeui': '^0.6.1',
        primelocale: '^2.4.0'
    }
};

const APP_CONFIG_PRIMENG = `import { ApplicationConfig } from '@angular/core';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

export const appConfig: ApplicationConfig = {
    providers: [providePrimeNG({ theme: { preset: Aura } })]
};
`;

function primengTree(extraFiles: Record<string, string> = {}, pkg: object = PRIMENG_PKG) {
    return createAppTree({ '/src/app/app.config.ts': APP_CONFIG_PRIMENG, ...extraFiles }, pkg);
}

describe('migrate-from-primeng', () => {
    it('aborts when primeng is older than 21', async () => {
        const runner = createRunner();
        const tree = primengTree({}, { ...PRIMENG_PKG, dependencies: { ...PRIMENG_PKG.dependencies, primeng: '^19.0.0' } });
        await expect(runner.runSchematic('migrate-from-primeng', { skipInstall: true }, tree)).rejects.toThrow(/v21/);
    });

    it('aborts when primeng is not installed', async () => {
        const runner = createRunner();
        await expect(runner.runSchematic('migrate-from-primeng', { skipInstall: true }, createAppTree())).rejects.toThrow(/not installed/);
    });

    it('aborts when the primeng version is unparseable (e.g. "latest")', async () => {
        const runner = createRunner();
        const tree = primengTree({}, { ...PRIMENG_PKG, dependencies: { ...PRIMENG_PKG.dependencies, primeng: 'latest' } });
        await expect(runner.runSchematic('migrate-from-primeng', { skipInstall: true }, tree)).rejects.toThrow(/could not be parsed/);
    });

    it('proceeds on old versions with --force', async () => {
        const runner = createRunner();
        const tree = primengTree({}, { ...PRIMENG_PKG, dependencies: { ...PRIMENG_PKG.dependencies, primeng: '^19.0.0' } });
        const result = await runner.runSchematic('migrate-from-primeng', { skipInstall: true, force: true }, tree);
        expect(JSON.parse(result.readContent('/package.json')).dependencies['@bdspark/sparkng']).toBe(VERSIONS['@bdspark/sparkng']);
    });

    it('version gate accepts primeng v21 declared only in peerDependencies (#1448)', async () => {
        const { primeng, ...dependencies } = PRIMENG_PKG.dependencies;
        const tree = primengTree({}, { ...PRIMENG_PKG, dependencies, peerDependencies: { primeng } });
        const result = await createRunner().runSchematic('migrate-from-primeng', { skipInstall: true }, tree);
        expect(result.readContent('/src/app/app.config.ts')).toContain(`from '@bdspark/sparkng/config'`);
    });

    it('version gate reports the version (not "not installed") for old primeng in peerDependencies (#1448)', async () => {
        const { primeng, ...dependencies } = PRIMENG_PKG.dependencies;
        const tree = primengTree({}, { ...PRIMENG_PKG, dependencies, peerDependencies: { primeng: '^19.0.0' } });
        await expect(createRunner().runSchematic('migrate-from-primeng', { skipInstall: true }, tree)).rejects.toThrow(/v21/);
    });

    it('succeeds when primeng is only present in a workspace sub-package (not the root)', async () => {
        const runner = createRunner();
        const tree = createAppTree({
            '/libs/app/package.json': JSON.stringify({ name: 'app-lib', dependencies: { primeng: '^21.0.2' } }, null, 2) + '\n'
        });
        const result = await runner.runSchematic('migrate-from-primeng', { skipInstall: true }, tree);
        const libPkg = JSON.parse(result.readContent('/libs/app/package.json'));
        expect(libPkg.dependencies.primeng).toBeUndefined();
        expect(libPkg.dependencies['@bdspark/sparkng']).toBe(VERSIONS['@bdspark/sparkng']);
    });

    it('swaps dependencies in every workspace package.json', async () => {
        const runner = createRunner();
        const tree = primengTree({
            '/libs/ui/package.json': JSON.stringify({ name: 'ui', dependencies: { '@primeuix/styled': '^1.0.0' } }, null, 2) + '\n'
        });
        const result = await runner.runSchematic('migrate-from-primeng', { skipInstall: true }, tree);

        const rootPkg = JSON.parse(result.readContent('/package.json'));
        expect(rootPkg.dependencies.primeng).toBeUndefined();
        expect(rootPkg.dependencies['@bdspark/sparkng']).toBe(VERSIONS['@bdspark/sparkng']);
        expect(rootPkg.dependencies['@bdspark/sparkng-themes']).toBe(VERSIONS['@bdspark/sparkng-themes']);
        expect(rootPkg.dependencies['tailwindcss-primeui']).toBeUndefined();
        expect(rootPkg.dependencies['@bdspark/sparkng-tailwindcss']).toBe(VERSIONS['@bdspark/sparkng-tailwindcss']);
        expect(rootPkg.dependencies.primelocale).toBeUndefined();
        expect(rootPkg.dependencies['@bdspark/sparkng-locale']).toBe(VERSIONS['@bdspark/sparkng-locale']);

        const libPkg = JSON.parse(result.readContent('/libs/ui/package.json'));
        expect(libPkg.dependencies['@bdspark/sparkng-styled']).toBe(VERSIONS['@bdspark/sparkng-styled']);
    });

    it('rewrites TypeScript sources', async () => {
        const runner = createRunner();
        const tree = primengTree({
            '/src/app/list.component.ts':
                `import { TableModule } from 'primeng/table';\n` + `import { PrimeNG } from 'primeng/config';\n` + `import { inject } from '@angular/core';\n` + `export class ListComponent {\n` + `    config = inject(PrimeNG);\n` + `}\n`
        });
        const result = await runner.runSchematic('migrate-from-primeng', { skipInstall: true }, tree);

        const appConfig = result.readContent('/src/app/app.config.ts');
        expect(appConfig).toContain(`import { provideSpark } from '@bdspark/sparkng/config';`);
        expect(appConfig).toContain(`import Aura from '@bdspark/sparkng-themes/aura';`);
        expect(appConfig).toContain(`provideSpark({ theme: { preset: Aura } })`);

        const component = result.readContent('/src/app/list.component.ts');
        expect(component).toContain(`from '@bdspark/sparkng/table'`);
        expect(component).toContain(`inject(Spark)`);
    });

    it('rewrites the primeng cssLayer name and order in the theme config', async () => {
        const runner = createRunner();
        const tree = primengTree({
            '/src/app/app.config.ts':
                `import { ApplicationConfig } from '@angular/core';\n` +
                `import { providePrimeNG } from 'primeng/config';\n` +
                `import Aura from '@primeuix/themes/aura';\n\n` +
                `export const appConfig: ApplicationConfig = {\n` +
                `    providers: [providePrimeNG({ theme: { preset: Aura, options: { cssLayer: { name: 'primeng', order: 'theme, base, primeng' } } } })]\n` +
                `};\n`
        });
        const result = await runner.runSchematic('migrate-from-primeng', { skipInstall: true }, tree);

        const appConfig = result.readContent('/src/app/app.config.ts');
        expect(appConfig).toContain(`import { provideSpark } from '@bdspark/sparkng/config';`);
        expect(appConfig).toContain(`cssLayer: { name: 'Spark', order: 'theme, base, Spark' }`);
        expect(appConfig).not.toContain('primeng');
    });

    it('renames @layer declarations in stylesheets to match the rewritten cssLayer config', async () => {
        const runner = createRunner();
        const tree = primengTree({
            '/src/app/app.config.ts':
                `import { ApplicationConfig } from '@angular/core';\n` +
                `import { providePrimeNG } from 'primeng/config';\n` +
                `import Aura from '@primeuix/themes/aura';\n\n` +
                `export const appConfig: ApplicationConfig = {\n` +
                `    providers: [providePrimeNG({ theme: { preset: Aura, options: { cssLayer: { name: 'primeng', order: 'theme, base, primeng, primeng-overwrites' } } } })]\n` +
                `};\n`,
            '/src/primeng-overwrites.scss': `@layer primeng-overwrites {\n    .p-button { margin: 0; }\n}\n`,
            '/src/styles.scss': `@layer theme, base, primeng, primeng-overwrites;\n@import url(overrides.css) layer(primeng);\n`
        });
        const result = await runner.runSchematic('migrate-from-primeng', { skipInstall: true }, tree);

        expect(result.readContent('/src/app/app.config.ts')).toContain(`cssLayer: { name: 'Spark', order: 'theme, base, Spark, Spark-overwrites' }`);
        expect(result.readContent('/src/primeng-overwrites.scss')).toBe(`@layer Spark-overwrites {\n    .p-button { margin: 0; }\n}\n`);
        expect(result.readContent('/src/styles.scss')).toBe(`@layer theme, base, Spark, Spark-overwrites;\n@import url(overrides.css) layer(Spark);\n`);
    });

    it('leaves stylesheet @layer declarations alone when no cssLayer config was rewritten', async () => {
        const runner = createRunner();
        const styles = `@layer theme, app;\n@layer app {\n    .btn { color: red; }\n}\n`;
        const result = await runner.runSchematic('migrate-from-primeng', { skipInstall: true }, primengTree({ '/src/styles.scss': styles }));
        expect(result.readContent('/src/styles.scss')).toBe(styles);
    });

    it('migrates primeicons: dependency, stylesheet imports, and angular.json styles', async () => {
        const runner = createRunner();
        const tree = primengTree(
            {
                '/angular.json': JSON.stringify(
                    {
                        version: 1,
                        projects: {
                            app: {
                                projectType: 'application',
                                root: '',
                                sourceRoot: 'src',
                                architect: { build: { options: { styles: ['node_modules/primeicons/primeicons.css', 'src/styles.scss'] } } }
                            }
                        }
                    },
                    null,
                    2
                ),
                '/src/styles.scss': `@import "primeicons/primeicons.css";\nbody { margin: 0; }\n`,
                '/src/main.ts': `import 'primeicons/primeicons.css';\nimport { bootstrapApplication } from '@angular/platform-browser';\n`
            },
            { ...PRIMENG_PKG, dependencies: { ...PRIMENG_PKG.dependencies, primeicons: '^7.0.0' } }
        );
        const result = await runner.runSchematic('migrate-from-primeng', { skipInstall: true }, tree);

        const pkg = JSON.parse(result.readContent('/package.json'));
        expect(pkg.dependencies.primeicons).toBeUndefined();
        expect(pkg.dependencies['@bdspark/sparkng-icons']).toBe(VERSIONS['@bdspark/sparkng-icons']);

        expect(result.readContent('/angular.json')).toContain('node_modules/@bdspark/sparkng-icons/icons.css');
        expect(result.readContent('/src/styles.scss')).toBe(`@import "@bdspark/sparkng-icons/icons.css";\nbody { margin: 0; }\n`);
        expect(result.readContent('/src/main.ts')).toContain(`import '@bdspark/sparkng-icons/icons.css';`);
    });

    it('does not touch node_modules or dist', async () => {
        const runner = createRunner();
        const content = `import { X } from 'primeng/button';\n`;
        const tree = primengTree({
            '/node_modules/somepkg/index.ts': content,
            '/dist/app/main.ts': content
        });
        const result = await runner.runSchematic('migrate-from-primeng', { skipInstall: true }, tree);
        expect(result.readContent('/node_modules/somepkg/index.ts')).toBe(content);
        expect(result.readContent('/dist/app/main.ts')).toBe(content);
    });

    it('warns about leftover mentions in non-TS files', async () => {
        const runner = createRunner();
        const tree = primengTree({
            '/src/styles.scss': `/* uses primeng theme vars */\n`
        });
        const warnings: string[] = [];
        runner.logger.subscribe((entry) => {
            if (entry.level === 'warn') {
                warnings.push(entry.message);
            }
        });
        await runner.runSchematic('migrate-from-primeng', { skipInstall: true }, tree);
        expect(warnings.join('\n')).toContain('/src/styles.scss:1');
    });

    it('ignores files that .gitignore excludes', async () => {
        const runner = createRunner();
        const tree = primengTree({
            '/.gitignore': 'coverage/\n/build\n',
            '/coverage/lcov-report/app.component.ts.html': `<span>import { ButtonModule } from 'primeng/button';</span>\n`,
            '/build/vendor.js': `require('primeng/button');\n`,
            '/src/styles.scss': `/* uses primeng theme vars */\n`
        });
        const warnings: string[] = [];
        runner.logger.subscribe((entry) => {
            if (entry.level === 'warn') {
                warnings.push(entry.message);
            }
        });
        await runner.runSchematic('migrate-from-primeng', { skipInstall: true }, tree);
        const combined = warnings.join('\n');
        expect(combined).not.toContain('/coverage/');
        expect(combined).not.toContain('/build/');
        expect(combined).toContain('/src/styles.scss:1');
    });

    it('does not rewrite git-ignored sources', async () => {
        const runner = createRunner();
        const content = `import { ButtonModule } from 'primeng/button';\n`;
        const tree = primengTree({
            '/.gitignore': 'generated/\n',
            '/generated/api.ts': content
        });
        const result = await runner.runSchematic('migrate-from-primeng', { skipInstall: true }, tree);
        expect(result.readContent('/generated/api.ts')).toBe(content);
    });

    it('closes the leftover report with a reminder to review it', async () => {
        const runner = createRunner();
        const tree = primengTree({
            '/src/styles.scss': `/* uses primeng theme vars */\n`
        });
        const warnings: string[] = [];
        runner.logger.subscribe((entry) => {
            if (entry.level === 'warn') {
                warnings.push(entry.message);
            }
        });
        await runner.runSchematic('migrate-from-primeng', { skipInstall: true }, tree);
        const combined = warnings.join('\n');
        expect(combined).toContain('1 reference in 1 file');
        expect(combined).toContain('still need manual review');
        expect(combined).toContain('CREATE/UPDATE');
        expect(combined).toContain('https://sparkng.bdspark.com/migration/primeng');
    });

    it('says so when there is nothing left to review', async () => {
        const runner = createRunner();
        const messages: string[] = [];
        runner.logger.subscribe((entry) => {
            messages.push(`${entry.level}: ${entry.message}`);
        });
        await runner.runSchematic('migrate-from-primeng', { skipInstall: true }, primengTree());
        const combined = messages.join('\n');
        expect(combined).toContain('nothing left to review');
        expect(combined).not.toContain('could not be migrated automatically');
    });

    it('rewrites package references in stylesheets, including the Tailwind entrypoint', async () => {
        const runner = createRunner();
        const tree = primengTree({
            '/src/tailwind.css': `@import 'tailwindcss';\n@import 'tailwindcss-primeui';\n@plugin "tailwindcss-primeui";\n`,
            '/src/styles.scss': `@use '~primeng/resources/primeng.css';\n@import url(node_modules/primeicons/primeicons.css);\n`
        });
        const result = await runner.runSchematic('migrate-from-primeng', { skipInstall: true }, tree);
        expect(result.readContent('/src/tailwind.css')).toBe(`@import 'tailwindcss';\n@import '@bdspark/sparkng-tailwindcss';\n@plugin "@bdspark/sparkng-tailwindcss";\n`);
        expect(result.readContent('/src/styles.scss')).toBe(`@use '~@bdspark/sparkng/resources/primeng.css';\n@import url(node_modules/@bdspark/sparkng-icons/icons.css);\n`);
    });

    it('leaves declaration values that merely look like a package alone', async () => {
        const runner = createRunner();
        const styles = `.icon { font-family: 'primeicons'; content: 'primeng'; }\n[class^='pi-'] { speak: none; }\n`;
        const result = await runner.runSchematic('migrate-from-primeng', { skipInstall: true }, primengTree({ '/src/styles.scss': styles }));
        expect(result.readContent('/src/styles.scss')).toBe(styles);
    });

    it('schedules an install task unless skipInstall is set', async () => {
        const runner = createRunner();
        await runner.runSchematic('migrate-from-primeng', {}, primengTree());
        expect(runner.tasks.some((t) => t.name === 'node-package')).toBe(true);
    });

    it('does not warn about lockfiles but still warns about genuine leftovers', async () => {
        const runner = createRunner();
        const tree = primengTree({
            '/package-lock.json': JSON.stringify(
                {
                    name: 'test-app',
                    lockfileVersion: 3,
                    packages: {
                        'node_modules/primeng': {
                            resolved: 'https://registry.npmjs.org/primeng/-/primeng-21.0.2.tgz'
                        }
                    }
                },
                null,
                2
            ),
            '/src/styles.scss': `/* uses primeng theme vars */\n`
        });
        const warnings: string[] = [];
        runner.logger.subscribe((entry) => {
            if (entry.level === 'warn') {
                warnings.push(entry.message);
            }
        });
        await runner.runSchematic('migrate-from-primeng', { skipInstall: true }, tree);
        const combined = warnings.join('\n');
        expect(combined).not.toContain('package-lock.json');
        expect(combined).toContain('/src/styles.scss:1');
    });

    it('rewrites the import in an ESM tailwind config', async () => {
        const runner = createRunner();
        const tree = primengTree({
            '/tailwind.config.js': "import PrimeUI from 'tailwindcss-primeui';\n\nexport default {\n    plugins: [PrimeUI]\n};\n"
        });
        const result = await runner.runSchematic('migrate-from-primeng', { skipInstall: true }, tree);
        expect(result.readContent('/tailwind.config.js')).toContain("from '@bdspark/sparkng-tailwindcss'");
    });

    it('rewrites require() in a CommonJS tailwind config', async () => {
        const runner = createRunner();
        const tree = primengTree({
            '/tailwind.config.cjs': "const PrimeUI = require('tailwindcss-primeui');\n\nmodule.exports = {\n    plugins: [PrimeUI]\n};\n"
        });
        const result = await runner.runSchematic('migrate-from-primeng', { skipInstall: true }, tree);
        expect(result.readContent('/tailwind.config.cjs')).toContain("require('@bdspark/sparkng-tailwindcss')");
    });

    it('warns to run migrate-from-primeflex when primeflex is also present', async () => {
        const runner = createRunner();
        const tree = primengTree({}, { ...PRIMENG_PKG, dependencies: { ...PRIMENG_PKG.dependencies, primeflex: '^3.3.1' } });
        const warnings: string[] = [];
        runner.logger.subscribe((entry) => {
            if (entry.level === 'warn') {
                warnings.push(entry.message);
            }
        });
        await runner.runSchematic('migrate-from-primeng', { skipInstall: true }, tree);
        expect(warnings.join('\n')).toContain('migrate-from-primeflex');
    });

    it('does not mention migrate-from-primeflex when primeflex is absent', async () => {
        const runner = createRunner();
        const warnings: string[] = [];
        runner.logger.subscribe((entry) => {
            if (entry.level === 'warn') {
                warnings.push(entry.message);
            }
        });
        await runner.runSchematic('migrate-from-primeng', { skipInstall: true }, primengTree());
        expect(warnings.join('\n')).not.toContain('migrate-from-primeflex');
    });

    it('rewrites primelocale imports including JSON subpaths', async () => {
        const runner = createRunner();
        const tree = primengTree({
            '/src/app/locale.ts': `import { de } from 'primelocale';\nimport ja from 'primelocale/ja.json';\nexport const locales = { de, ja };\n`
        });
        const result = await runner.runSchematic('migrate-from-primeng', { skipInstall: true }, tree);
        const content = result.readContent('/src/app/locale.ts');
        expect(content).toContain(`import { de } from '@bdspark/sparkng-locale';`);
        expect(content).toContain(`import ja from '@bdspark/sparkng-locale/ja.json';`);
        expect(content).not.toContain('primelocale');
    });
});
