import type { EditorTokenSections } from '@openng/sparkng-themes/types/editor';

export * from '@openng/sparkng-themes/types/editor';

declare const toolbar: EditorTokenSections.Toolbar;
declare const toolbarItem: EditorTokenSections.ToolbarItem;
declare const overlay: EditorTokenSections.Overlay;
declare const overlayOption: EditorTokenSections.OverlayOption;
declare const content: EditorTokenSections.Content;
declare const colorScheme: EditorTokenSections.ColorScheme;
declare const _default: {
    toolbar: EditorTokenSections.Toolbar;
    toolbarItem: EditorTokenSections.ToolbarItem;
    overlay: EditorTokenSections.Overlay;
    overlayOption: EditorTokenSections.OverlayOption;
    content: EditorTokenSections.Content;
    colorScheme: EditorTokenSections.ColorScheme;
};

export { colorScheme, content, _default as default, overlay, overlayOption, toolbar, toolbarItem };
