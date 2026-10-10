import type { TagTokenSections } from '@openng/sparkng-themes/types/tag';

export * from '@openng/sparkng-themes/types/tag';

declare const root: TagTokenSections.Root;
declare const icon: TagTokenSections.Icon;
declare const colorScheme: TagTokenSections.ColorScheme;
declare const _default: {
    root: TagTokenSections.Root;
    icon: TagTokenSections.Icon;
    colorScheme: TagTokenSections.ColorScheme;
};

export { colorScheme, _default as default, icon, root };
