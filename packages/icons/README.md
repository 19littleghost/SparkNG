# bdSpark Icons

[PrimeNG is no longer open source](https://www.sparkng.bdspark.com/blog/primeng-is-no-longer-open-source). As of June 2026, PrimeTek archived the official PrimeNG GitHub repository — along with PrimeIcons — and moved future major versions (starting with v22) to a commercial licensing model.

To ensure continued open-source support for those who rely on it, bdSpark has created `@bdspark/icons`, a community fork based on the final MIT-licensed version of PrimeIcons. It is the icon library for [SparkNG](https://github.com/TODO-BDSPARK-ORG/sparkng), our community fork of PrimeNG.

We are currently working on the first release! You can follow our progress and join the discussion on our [roadmap](https://github.com/TODO-BDSPARK-ORG/sparkng/discussions/1289).

## Drop-in compatible

All icons keep their existing `pi pi-*` class names, so switching from PrimeIcons requires no changes to your templates or styles — only the package name and the stylesheet import change.

```html
<i class="pi pi-check"></i>
<i class="pi pi-times"></i>
```

Update your stylesheet import to the new package:

```css
@import "@bdspark/icons/bdspark-icons.css";
```

## Migrating from PrimeIcons

If you are migrating a PrimeNG project to [SparkNG](https://github.com/TODO-BDSPARK-ORG/sparkng), its migration schematic takes care of the icons too — it swaps the `primeicons` dependency for `@bdspark/icons` and rewrites the stylesheet references in `angular.json`, your global stylesheets, and TypeScript imports:

```bash
ng generate @bdspark/sparkng:migrate-from-primeng
```

To migrate by hand instead:

1. Replace the dependency:

   ```bash
   npm uninstall primeicons
   npm install @bdspark/icons
   ```

2. Update the stylesheet path wherever you reference it — in the `styles` array of `angular.json`, a global stylesheet, or a TypeScript import:

   ```diff
   - primeicons/primeicons.css
   + @bdspark/icons/bdspark-icons.css
   ```

That's it — all `pi pi-*` class names are unchanged, so no template or style changes are needed.

## License

Licensed under the MIT License — see [LICENSE](./LICENSE). Based on the final MIT-licensed release of PrimeIcons by PrimeTek.
