import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
    afterNextRender,
    ChangeDetectionStrategy,
    Component,
    computed,
    DestroyRef,
    forwardRef,
    HostBinding,
    inject,
    InjectionToken,
    input,
    model,
    output,
    signal,
    ViewEncapsulation
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseComponent, PARENT_INSTANCE } from '@bdspark/sparkng/basecomponent';
import { Bind, BindModule } from '@bdspark/sparkng/bind';
import { TEXT_EDITOR_CONTEXT } from '../../context/editor.context';
import { createDefaultEditorState, extractHeadingsFromHTML, TextEditorEngine } from '../../engine/editor-engine';
import { blocksToHTML, htmlToBlocks } from '../../engine/block-parser';
import { EditorStyle } from '../../style/editorstyle';
import type {
    EditorHeadingItem,
    TextEditorCommands,
    TextEditorMode,
    TextEditorPlugin,
    TextEditorPluginContext,
    TextEditorRootContext,
    TextEditorState
} from '@bdspark/sparkng/types/editor';

export const TEXT_EDITOR_INSTANCE = new InjectionToken<TextEditorRoot>('TEXT_EDITOR_INSTANCE');

export const TEXT_EDITOR_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TextEditorRoot),
    multi: true
};

/**
 * Basic HTML sanitizer to strip dangerous script tags and inline javascript handlers.
 */
function sanitizeHTML(html: string): string {
    if (!html || typeof html !== 'string') return '';
    return html
        .replace(/<script[\s\S]*?<\/script>/gi, '')
        .replace(/\son\w+="[^"]*"/gi, '')
        .replace(/\son\w+='[^']*'/gi, '')
        .replace(/href="javascript:[^"]*"/gi, 'href="#"')
        .replace(/src="javascript:[^"]*"/gi, 'src=""');
}

@Component({
    selector: 'p-text-editor-root',
    standalone: true,
    imports: [CommonModule, BindModule],
    template: `
        <ng-content></ng-content>
        @if (name()) {
            <input type="hidden" [attr.name]="name()" [value]="serializedValue()" />
        }
    `,
    providers: [
        TEXT_EDITOR_VALUE_ACCESSOR,
        EditorStyle,
        { provide: TEXT_EDITOR_INSTANCE, useExisting: TextEditorRoot },
        { provide: PARENT_INSTANCE, useExisting: TextEditorRoot },
        {
            provide: TEXT_EDITOR_CONTEXT,
            useFactory: (comp: TextEditorRoot) => comp.context,
            deps: [TextEditorRoot]
        }
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    host: {
        '[class]': "cn(cx('textEditorRoot'), styleClass())",
        '[style]': 'style()',
        '[attr.data-mode]': 'mode()',
        '[attr.data-scope]': '"texteditor"',
        '[attr.data-part]': '"root"',
        '[attr.data-disabled]': 'disabled() ? "true" : null',
        '[attr.data-readonly]': 'readonly() ? "true" : null'
    },
    hostDirectives: [Bind]
})
export class TextEditorRoot extends BaseComponent implements ControlValueAccessor {
    componentName = 'TextEditorRoot';
    _componentStyle = inject(EditorStyle);
    bindDirectiveInstance = inject(Bind, { self: true });
    private destroyRef = inject(DestroyRef);

    // Inputs & Models
    public value = model<string | string[]>('');
    public mode = input<TextEditorMode>('classic');
    public placeholder = input<string>("Write something or press '/' for commands...");
    public markdown = input<boolean>(true);
    public disabled = input<boolean>(false);
    public readonly = input<boolean>(false);
    public sanitize = input<boolean>(true);
    public name = input<string>('');
    public styleClass = input<string>('');
    public style = input<string | { [klass: string]: any }>('');
    public plugins = input<Array<TextEditorPlugin | [TextEditorPlugin, any]>>([]);

    // Outputs
    public onValueChange = output<string | string[]>();
    public onSelectionChange = output<TextEditorState>();
    public onFocus = output<FocusEvent>();
    public onBlur = output<FocusEvent>();
    public onTextChange = output<string>();
    public onEditorInit = output<TextEditorRoot>();

    // Internal State
    public stateSignal = signal<TextEditorState>(createDefaultEditorState());
    public headingsSignal = signal<EditorHeadingItem[]>([]);
    public pluginCommandsSignal = signal<Record<string, Record<string, (...args: any[]) => any>>>({});

    private engine = new TextEditorEngine(() => this.getContentElement());
    private contentElement: HTMLElement | null = null;

    // ControlValueAccessor callbacks
    public onModelChange: any = () => {};
    public onModelTouched: any = () => {};

    @HostBinding('style.--p-text-editor-toolbar-height')
    public toolbarHeight = '44px';

    override onAfterViewChecked(): void {
        this.bindDirectiveInstance.setAttrs(this.ptms(['host', 'root']));
    }

    public serializedValue = computed(() => {
        const v = this.value();
        const raw = Array.isArray(v) ? blocksToHTML(v) : v || '';
        return this.sanitize() ? sanitizeHTML(raw) : raw;
    });

    // Root Context
    public readonly context: TextEditorRootContext = {
        commands: computed(() => this.commands),
        state: computed(() => this.stateSignal()),
        pluginCommands: computed(() => this.pluginCommandsSignal()),
        headings: computed(() => this.headingsSignal()),
        disabled: computed(() => this.disabled()),
        readonly: computed(() => this.readonly()),
        mode: computed(() => this.mode()),
        getHTML: () => this.getHTML(),
        getJSON: () => ({ type: 'doc', content: this.getHTML() }),
        getBlocks: () => this.getBlocks(),
        getText: () => this.getText(),
        getMarkdown: () => this.getHTML(),
        setValue: (val: any) => this.setValue(val)
    };

    // Commands Object
    public readonly commands: TextEditorCommands = {
        bold: () => this.executeCmd('bold'),
        italic: () => this.executeCmd('italic'),
        underline: () => this.executeCmd('underline'),
        strikethrough: () => this.executeCmd('strikeThrough'),
        subscript: () => this.executeCmd('subscript'),
        superscript: () => this.executeCmd('superscript'),
        code: () => this.wrapInlineCode(),
        paragraph: () => this.executeCmd('formatBlock', '<p>'),
        heading: (level: number) => this.executeCmd('formatBlock', `<h${level}>`),
        blockquote: () => this.executeCmd('formatBlock', '<blockquote>'),
        bulletList: () => this.executeCmd('insertUnorderedList'),
        orderedList: () => this.executeCmd('insertOrderedList'),
        taskList: () => this.insertTaskList(),
        codeBlock: (lang = '') => this.executeCmd('formatBlock', '<pre>'),
        horizontalRule: () => this.executeCmd('insertHorizontalRule'),
        align: (align: 'left' | 'center' | 'right' | 'justify') => {
            const map = { left: 'justifyLeft', center: 'justifyCenter', right: 'justifyRight', justify: 'justifyFull' };
            this.executeCmd(map[align]);
        },
        color: (col: string) => this.executeCmd('foreColor', col),
        background: (col: string) => this.executeCmd('hiliteColor', col),
        font: (fontName: string) => this.executeCmd('fontName', fontName),
        fontSize: (size: string) => {
            this.engine.setFontSize(size);
            this.syncFromDOM();
        },
        link: (url: string | null) => this.executeCmd('createLink', url),
        unlink: () => this.executeCmd('unlink'),
        image: (src: string, alt = '') => this.executeCmd('insertImage', src),
        document: (src: string, title = 'Document') => {
            this.executeCmd('insertHTML', `<a href="${src}" target="_blank" class="p-text-editor-doc-link">📄 ${title}</a>`);
        },
        table: (rows = 3, cols = 3) => {
            this.engine.insertTable(rows, cols);
            this.syncFromDOM();
        },
        addRow: (before = false) => {
            this.engine.addTableRow(before);
            this.syncFromDOM();
        },
        addRowBefore: () => {
            this.engine.addTableRow(true);
            this.syncFromDOM();
        },
        addRowAfter: () => {
            this.engine.addTableRow(false);
            this.syncFromDOM();
        },
        deleteRow: () => {
            this.engine.deleteTableRow();
            this.syncFromDOM();
        },
        addColumn: (before = false) => {
            this.engine.addTableColumn(before);
            this.syncFromDOM();
        },
        addColumnBefore: () => {
            this.engine.addTableColumn(true);
            this.syncFromDOM();
        },
        addColumnAfter: () => {
            this.engine.addTableColumn(false);
            this.syncFromDOM();
        },
        deleteColumn: () => {
            this.engine.deleteTableColumn();
            this.syncFromDOM();
        },
        deleteTable: () => {
            this.engine.deleteTable();
            this.syncFromDOM();
        },
        mergeCells: () => {},
        splitCell: () => {},
        details: (summary = 'Toggle heading', content = 'Hidden content') => {
            const html = `<details class="p-text-editor-details"><summary>${summary}</summary><p>${content}</p></details><p><br></p>`;
            this.executeCmd('insertHTML', html);
        },
        toggleInvisibleCharacters: () => {
            const el = this.getContentElement();
            if (el) {
                el.classList.toggle('p-text-editor-show-invisibles');
                const hasClass = el.classList.contains('p-text-editor-show-invisibles');
                this.stateSignal.update((s) => ({ ...s, invisibleCharacters: hasClass }));
            }
        },
        print: () => {
            this.engine.print();
        },
        clearFormatting: () => this.executeCmd('removeFormat'),
        undo: () => {
            const prev = this.engine.undo();
            if (prev !== null) {
                this.setValue(this.mode() === 'block' ? htmlToBlocks(prev) : prev);
            }
        },
        redo: () => {
            const next = this.engine.redo();
            if (next !== null) {
                this.setValue(this.mode() === 'block' ? htmlToBlocks(next) : next);
            }
        },
        insertText: (text: string) => this.executeCmd('insertHTML', text),
        insertHTML: (html: string) => this.executeCmd('insertHTML', html),
        selectAll: () => {
            const el = this.getContentElement();
            if (el && typeof document !== 'undefined') {
                const range = document.createRange();
                range.selectNodeContents(el);
                const sel = window.getSelection();
                sel?.removeAllRanges();
                sel?.addRange(range);
            }
        }
    };

    constructor() {
        super();
        afterNextRender(() => {
            this.initToolbarHeightObserver();
            this.initPlugins();
            this.syncToDOM();
            this.onEditorInit.emit(this);
        });
    }

    // ControlValueAccessor methods
    public writeValue(value: any): void {
        this.value.set(value || '');
        this.syncToDOM();
    }

    public registerOnChange(fn: any): void {
        this.onModelChange = fn;
    }

    public registerOnTouched(fn: any): void {
        this.onModelTouched = fn;
    }

    public setDisabledState?(isDisabled: boolean): void {
        // Disabled state can be bound to disabled input
    }

    public registerContentElement(el: HTMLElement): void {
        this.contentElement = el;
        this.syncToDOM();
    }

    public getContentElement(): HTMLElement | null {
        if (!this.contentElement && isPlatformBrowser(this.platformId)) {
            this.contentElement = this.el.nativeElement.querySelector('.p-text-editor-content');
        }
        return this.contentElement;
    }

    public syncFromDOM(): void {
        const el = this.getContentElement();
        if (!el) return;

        const html = el.innerHTML;
        this.engine.saveSnapshot(html);

        if (this.mode() === 'block') {
            const blocks = htmlToBlocks(html);
            this.value.set(blocks);
            this.onValueChange.emit(blocks);
            this.onModelChange(blocks);
        } else {
            this.value.set(html);
            this.onValueChange.emit(html);
            this.onModelChange(html);
        }
        this.onModelTouched();
        this.onTextChange.emit(html);

        this.updateState();
    }

    public syncToDOM(): void {
        const el = this.getContentElement();
        if (!el) return;

        const targetHTML = this.serializedValue();
        if (el.innerHTML !== targetHTML) {
            el.innerHTML = targetHTML || '<p><br></p>';
            this.engine.saveSnapshot(targetHTML);
            this.updateState();
        }
    }

    public updateState(): void {
        const state = this.engine.queryState();
        const el = this.getContentElement();
        if (el) {
            state.invisibleCharacters = el.classList.contains('p-text-editor-show-invisibles');
            state.focusMode = this.el.nativeElement.classList.contains('p-text-editor-focus-mode');
        }
        this.stateSignal.set(state);

        const html = this.serializedValue();
        this.headingsSignal.set(extractHeadingsFromHTML(html));
        this.onSelectionChange.emit(state);
    }

    private executeCmd(cmd: string, val: any = null): void {
        if (this.disabled() || this.readonly()) return;
        this.engine.executeCommand(cmd, val);
        this.syncFromDOM();
    }

    private wrapInlineCode(): void {
        const sel = window.getSelection();
        if (!sel || sel.isCollapsed) return;
        const text = sel.toString();
        this.executeCmd('insertHTML', `<code>${text}</code>`);
    }

    private insertTaskList(): void {
        const html = '<ul class="p-text-editor-task-list" data-p-checked-list="true"><li data-p-checked="false"><label><input type="checkbox"/> Task</label></li></ul><p><br></p>';
        this.executeCmd('insertHTML', html);
    }

    private initToolbarHeightObserver(): void {
        if (!isPlatformBrowser(this.platformId)) return;
        const toolbarEl = this.el.nativeElement.querySelector('.p-text-editor-toolbar');
        if (toolbarEl) {
            const h = toolbarEl.offsetHeight;
            this.toolbarHeight = `${h}px`;
        }
    }

    private initPlugins(): void {
        const registeredCommands: Record<string, Record<string, (...args: any[]) => any>> = {};

        for (const item of this.plugins()) {
            const plugin: TextEditorPlugin = Array.isArray(item) ? item[0] : item;
            const options = Array.isArray(item) ? item[1] : plugin.options;

            const ctx: TextEditorPluginContext = {
                getSelectedText: () => this.stateSignal().selectedText,
                replaceSelection: (content, asHtml) => {
                    if (asHtml) this.commands.insertHTML(content);
                    else this.commands.insertText(content);
                },
                getEditorElement: () => this.getContentElement(),
                options,
                onUnmounted: () => {},
                runCommand: (cmd, ...args) => this.engine.executeCommand(cmd, args[0])
            };

            const installed = plugin.install(ctx);
            if (installed && installed.commands) {
                registeredCommands[plugin.name] = installed.commands;
            }
        }

        this.pluginCommandsSignal.set(registeredCommands);
    }

    public getHTML(): string {
        return this.serializedValue();
    }

    public getBlocks(): string[] {
        const v = this.value();
        return Array.isArray(v) ? v : htmlToBlocks(v || '');
    }

    public getText(): string {
        const el = this.getContentElement();
        return el ? (el.innerText || '').trim() : '';
    }

    public setValue(val: any): void {
        this.value.set(val);
        this.syncToDOM();
    }
}
