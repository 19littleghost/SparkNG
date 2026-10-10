import { describe, expect, it } from 'vitest';
import { mapModuleSpecifier, VERSIONS } from './mappings';
import { declaresPackage, getPrimengMajor, swapDependencies } from './package-json';

describe('mapModuleSpecifier', () => {
    it('maps primeng root and secondary entry points', () => {
        expect(mapModuleSpecifier('primeng')).toBe('@bdspark/sparkng');
        expect(mapModuleSpecifier('primeng/button')).toBe('@bdspark/sparkng/button');
        expect(mapModuleSpecifier('primeng/config')).toBe('@bdspark/sparkng/config');
    });

    it('maps the five @primeuix packages including subpaths', () => {
        expect(mapModuleSpecifier('@primeuix/themes')).toBe('@bdspark/sparkng-themes');
        expect(mapModuleSpecifier('@primeuix/themes/aura')).toBe('@bdspark/sparkng-themes/aura');
        expect(mapModuleSpecifier('@primeuix/styled')).toBe('@bdspark/sparkng-styled');
        expect(mapModuleSpecifier('@primeuix/styles')).toBe('@bdspark/sparkng-styles');
        expect(mapModuleSpecifier('@primeuix/utils')).toBe('@bdspark/sparkng-utils');
        expect(mapModuleSpecifier('@primeuix/motion')).toBe('@bdspark/sparkng-motion');
    });

    it('maps primeicons, including the renamed stylesheet', () => {
        expect(mapModuleSpecifier('primeicons')).toBe('@bdspark/sparkng-icons');
        expect(mapModuleSpecifier('primeicons/primeicons.css')).toBe('@bdspark/sparkng-icons/icons.css');
        expect(mapModuleSpecifier('primeicons/raw-svg/check.svg')).toBe('@bdspark/sparkng-icons/raw-svg/check.svg');
    });

    it('maps tailwindcss-primeui including subpaths', () => {
        expect(mapModuleSpecifier('tailwindcss-primeui')).toBe('@bdspark/sparkng-tailwindcss');
        expect(mapModuleSpecifier('tailwindcss-primeui/v4/index.css')).toBe('@bdspark/sparkng-tailwindcss/v4/index.css');
    });

    it('maps primelocale including subpaths', () => {
        expect(mapModuleSpecifier('primelocale')).toBe('@bdspark/sparkng-locale');
        expect(mapModuleSpecifier('primelocale/de.json')).toBe('@bdspark/sparkng-locale/de.json');
        expect(mapModuleSpecifier('primelocale/js/de.js')).toBe('@bdspark/sparkng-locale/js/de.js');
    });

    it('leaves unrelated specifiers alone', () => {
        expect(mapModuleSpecifier('primeng-extensions')).toBeNull();
        expect(mapModuleSpecifier('@angular/core')).toBeNull();
    });
});

describe('swapDependencies', () => {
    it('replaces primeng and only the @primeuix packages that are present', () => {
        const pkg: Record<string, any> = {
            dependencies: {
                primeng: '^21.0.2',
                '@primeuix/themes': '^1.2.0',
                'tailwindcss-primeui': '^0.6.1',
                primeicons: '^7.0.0',
                primelocale: '^2.4.0'
            }
        };
        const result = swapDependencies(pkg);
        expect(result.changed).toBe(true);
        expect(pkg.dependencies.primeng).toBeUndefined();
        expect(pkg.dependencies['@primeuix/themes']).toBeUndefined();
        expect(pkg.dependencies['@bdspark/sparkng']).toBe(VERSIONS['@bdspark/sparkng']);
        expect(pkg.dependencies['@bdspark/sparkng-themes']).toBe(VERSIONS['@bdspark/sparkng-themes']);
        expect(pkg.dependencies['@bdspark/sparkng-styled']).toBeUndefined();
        expect(pkg.dependencies['tailwindcss-primeui']).toBeUndefined();
        expect(pkg.dependencies['@bdspark/sparkng-tailwindcss']).toBe(VERSIONS['@bdspark/sparkng-tailwindcss']);
        expect(pkg.dependencies['primeicons']).toBeUndefined();
        expect(pkg.dependencies['@bdspark/sparkng-icons']).toBe(VERSIONS['@bdspark/sparkng-icons']);
        expect(pkg.dependencies['primelocale']).toBeUndefined();
        expect(pkg.dependencies['@bdspark/sparkng-locale']).toBe(VERSIONS['@bdspark/sparkng-locale']);
        expect(result.removed.sort()).toEqual(['@primeuix/themes', 'primeicons', 'primelocale', 'primeng', 'tailwindcss-primeui']);
    });

    it('handles devDependencies and reports no change when nothing matches', () => {
        const pkg: Record<string, any> = {
            dependencies: { '@angular/core': '^21.0.0' },
            devDependencies: { '@primeuix/utils': '^1.0.0' }
        };
        const result = swapDependencies(pkg);
        expect(result.changed).toBe(true);
        expect(pkg.devDependencies['@bdspark/sparkng-utils']).toBe(VERSIONS['@bdspark/sparkng-utils']);

        const clean: Record<string, any> = { dependencies: { '@angular/core': '^21.0.0' } };
        expect(swapDependencies(clean).changed).toBe(false);
    });
});

describe('declaresPackage', () => {
    it('finds the package in every direct dependency section', () => {
        expect(declaresPackage({ dependencies: { primeng: '^21.0.2' } }, 'primeng')).toBe(true);
        expect(declaresPackage({ devDependencies: { primeng: '^21.0.2' } }, 'primeng')).toBe(true);
        expect(declaresPackage({ peerDependencies: { primeng: '^21.0.0' } }, 'primeng')).toBe(true);
        expect(declaresPackage({ optionalDependencies: { primeng: '^21.0.0' } }, 'primeng')).toBe(true);
    });

    it('finds the package in resolutions, overrides and pnpm.overrides', () => {
        expect(declaresPackage({ resolutions: { primeng: '21.0.2' } }, 'primeng')).toBe(true);
        expect(declaresPackage({ overrides: { primeng: '21.0.2' } }, 'primeng')).toBe(true);
        expect(declaresPackage({ pnpm: { overrides: { primeng: '21.0.2' } } }, 'primeng')).toBe(true);
    });

    it('matches version selectors, yarn resolution paths and nested npm overrides', () => {
        expect(declaresPackage({ overrides: { 'primeng@^20': '21.0.2' } }, 'primeng')).toBe(true);
        expect(declaresPackage({ resolutions: { '**/primeng': '21.0.2' } }, 'primeng')).toBe(true);
        expect(declaresPackage({ resolutions: { 'some-pkg/primeng': '21.0.2' } }, 'primeng')).toBe(true);
        expect(declaresPackage({ overrides: { 'some-pkg': { primeng: '21.0.2' } } }, 'primeng')).toBe(true);
    });

    it('does not match unrelated or similarly-named packages', () => {
        expect(declaresPackage({ dependencies: { 'primeng-extensions': '^1.0.0' } }, 'primeng')).toBe(false);
        expect(declaresPackage({ overrides: { 'primeng-extensions': '^1.0.0' } }, 'primeng')).toBe(false);
        expect(declaresPackage({ dependencies: { '@angular/core': '^21.0.0' } }, 'primeng')).toBe(false);
        expect(declaresPackage({}, 'primeng')).toBe(false);
    });
});

describe('getPrimengMajor', () => {
    it('extracts the first major from common range formats', () => {
        expect(getPrimengMajor({ dependencies: { primeng: '^21.0.2' } })).toBe(21);
        expect(getPrimengMajor({ dependencies: { primeng: '~19.1.0' } })).toBe(19);
        expect(getPrimengMajor({ devDependencies: { primeng: '>=20.0.0 <22' } })).toBe(20);
        expect(getPrimengMajor({ dependencies: { primeng: '21.0.0-rc.1' } })).toBe(21);
    });

    it('reads peerDependencies, optionalDependencies and override-style sections', () => {
        expect(getPrimengMajor({ peerDependencies: { primeng: '^21.0.0' } })).toBe(21);
        expect(getPrimengMajor({ optionalDependencies: { primeng: '^19.0.0' } })).toBe(19);
        expect(getPrimengMajor({ resolutions: { '**/primeng': '20.1.0' } })).toBe(20);
        expect(getPrimengMajor({ overrides: { 'some-pkg': { primeng: '21.0.2' } } })).toBe(21);
        expect(getPrimengMajor({ pnpm: { overrides: { primeng: '21.0.2' } } })).toBe(21);
    });

    it('returns the highest major when several sections disagree', () => {
        expect(getPrimengMajor({ dependencies: { primeng: '^19.0.0' }, overrides: { primeng: '21.0.2' } })).toBe(21);
        expect(getPrimengMajor({ dependencies: { primeng: 'latest' }, peerDependencies: { primeng: '^21.0.0' } })).toBe(21);
    });

    it('returns null when primeng is absent or unparseable', () => {
        expect(getPrimengMajor({ dependencies: {} })).toBeNull();
        expect(getPrimengMajor({})).toBeNull();
        expect(getPrimengMajor({ dependencies: { primeng: 'latest' } })).toBeNull();
    });
});
