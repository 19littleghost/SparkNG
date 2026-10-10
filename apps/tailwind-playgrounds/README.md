# Tailwind Integration Sandboxes

Minimal Vite sandboxes for smoking-test [`@bdspark/sparkng-tailwindcss`](../../packages/sparkng-tailwindcss) — the plugin that maps Optimus UI design tokens (`--p-*` CSS variables) to Tailwind color and animation utilities.

| Sandbox            | Tailwind | Setup                                                                        | Dev port |
| ------------------ | -------- | ---------------------------------------------------------------------------- | -------- |
| `tailwindcss-v3`   | v3.4     | PostCSS pipeline, plugin registered in `tailwind.config.js`                  | 3000     |
| `tailwindcss-v4`   | v4.x     | `@tailwindcss/vite` plugin, plugin imported as CSS in `tailwind.css`         | 4000     |

## Usage

Build the workspace packages first (the sandboxes consume the plugin's `dist/` output), then start either sandbox:

```bash
pnpm run build:sparkng

pnpm run dev:tw3   # http://localhost:3000
pnpm run dev:tw4   # http://localhost:4000
```

Each `index.html` exercises the plugin's output:

- **Colors** — `bg-primary`, `bg-primary-emphasis`, `text-primary-contrast`, the `primary-50…950` scale and `surface-*` tokens, all fed by the sample `--p-*` variables in `tailwind.css`.
- **Animations** — named keyframes (`animate-fadein`, `animate-scalein`, `animate-zoomin`, …) composed with `animate-duration-*`, `animate-delay-*`, `animate-ease-*` and `animate-infinite`, plus a replay button.
- **Enter/leave transitions** — the composable `animate-enter` keyframe with `fade-in-*`, `zoom-in-*` and `slide-in-from-*` modifiers used by Optimus UI overlays.

Edit `index.html` freely — Vite hot-reloads with the plugin's regenerated utilities.
