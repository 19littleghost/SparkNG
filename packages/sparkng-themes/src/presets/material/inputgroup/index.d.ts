import type { StyleOptions } from '@openng/sparkng-styled';
import type { InputGroupTokenSections } from '@openng/sparkng-themes/types/inputgroup';

export * from '@openng/sparkng-themes/types/inputgroup';

declare const addon: InputGroupTokenSections.Addon;
declare const css: InputGroupTokenSections.CSS;
declare const _default: {
    addon: InputGroupTokenSections.Addon;
    css: (options: StyleOptions) => string;
};

export { addon, css, _default as default };
