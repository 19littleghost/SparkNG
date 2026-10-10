import { defineConfig } from 'tsdown';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['esm'],
    outDir: 'dist',
    dts: true,
    target: false,
    deps: {
        neverBundle: [/^@bdspark\/sparkng-(.*)$/]
    },
    minify: isProduction,
    sourcemap: isProduction,
    clean: isProduction
});
