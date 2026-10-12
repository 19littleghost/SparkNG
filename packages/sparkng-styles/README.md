<div align="center">
</div>

# @bdspark/sparkng-styles

Core style definitions and CSS utilities for [SparkNG](https://github.com/Aronno1920/SparkNG).

This package contains the base CSS architectural patterns and component-specific style definitions used across the SparkNG ecosystem. It leverages design tokens for highly customizable and consistent styling.

## Features

- **Component Styles**: Comprehensive CSS definitions for over 80+ UI components.
- **Design Token Integration**: Styles are powered by `dt()` (design token) functions for seamless theming.
- **Modular Architecture**: Styles are organized by component, allowing for lean bundles and targeted imports.
- **Framework Agnostic Core**: While optimized for Angular via SparkNG, the core CSS logic is highly reusable.

## Installation

```bash
npm install @bdspark/sparkng-styles
```

## Core Concepts

### Style Definitions
Each component has its styles defined using standard CSS syntax, enhanced with design tokens. 

Example of a button style fragment:
```css
.p-button {
    background: dt('button.primary.background');
    color: dt('button.primary.color');
    border-radius: dt('button.border.radius');
    transition: background dt('button.transition.duration');
}
```

### Design Tokens (`dt`)
The `dt()` function is used within the style strings to reference theme-specific values. These tokens are resolved at runtime by the `@bdspark/sparkng-styled` engine.

## Usage in SparkNG

This package is a core dependency of `@bdspark/sparkng`. Component styles are exported as named constants (e.g., `ButtonStyle`, `DataTableStyle`) and are automatically consumed by the component library to inject necessary styles into the DOM.

## License

MIT
