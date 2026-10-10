import type { StyleOptions } from '@bdspark/sparkng-styled';
import type { CheckboxTokenSections } from '@bdspark/sparkng-themes/types/checkbox';

export * from '@bdspark/sparkng-themes/types/checkbox';

declare const root: CheckboxTokenSections.Root;
declare const icon: CheckboxTokenSections.Icon;
declare const css: CheckboxTokenSections.CSS;
declare const _default: {
    root: CheckboxTokenSections.Root;
    icon: CheckboxTokenSections.Icon;
    css: (options: StyleOptions) => string;
};

export { css, _default as default, icon, root };

