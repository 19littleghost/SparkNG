# Tailwind CSS v4 Playground

Vite sandbox for [`@bdspark/sparkng-tailwindcss`](../../../packages/sparkng-tailwindcss) on Tailwind CSS v4 (`@tailwindcss/vite` plugin — no `tailwind.config` needed).

- `vite.config.ts` registers `@tailwindcss/vite`.
- `tailwind.css` imports `tailwindcss` and the plugin (`@import '@bdspark/sparkng-tailwindcss';` — its CSS entry providing `@utility` rules and theme colors) plus sample `--p-*` design tokens.

```bash
pnpm run build:sparkng   # builds the plugin's dist/ output once
pnpm install
pnpm run dev             # http://localhost:4000
```

See the [parent README](../README.md) for what the demo page covers.
