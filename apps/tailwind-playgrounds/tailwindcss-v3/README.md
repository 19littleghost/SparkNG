# Tailwind CSS v3 Playground

Vite sandbox for [`@bdspark/sparkng-tailwindcss`](../../../packages/sparkng-tailwindcss) on Tailwind CSS v3 (PostCSS pipeline).

- `tailwind.config.js` registers the plugin (`plugins: [OptimusUiTailwind]`); content scanning covers `index.html`.
- `tailwind.css` declares the `@tailwind` directives plus sample `--p-*` design tokens the plugin's color utilities resolve to.

```bash
pnpm run build:sparkng   # builds the plugin's dist/ output once
pnpm install
pnpm run dev             # http://localhost:3000
```

See the [parent README](../README.md) for what the demo page covers.
