/**
 * @file
 * Context tokens exposed by the TextEditor compound parts.
 */

import { InjectionToken } from '@angular/core';
import type {
    BlockControlsContextValue,
    BlockMenuContextValue,
    ContextToolbarContextValue,
    MentionMenuContextValue,
    NavigatorContextValue,
    SlashMenuContextValue,
    TableColumnMenuContextValue,
    TableRowMenuContextValue,
    TableControlsContextValue,
    TableCellMenuContextValue,
    TextEditorContextValue,
    UploadContextValue
} from '@bdspark/sparkng/types/texteditor';

/**
 * Internal API parts use to register themselves and read overlay request state.
 * Not part of the public documentation surface; underscore-prefixed on purpose.
 * @group Interfaces
 */
export interface TextEditorInternalApi {
    /**
     * Registers the presence of a mounted part; enables the matching runtime feature.
     */
    registerPart(name: 'toolbar' | 'contextToolbar' | 'slashMenu' | 'mentionMenu' | 'imageUpload' | 'documentUpload' | 'navigator' | 'blockControls' | 'blockMenu' | 'tableControls' | 'tableColumnMenu' | 'tableRowMenu' | 'tableCellMenu'): void;
    /**
     * Root-relative caret position for the pending context toolbar request, or null.
     */
    contextToolbarRequest: () => { top: number; left: number; bottom: number } | null;
    /**
     * Dismisses a pending context toolbar request.
     */
    dismissContextToolbar(): void;
    /**
     * Root-relative state of the open slash menu, or null.
     */
    slashMenuRequest: () => { text: string; top: number; left: number; bottom: number } | null;
    /**
     * Removes the `/query` trigger range from the document.
     */
    removeSlashTrigger(): void;
    /**
     * Root-relative state of the open mention menu, or null.
     */
    mentionRequest: () => { items: unknown[]; text: string; top: number; left: number; bottom: number } | null;
    /**
     * Removes the `@query` trigger range from the document.
     */
    removeMentionTrigger(): void;
    /**
     * Registers keyboard handling for the active type-ahead surface (slash/mention menus).
     */
    registerTypeahead(controller: { onArrow(dir: 1 | -1): boolean; onEnter(): boolean; onEscape(): boolean }): void;
    /**
     * Starts image uploads through the mounted image upload part.
     */
    startImageUploads(files: File[]): void;
    /**
     * Starts document uploads through the mounted document upload part.
     */
    startDocumentUploads(files: File[]): void;
    /**
     * Opens the file picker of the mounted image upload part.
     */
    openImageUpload(): void;
    /**
     * Opens the file picker of the mounted document upload part.
     */
    openDocumentUpload(): void;
    /**
     * Root-relative geometry of the active table, or null.
     */
    tableOverlayRect: () => { top: number; left: number; width: number; height: number } | null;
    /**
     * Active table state, or null when the cursor is outside any table.
     */
    tableActiveState: () => { rowIndex: number; colIndex: number; rowCount: number; colCount: number } | null;
    /**
     * Opens the table column menu for `colIndex`.
     */
    requestTableColumnMenu(colIndex: number): void;
    /**
     * Opens the table row menu for `rowIndex`.
     */
    requestTableRowMenu(rowIndex: number): void;
    /**
     * Opens the table cell menu.
     */
    requestTableCellMenu(): void;
    /**
     * Hovered block in block mode, or null.
     */
    blockHover: () => { element: HTMLElement | null; index: number } | null;
    /**
     * Inserts an empty block after `index` (block mode).
     */
    addBlockAfter(index: number): void;
    /**
     * Moves a block (block mode).
     */
    moveBlock(from: number, to: number): void;
    /**
     * Starts a block drag (block mode).
     */
    onBlockDragStart(index: number, event: DragEvent): void;
    /**
     * Ends a block drag (block mode).
     */
    onBlockDragEnd(): void;
    /**
     * Opens the block menu for `index` (block mode).
     */
    requestBlockMenu(index: number): void;
    /**
     * Root-relative anchor for the open block menu, or null.
     */
    blockMenuAnchor: () => { top: number; left: number } | null;
    /**
     * Whether the editor runs in block mode.
     */
    isBlockMode: () => boolean;
}

/**
 * Full context type carried by {@link TEXTEDITOR_CONTEXT}.
 * @group Interfaces
 */
export type TextEditorRootContext = TextEditorContextValue & TextEditorInternalApi;

/**
 * Root context provided by `p-texteditor-root`; projected widgets inject it to reach
 * commands, state, plugin commands and value serializers. Every field is a signal.
 * @group Tokens
 */
export const TEXTEDITOR_CONTEXT = new InjectionToken<TextEditorRootContext>('TEXTEDITOR_CONTEXT');

/**
 * Context provided by `p-texteditor-context-toolbar`.
 * @group Tokens
 */
export const CONTEXTTOOLBAR_CONTEXT = new InjectionToken<ContextToolbarContextValue>('CONTEXTTOOLBAR_CONTEXT');

/**
 * Context provided by `p-texteditor-block-controls`.
 * @group Tokens
 */
export const BLOCKCONTROLS_CONTEXT = new InjectionToken<BlockControlsContextValue>('BLOCKCONTROLS_CONTEXT');

/**
 * Context provided by `p-texteditor-block-menu`.
 * @group Tokens
 */
export const BLOCKMENU_CONTEXT = new InjectionToken<BlockMenuContextValue>('BLOCKMENU_CONTEXT');

/**
 * Context provided by `p-texteditor-slash-menu`.
 * @group Tokens
 */
export const SLASHMENU_CONTEXT = new InjectionToken<SlashMenuContextValue>('SLASHMENU_CONTEXT');

/**
 * Context provided by `p-texteditor-mention-menu`. Generic over the suggestion item type.
 * @group Tokens
 */
export const MENTIONMENU_CONTEXT = new InjectionToken<MentionMenuContextValue<any>>('MENTIONMENU_CONTEXT');

/**
 * Context provided by the upload parts.
 * @group Tokens
 */
export const UPLOAD_CONTEXT = new InjectionToken<UploadContextValue>('UPLOAD_CONTEXT');

/**
 * Context provided by `p-texteditor-table-controls`.
 * @group Tokens
 */
export const TABLECONTROLS_CONTEXT = new InjectionToken<TableControlsContextValue>('TABLECONTROLS_CONTEXT');

/**
 * Context provided by `p-texteditor-table-column-menu`.
 * @group Tokens
 */
export const TABLECOLUMNMENU_CONTEXT = new InjectionToken<TableColumnMenuContextValue>('TABLECOLUMNMENU_CONTEXT');

/**
 * Context provided by `p-texteditor-table-row-menu`.
 * @group Tokens
 */
export const TABLEROWMENU_CONTEXT = new InjectionToken<TableRowMenuContextValue>('TABLEROWMENU_CONTEXT');

/**
 * Context provided by `p-texteditor-table-cell-menu`.
 * @group Tokens
 */
export const TABLECELLMENU_CONTEXT = new InjectionToken<TableCellMenuContextValue>('TABLECELLMENU_CONTEXT');

/**
 * Context provided by the navigator parts.
 * @group Tokens
 */
export const NAVIGATOR_CONTEXT = new InjectionToken<NavigatorContextValue>('NAVIGATOR_CONTEXT');
