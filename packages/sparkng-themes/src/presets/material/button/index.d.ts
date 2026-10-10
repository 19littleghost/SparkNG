import type { StyleOptions } from '@openng/sparkng-styled';
import type { ButtonTokenSections } from '@openng/sparkng-themes/types/button';

export * from '@openng/sparkng-themes/types/button';

declare const root: ButtonTokenSections.Root;
declare const colorScheme: ButtonTokenSections.ColorScheme;
declare const css: ButtonTokenSections.CSS;
declare const _default: {
    root: ButtonTokenSections.Root;
    colorScheme: ButtonTokenSections.ColorScheme;
    css: (options: StyleOptions) => string;
};

export { colorScheme, css, _default as default, root };
