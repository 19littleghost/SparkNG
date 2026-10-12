import { Signal, TemplateRef } from '@angular/core';
import { PassThrough, PassThroughOption } from '@bdspark/sparkng/api';

/**
 * Text Editor Mode
 * @group Types
 */
export type TextEditorMode = 'classic' | 'block';

/**
 * Document heading outline entry
 * @group Interfaces
 */
export interface EditorHeadingItem {
    id: string;
    text: string;
    level: number;
}

/**
 * Commands interface for TextEditor formatting and document operations.
 * @group Interfaces
 */
export interface TextEditorCommands {
    bold: () => void;
    italic: () => void;
    underline: () => void;
    strikethrough: () => void;
    subscript: () => void;
    superscript: () => void;
    code: () => void;
    paragraph: () => void;
    heading: (level: number) => void;
    blockquote: () => void;
    bulletList: () => void;
    orderedList: () => void;
    taskList: () => void;
    codeBlock: (language?: string) => void;
    horizontalRule: () => void;
    align: (alignment: 'left' | 'center' | 'right' | 'justify') => void;
    color: (color: string) => void;
    background: (color: string) => void;
    font: (fontName: string) => void;
    fontSize: (size: string) => void;
    link: (url: string | null) => void;
    unlink: () => void;
    image: (src: string, alt?: string) => void;
    document: (src: string, title?: string) => void;
    table: (rows?: number, cols?: number) => void;
    addRow: (before?: boolean) => void;
    addRowBefore?: () => void;
    addRowAfter?: () => void;
    deleteRow?: () => void;
    addColumn: (before?: boolean) => void;
    addColumnBefore?: () => void;
    addColumnAfter?: () => void;
    deleteColumn?: () => void;
    deleteTable?: () => void;
    mergeCells?: () => void;
    splitCell?: () => void;
    details: (summary?: string, content?: string) => void;
    toggleInvisibleCharacters: () => void;
    print: () => void;
    clearFormatting: () => void;
    undo: () => void;
    redo: () => void;
    insertText: (text: string) => void;
    insertHTML: (html: string) => void;
    selectAll: () => void;
    [key: string]: any;
}

/**
 * Active formatting state of the text editor.
 * @group Interfaces
 */
export interface TextEditorState {
    bold: boolean;
    italic: boolean;
    underline: boolean;
    strikethrough: boolean;
    subscript: boolean;
    superscript: boolean;
    code: boolean;
    heading: number | null;
    blockquote: boolean;
    bulletList: boolean;
    orderedList: boolean;
    taskList: boolean;
    codeBlock: boolean;
    align: 'left' | 'center' | 'right' | 'justify';
    color: string | null;
    background: string | null;
    font: string | null;
    fontSize: string | null;
    link: string | null;
    inTable: boolean;
    canUndo: boolean;
    canRedo: boolean;
    invisibleCharacters: boolean;
    focusMode: boolean;
    selectionEmpty: boolean;
    selectedText: string;
    [key: string]: any;
}

/**
 * Text Editor Root Context
 * @group Interfaces
 */
export interface TextEditorRootContext {
    commands: Signal<TextEditorCommands>;
    state: Signal<TextEditorState>;
    pluginCommands: Signal<Record<string, Record<string, (...args: any[]) => any>>>;
    headings: Signal<EditorHeadingItem[]>;
    disabled: Signal<boolean>;
    readonly: Signal<boolean>;
    mode: Signal<TextEditorMode>;
    getHTML: () => string;
    getJSON: () => any;
    getBlocks: () => string[];
    getText: () => string;
    getMarkdown: () => string;
    setValue: (val: any) => void;
}

/**
 * Context Toolbar Context
 * @group Interfaces
 */
export interface ContextToolbarContext {
    commands: Signal<TextEditorCommands>;
    state: Signal<TextEditorState>;
    plugins: Signal<Record<string, any>>;
    moreActive: Signal<boolean>;
    toggleMore: () => void;
    dismiss: () => void;
}

/**
 * Block Controls Context
 * @group Interfaces
 */
export interface BlockControlsContext {
    index: Signal<number>;
    blockType: Signal<string>;
    addBlock: (index: number) => void;
    onDragStart: (index: number, event: DragEvent) => void;
    onDragEnd: () => void;
    onDragHandleClick: (index: number, event: MouseEvent) => void;
}

/**
 * Block Menu Context
 * @group Interfaces
 */
export interface BlockMenuContext {
    blockIndex: Signal<number>;
    blockType: Signal<string>;
    commands: Signal<TextEditorCommands>;
    state: Signal<TextEditorState>;
    submenu: Signal<string | null>;
    openSubmenu: (name: string) => void;
    dismiss: () => void;
}

/**
 * Slash Menu Context
 * @group Interfaces
 */
export interface SlashMenuContext {
    commands: Signal<TextEditorCommands>;
    state: Signal<TextEditorState>;
    filterText: Signal<string>;
    position: Signal<{ x: number; y: number } | null>;
    dismiss: () => void;
}

/**
 * Mention Menu Context
 * @group Interfaces
 */
export interface MentionMenuContext<T = any> {
    items: Signal<T[]>;
    filterText: Signal<string>;
    position: Signal<{ x: number; y: number } | null>;
    commands: {
        select: (item: T) => void;
    };
    dismiss: () => void;
}

/**
 * Table Controls Context
 * @group Interfaces
 */
export interface TableControlsContext {
    position: Signal<{ x: number; y: number } | null>;
    commands: {
        addRow: (before?: boolean) => void;
        addColumn: (before?: boolean) => void;
        deleteRow: () => void;
        deleteColumn: () => void;
        deleteTable: () => void;
    };
}

/**
 * Upload Context
 * @group Interfaces
 */
export interface UploadContext {
    kind: Signal<'image' | 'document'>;
    uploads: Signal<Array<{ id: string; name: string; progress: number; error?: string }>>;
    selectFiles: () => void;
    onDrop: (event: DragEvent) => void;
    dismiss: () => void;
}

/**
 * Navigator Minimap Context
 * @group Interfaces
 */
export interface NavigatorContext {
    headings: Signal<EditorHeadingItem[]>;
    activeIndex: Signal<number>;
    menuOpen: Signal<boolean>;
    openMenu: () => void;
    closeMenu: () => void;
    scrollTo: (index: number) => void;
}

/**
 * Plugin API context
 * @group Interfaces
 */
export interface TextEditorPluginContext {
    getSelectedText: () => string;
    replaceSelection: (content: string, asHtml?: boolean) => void;
    getEditorElement: () => HTMLElement | null;
    options: any;
    onUnmounted: (fn: () => void) => void;
    runCommand: (command: string, ...args: any[]) => boolean;
}

/**
 * Plugin definition return type
 * @group Interfaces
 */
export interface TextEditorPlugin<TOptions = any> {
    name: string;
    install: (ctx: TextEditorPluginContext) => {
        commands?: Record<string, (...args: any[]) => any>;
    };
    options?: TOptions;
}

/**
 * Custom passthrough(pt) options for modern TextEditor.
 * @group Interface
 */
export interface TextEditorPassThroughOptions<I = unknown> {
    root?: PassThroughOption<HTMLDivElement, I>;
    toolbar?: PassThroughOption<HTMLDivElement, I>;
    content?: PassThroughOption<HTMLDivElement, I>;
    body?: PassThroughOption<HTMLDivElement, I>;
    contextToolbar?: PassThroughOption<HTMLDivElement, I>;
    blockControls?: PassThroughOption<HTMLDivElement, I>;
    blockMenu?: PassThroughOption<HTMLDivElement, I>;
    slashMenu?: PassThroughOption<HTMLDivElement, I>;
    mentionMenu?: PassThroughOption<HTMLDivElement, I>;
    navigator?: PassThroughOption<HTMLDivElement, I>;
}

export type TextEditorPassThrough<I = unknown> = PassThrough<I, TextEditorPassThroughOptions<I>>;

// ==========================================
// LEGACY COMPATIBILITY INTERFACES
// ==========================================

/**
 * Custom passthrough(pt) options for legacy Editor.
 * @template I Type of instance.
 *
 * @see {@link Editor.pt}
 * @group Interface
 */
export interface EditorPassThroughOptions<I = unknown> {
    root?: PassThroughOption<HTMLDivElement, I>;
    toolbar?: PassThroughOption<HTMLDivElement, I>;
    formats?: PassThroughOption<HTMLSpanElement, I>;
    header?: PassThroughOption<HTMLSelectElement, I>;
    option?: PassThroughOption<HTMLOptionElement, I>;
    bold?: PassThroughOption<HTMLButtonElement, I>;
    italic?: PassThroughOption<HTMLButtonElement, I>;
    underline?: PassThroughOption<HTMLButtonElement, I>;
    color?: PassThroughOption<HTMLSelectElement, I>;
    background?: PassThroughOption<HTMLSelectElement, I>;
    list?: PassThroughOption<HTMLButtonElement, I>;
    select?: PassThroughOption<HTMLSelectElement, I>;
    link?: PassThroughOption<HTMLButtonElement, I>;
    image?: PassThroughOption<HTMLButtonElement, I>;
    codeBlock?: PassThroughOption<HTMLButtonElement, I>;
    clean?: PassThroughOption<HTMLButtonElement, I>;
    content?: PassThroughOption<HTMLDivElement, I>;
}

/**
 * Defines valid pass-through options in Editor component.
 * @see {@link EditorPassThroughOptions}
 * @template I Type of instance.
 */
export type EditorPassThrough<I = unknown> = PassThrough<I, EditorPassThroughOptions<I>>;

/**
 * Quill Delta object interface for text changes.
 * @group Interfaces
 */
export interface QuillDelta {
    ops?: any[];
    retain?: number;
    delete?: number;
    insert?: string | object;
    attributes?: { [key: string]: any };
}

/**
 * Quill Range object interface for selection changes.
 * @group Interfaces
 */
export interface QuillRange {
    index: number;
    length: number;
}

/**
 * Custom text change event.
 * @see {@link Editor.onTextChange}
 * @group Events
 */
export interface EditorTextChangeEvent {
    htmlValue: string | null;
    textValue: string;
    delta: QuillDelta;
    source: 'user' | 'api' | 'silent';
}

/**
 * Custom selection change event.
 * @see {@link Editor.onSelectionChange}
 * @group Events
 */
export interface EditorSelectionChangeEvent {
    range: QuillRange | null;
    oldRange: QuillRange | null;
    source: 'user' | 'api' | 'silent';
}

/**
 * Custom editor change event.
 * @see {@link Editor.onEditorChange}
 * @group Events
 */
export interface EditorChangeEvent {
    eventName: 'text-change' | 'selection-change';
    args: any[];
}

/**
 * Custom focus event.
 * @see {@link Editor.onFocus}
 * @group Events
 */
export interface EditorFocusEvent {
    source: 'user' | 'api' | 'silent';
}

/**
 * Custom blur event.
 * @see {@link Editor.onBlur}
 * @group Events
 */
export interface EditorBlurEvent {
    source: 'user' | 'api' | 'silent';
}

/**
 * Custom load event.
 * @see {@link Editor.onInit}
 * @group Events
 */
export interface EditorInitEvent {
    editor: any;
}

/**
 * Defines valid templates in Editor.
 * @group Templates
 */
export interface EditorTemplates {
    header(): TemplateRef<any>;
}
