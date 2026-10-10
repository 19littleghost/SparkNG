import type { InputChipsTokenSections } from '@bdspark/sparkng-themes/types/inputchips';

export * from '@bdspark/sparkng-themes/types/inputchips';

declare const root: InputChipsTokenSections.Root;
declare const chip: InputChipsTokenSections.Chip;
declare const colorScheme: InputChipsTokenSections.ColorScheme;
declare const css: InputChipsTokenSections.CSS;
declare const _default: {
    root: InputChipsTokenSections.Root;
    chip: InputChipsTokenSections.Chip;
    colorScheme: InputChipsTokenSections.ColorScheme;
    css: string;
};

export { chip, colorScheme, css, _default as default, root };
