import type { StyleOptions } from '@bdspark/sparkng-styled';
import type { InputTextTokenSections } from '@bdspark/sparkng-themes/types/inputtext';

export * from '@bdspark/sparkng-themes/types/inputtext';

declare const root: InputTextTokenSections.Root;
declare const css: InputTextTokenSections.CSS;
declare const _default: {
    root: InputTextTokenSections.Root;
    css: (options: StyleOptions) => string;
};

export { css, _default as default, root };
