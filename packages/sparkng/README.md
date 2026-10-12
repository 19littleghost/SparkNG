<div align="center">

  <h1>SparkNG</h1>
  <p><strong>A rich set of open-source UI Components for Angular</strong></p>

  <p>
    <a href="https://www.npmjs.com/package/@bdspark/sparkng">
      <img src="https://img.shields.io/npm/v/@bdspark/sparkng.svg" alt="npm version">
    </a>
    <a href="https://www.npmjs.com/package/@bdspark/sparkng">
      <img src="https://img.shields.io/npm/dm/@bdspark/sparkng.svg" alt="npm downloads">
    </a>
    <a href="https://github.com/Aronno1920/SparkNG/blob/main/LICENSE">
      <img src="https://img.shields.io/npm/l/@bdspark/sparkng.svg" alt="License">
    </a>
  </p>
</div>

---

SparkNG is a comprehensive library of open-source UI Components for Angular applications. Designed for flexibility and enterprise-readiness, it provides a powerful foundation for building modern web interfaces.

## 📦 Installation

SparkNG provides an Angular CLI schematic for quick and easy installation in a new project. Run:

```bash
ng add @bdspark/sparkng
```

This installs the library and wires `provideOptimus({ theme: { preset: Aura } })` into your
application config (pick a different preset with `--theme Lara|Material|Nora`).

Please note that SparkNG requires **Angular 21+**. 

`ng add` only sets up new projects — on a workspace that already uses PrimeNG it makes no changes
and points you to the migration schematic below.

## Migrating from PrimeNG

SparkNG is API-compatible with PrimeNG v21. On a PrimeNG v21 workspace, run the dedicated
migration schematic:

```bash
ng generate @bdspark/sparkng@1:migrate-from-primeng          # options: --skip-install, --force
```

This replaces `primeng` and `@primeuix/*` dependencies with their `@bdspark` counterparts, rewrites
TypeScript imports (`primeng/button` → `@bdspark/sparkng/button`, `@primeuix/themes/aura` →
`@bdspark/sparkng-themes/aura`), and renames the config API (`providePrimeNG` → `provideOptimus`,
`PrimeNG` → `Spark`, `PrimeNGConfigType` → `OptimusConfigType`). Anything it cannot migrate is
listed as a warning for manual review.

Projects on PrimeNG v20 or older: upgrade to PrimeNG v21 first, then migrate.


## 🚀 Quick Start

SparkNG components can be imported as standalone components or via their respective modules. Here is a quick example demonstrating how to use the `Button` component:

1. Import the component module in your application:

```typescript
import { Component } from '@angular/core';
import { ButtonModule } from '@bdspark/sparkng/button';

@Component({
  selector: 'app-root',
  imports: [ButtonModule],
  template: `<p-button label="Click Me!" />`
})
export class AppComponent {}
```

## 📖 Documentation

For detailed documentation, interactive component demos, theming guides, and more, please visit the official website:

**[SparkNG Documentation](https://sparkng.bdspark.com/)**


## 🤝 Contributing

We welcome and appreciate contributions from the community! If you're interested in helping improve SparkNG, please take a look at our [Contributing Guide](https://github.com/Aronno1920/SparkNG/blob/main/CONTRIBUTING.md) for instructions on how to get started.

## 📄 License

SparkNG is licensed under the [MIT License](https://github.com/Aronno1920/SparkNG/blob/main/LICENSE.md).
