<div align="center">
</div>

# @bdspark/sparkng-tailwindcss

Tailwind CSS utilities for [SparkNG](https://github.com/TODO-BDSPARK-ORG/sparkng) — first-class integration between SparkNG theming and Tailwind CSS, plus the animation utilities missing from core Tailwind.

This package ships two libraries: a CSS package compatible with Tailwind CSS v4, and a JS plugin for Tailwind CSS v3.

## Installation

```bash
npm install @bdspark/sparkng-tailwindcss
```

## Tailwind CSS v4

In the CSS file that contains the `tailwindcss` import, add the import for this package as well.

```css
@import 'tailwindcss';
@import '@bdspark/sparkng-tailwindcss';
```

## Tailwind CSS v3

Use the `plugins` option in your Tailwind config file.

```js
import OptimusUiTailwind from '@bdspark/sparkng-tailwindcss';

export default {
    // ...
    plugins: [OptimusUiTailwind]
};
```

## Features

- Semantic color utilities backed by the SparkNG theme (e.g. `bg-primary`, `text-surface-500`, `text-muted-color`) that work in both styled and unstyled modes.
- Animation utilities: `animate-*` keyframes, duration, delay, direction, fill-mode, iteration, play-state, timing-function, and enter/leave helpers.
- Variants such as `p-dark` for dark-mode styling of SparkNG components.

See the [SparkNG Tailwind documentation](https://github.com/TODO-BDSPARK-ORG/sparkng) for usage details.
