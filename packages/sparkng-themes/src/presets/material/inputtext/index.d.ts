import type { StyleOptions } from '@openng/sparkng-styled';
import type { InputTextTokenSections } from '@openng/sparkng-themes/types/inputtext';

export * from '@openng/sparkng-themes/types/inputtext';

declare const root: InputTextTokenSections.Root;
declare const css: InputTextTokenSections.CSS;
declare const _default: {
    root: InputTextTokenSections.Root;
    css: (options: StyleOptions) => string;
};

export { css, _default as default, root };
