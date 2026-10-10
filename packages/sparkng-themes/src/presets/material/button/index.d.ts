import type { StyleOptions } from '@bdspark/sparkng-styled';
import type { ButtonTokenSections } from '@bdspark/sparkng-themes/types/button';

export * from '@bdspark/sparkng-themes/types/button';

declare const root: ButtonTokenSections.Root;
declare const colorScheme: ButtonTokenSections.ColorScheme;
declare const css: ButtonTokenSections.CSS;
declare const _default: {
    root: ButtonTokenSections.Root;
    colorScheme: ButtonTokenSections.ColorScheme;
    css: (options: StyleOptions) => string;
};

export { colorScheme, css, _default as default, root };
