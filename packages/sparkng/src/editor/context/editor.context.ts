import { inject, InjectionToken } from '@angular/core';
import type { BlockControlsContext, BlockMenuContext, ContextToolbarContext, MentionMenuContext, NavigatorContext, SlashMenuContext, TableControlsContext, TextEditorRootContext, UploadContext } from '@bdspark/sparkng/types/editor';

/**
 * Root context token exposed by `<p-text-editor-root>`.
 * Accessible anywhere in descendant projected components.
 */
export const TEXT_EDITOR_CONTEXT = new InjectionToken<TextEditorRootContext>('TEXT_EDITOR_CONTEXT');

/**
 * Context token exposed by `<p-text-editor-context-toolbar>`.
 */
export const CONTEXT_TOOLBAR_CONTEXT = new InjectionToken<ContextToolbarContext>('CONTEXT_TOOLBAR_CONTEXT');

/**
 * Context token exposed by `<p-text-editor-block-controls>`.
 */
export const BLOCK_CONTROLS_CONTEXT = new InjectionToken<BlockControlsContext>('BLOCK_CONTROLS_CONTEXT');

/**
 * Context token exposed by `<p-text-editor-block-menu>`.
 */
export const BLOCK_MENU_CONTEXT = new InjectionToken<BlockMenuContext>('BLOCK_MENU_CONTEXT');

/**
 * Context token exposed by `<p-text-editor-slash-menu>`.
 */
export const SLASH_MENU_CONTEXT = new InjectionToken<SlashMenuContext>('SLASH_MENU_CONTEXT');

/**
 * Context token exposed by `<p-text-editor-mention-menu>`.
 */
export const MENTION_MENU_CONTEXT = new InjectionToken<MentionMenuContext>('MENTION_MENU_CONTEXT');

/**
 * Context token exposed by `<p-text-editor-table-controls>`.
 */
export const TABLE_CONTROLS_CONTEXT = new InjectionToken<TableControlsContext>('TABLE_CONTROLS_CONTEXT');

/**
 * Context token exposed by upload dropzones and overlays.
 */
export const UPLOAD_CONTEXT = new InjectionToken<UploadContext>('UPLOAD_CONTEXT');

/**
 * Context token exposed by `<p-text-editor-navigator>`.
 */
export const NAVIGATOR_CONTEXT = new InjectionToken<NavigatorContext>('NAVIGATOR_CONTEXT');

// Convenience inject helpers
export function injectTextEditorContext(): TextEditorRootContext {
    return inject(TEXT_EDITOR_CONTEXT);
}

export function injectContextToolbarContext(): ContextToolbarContext {
    return inject(CONTEXT_TOOLBAR_CONTEXT);
}

export function injectBlockControlsContext(): BlockControlsContext {
    return inject(BLOCK_CONTROLS_CONTEXT);
}

export function injectBlockMenuContext(): BlockMenuContext {
    return inject(BLOCK_MENU_CONTEXT);
}

export function injectSlashMenuContext(): SlashMenuContext {
    return inject(SLASH_MENU_CONTEXT);
}

export function injectMentionMenuContext<T = any>(): MentionMenuContext<T> {
    return inject(MENTION_MENU_CONTEXT);
}

export function injectTableControlsContext(): TableControlsContext {
    return inject(TABLE_CONTROLS_CONTEXT);
}

export function injectUploadContext(): UploadContext {
    return inject(UPLOAD_CONTEXT);
}

export function injectNavigatorContext(): NavigatorContext {
    return inject(NAVIGATOR_CONTEXT);
}
