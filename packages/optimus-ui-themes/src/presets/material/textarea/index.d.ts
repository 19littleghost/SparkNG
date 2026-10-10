import type { StyleOptions } from '@bdspark/sparkng-styled';
import type { TextareaTokenSections } from '@bdspark/sparkng-themes/types/textarea';

export * from '@bdspark/sparkng-themes/types/textarea';

declare const root: TextareaTokenSections.Root;
declare const css: TextareaTokenSections.CSS;
declare const _default: {
    root: TextareaTokenSections.Root;
    css: (options: StyleOptions) => string;
};

export { css, _default as default, root };

