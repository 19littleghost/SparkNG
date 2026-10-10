import type { StyleOptions } from '@bdspark/sparkng-styled';
import type { InputGroupTokenSections } from '@bdspark/sparkng-themes/types/inputgroup';

export * from '@bdspark/sparkng-themes/types/inputgroup';

declare const addon: InputGroupTokenSections.Addon;
declare const css: InputGroupTokenSections.CSS;
declare const _default: {
    addon: InputGroupTokenSections.Addon;
    css: (options: StyleOptions) => string;
};

export { addon, css, _default as default };
