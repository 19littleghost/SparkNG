import type { SplitterTokenSections } from '@openng/sparkng-themes/types/splitter';

export * from '@openng/sparkng-themes/types/splitter';

declare const root: SplitterTokenSections.Root;
declare const gutter: SplitterTokenSections.Gutter;
declare const handle: SplitterTokenSections.Handle;
declare const css: SplitterTokenSections.CSS;
declare const _default: {
    root: SplitterTokenSections.Root;
    gutter: SplitterTokenSections.Gutter;
    handle: SplitterTokenSections.Handle;
    css: string;
};

export { css, _default as default, gutter, handle, root };
