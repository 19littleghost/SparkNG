import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { BLOCK_CONTROLS_CONTEXT, CONTEXT_TOOLBAR_CONTEXT, TEXT_EDITOR_CONTEXT } from '../../context/editor.context';

@Component({
    selector: 'p-editor-toolbar-ui',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="p-text-editor-toolbar-group">
            <select class="p-text-editor-select" [value]="state().heading || ''" (change)="onHeadingChange($event)" aria-label="Text Style">
                <option value="">Normal</option>
                <option value="1">Heading 1</option>
                <option value="2">Heading 2</option>
                <option value="3">Heading 3</option>
            </select>

            <select class="p-text-editor-select" [value]="state().font || ''" (change)="onFontChange($event)" aria-label="Font Family">
                <option value="">Font: Default</option>
                <option value="Arial, sans-serif">Arial</option>
                <option value="Georgia, serif">Georgia</option>
                <option value="'Courier New', monospace">Courier New</option>
                <option value="'Inter', sans-serif">Inter</option>
            </select>

            <select class="p-text-editor-select" [value]="state().fontSize || ''" (change)="onFontSizeChange($event)" aria-label="Font Size">
                <option value="">Size: Auto</option>
                <option value="12px">12px</option>
                <option value="14px">14px</option>
                <option value="16px">16px</option>
                <option value="18px">18px</option>
                <option value="20px">20px</option>
                <option value="24px">24px</option>
            </select>
        </div>

        <div class="p-text-editor-toolbar-divider"></div>

        <div class="p-text-editor-toolbar-group">
            <button type="button" class="p-text-editor-btn" [class.p-active]="state().bold" [attr.aria-pressed]="state().bold" (click)="commands().bold()" title="Bold (Ctrl+B)" aria-label="Bold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/></svg>
            </button>
            <button type="button" class="p-text-editor-btn" [class.p-active]="state().italic" [attr.aria-pressed]="state().italic" (click)="commands().italic()" title="Italic (Ctrl+I)" aria-label="Italic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="4" x2="10" y2="4"/><line x1="14" y1="20" x2="5" y2="20"/><line x1="15" y1="4" x2="9" y2="20"/></svg>
            </button>
            <button type="button" class="p-text-editor-btn" [class.p-active]="state().underline" [attr.aria-pressed]="state().underline" (click)="commands().underline()" title="Underline (Ctrl+U)" aria-label="Underline">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"/><line x1="4" y1="21" x2="20" y2="21"/></svg>
            </button>
            <button type="button" class="p-text-editor-btn" [class.p-active]="state().strikethrough" [attr.aria-pressed]="state().strikethrough" (click)="commands().strikethrough()" title="Strikethrough" aria-label="Strikethrough">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4H9a3 3 0 0 0-2.83 4M14 12a4 4 0 0 1 0 8H6"/><line x1="4" y1="12" x2="20" y2="12"/></svg>
            </button>
            <button type="button" class="p-text-editor-btn" [class.p-active]="state().subscript" (click)="commands().subscript()" title="Subscript" aria-label="Subscript">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m4 5 8 8"/><path d="m12 5-8 8"/><path d="M20 19h-4c0-1.5 1.5-2 2-3s1-1.5 1-2c0-.5-.5-1-1-1s-1 .5-1 1"/></svg>
            </button>
            <button type="button" class="p-text-editor-btn" [class.p-active]="state().superscript" (click)="commands().superscript()" title="Superscript" aria-label="Superscript">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m4 19 8-8"/><path d="m12 19-8-8"/><path d="M20 9h-4c0-1.5 1.5-2 2-3s1-1.5 1-2c0-.5-.5-1-1-1s-1 .5-1 1"/></svg>
            </button>
            <button type="button" class="p-text-editor-btn" [class.p-active]="state().code" [attr.aria-pressed]="state().code" (click)="commands().code()" title="Inline Code" aria-label="Inline Code">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            </button>
        </div>

        <div class="p-text-editor-toolbar-divider"></div>

        <div class="p-text-editor-toolbar-group">
            <label class="p-text-editor-btn" title="Text Color" aria-label="Text Color" style="cursor: pointer; position: relative;">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m4 20 8-16 8 16"/><line x1="6.5" y1="15" x2="17.5" y2="15"/></svg>
                <input type="color" style="position: absolute; opacity: 0; width: 0; height: 0;" (change)="onColorChange($event)" />
            </label>
            <label class="p-text-editor-btn" title="Highlight / Background Color" aria-label="Background Color" style="cursor: pointer; position: relative;">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 11-6 6v3h3l6-6"/><path d="m22 2-2 2-4-4 2-2z"/><path d="M14 6l4 4"/></svg>
                <input type="color" style="position: absolute; opacity: 0; width: 0; height: 0;" (change)="onBackgroundChange($event)" />
            </label>
        </div>

        <div class="p-text-editor-toolbar-divider"></div>

        <div class="p-text-editor-toolbar-group">
            <button type="button" class="p-text-editor-btn" [class.p-active]="state().align === 'left'" (click)="commands().align('left')" title="Align Left" aria-label="Align Left">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="17" y1="10" x2="3" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="17" y1="18" x2="3" y2="18"/></svg>
            </button>
            <button type="button" class="p-text-editor-btn" [class.p-active]="state().align === 'center'" (click)="commands().align('center')" title="Align Center" aria-label="Align Center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="10" x2="6" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="18" y1="18" x2="6" y2="18"/></svg>
            </button>
            <button type="button" class="p-text-editor-btn" [class.p-active]="state().align === 'right'" (click)="commands().align('right')" title="Align Right" aria-label="Align Right">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="21" y1="10" x2="7" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="21" y1="18" x2="7" y2="18"/></svg>
            </button>
            <button type="button" class="p-text-editor-btn" [class.p-active]="state().align === 'justify'" (click)="commands().align('justify')" title="Justify" aria-label="Justify">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="21" y1="10" x2="3" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="21" y1="18" x2="3" y2="18"/></svg>
            </button>
        </div>

        <div class="p-text-editor-toolbar-divider"></div>

        <div class="p-text-editor-toolbar-group">
            <button type="button" class="p-text-editor-btn" [class.p-active]="state().bulletList" (click)="commands().bulletList()" title="Bullet List" aria-label="Bullet List">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="9" y1="6" x2="20" y2="6"/><line x1="9" y1="12" x2="20" y2="12"/><line x1="9" y1="18" x2="20" y2="18"/><circle cx="4" cy="6" r="1.5" fill="currentColor"/><circle cx="4" cy="12" r="1.5" fill="currentColor"/><circle cx="4" cy="18" r="1.5" fill="currentColor"/></svg>
            </button>
            <button type="button" class="p-text-editor-btn" [class.p-active]="state().orderedList" (click)="commands().orderedList()" title="Numbered List" aria-label="Numbered List">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="6" x2="21" y2="6"/><line x1="10" y1="12" x2="21" y2="12"/><line x1="10" y1="18" x2="21" y2="18"/><path d="M4 6h1v4"/><path d="M4 10h2"/><path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"/></svg>
            </button>
            <button type="button" class="p-text-editor-btn" [class.p-active]="state().blockquote" (click)="commands().blockquote()" title="Quote" aria-label="Quote">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/></svg>
            </button>
            <button type="button" class="p-text-editor-btn" [class.p-active]="state().codeBlock" (click)="commands().codeBlock()" title="Code Block" aria-label="Code Block">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="8 10 5 13 8 16"/><polyline points="16 10 19 13 16 16"/></svg>
            </button>
            <button type="button" class="p-text-editor-btn" (click)="commands().table(3, 3)" title="Table" aria-label="Insert Table">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3h18v18H3z"/><path d="M21 9H3"/><path d="M21 15H3"/><path d="M12 3v18"/></svg>
            </button>
            <button type="button" class="p-text-editor-btn" (click)="commands().details()" title="Collapsible Details" aria-label="Insert Collapsible Section">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
            </button>
            <button type="button" class="p-text-editor-btn" (click)="commands().horizontalRule()" title="Divider" aria-label="Insert Divider">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/></svg>
            </button>
        </div>

        <div class="p-text-editor-toolbar-divider"></div>

        <div class="p-text-editor-toolbar-group">
            <button type="button" class="p-text-editor-btn" (click)="commands().undo()" [disabled]="!state().canUndo" title="Undo (Ctrl+Z)" aria-label="Undo">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7v6h6"/><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"/></svg>
            </button>
            <button type="button" class="p-text-editor-btn" (click)="commands().redo()" [disabled]="!state().canRedo" title="Redo (Ctrl+Y)" aria-label="Redo">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 7v6h-6"/><path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"/></svg>
            </button>
            <button type="button" class="p-text-editor-btn" (click)="commands().print()" title="Print Document" aria-label="Print Document">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
            </button>
            <button type="button" class="p-text-editor-btn" (click)="commands().clearFormatting()" title="Clear Formatting" aria-label="Clear Formatting">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7 21 5-10 5 10"/><path d="M9 17h6"/><line x1="4" y1="4" x2="20" y2="20"/></svg>
            </button>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class EditorToolbarUI {
    private root = inject(TEXT_EDITOR_CONTEXT);
    public commands = this.root.commands;
    public state = this.root.state;

    public onHeadingChange(e: Event): void {
        const val = (e.target as HTMLSelectElement).value;
        if (val) this.commands().heading(parseInt(val, 10));
        else this.commands().paragraph();
    }

    public onFontChange(e: Event): void {
        const val = (e.target as HTMLSelectElement).value;
        if (val) this.commands().font(val);
    }

    public onFontSizeChange(e: Event): void {
        const val = (e.target as HTMLSelectElement).value;
        if (val) this.commands().fontSize(val);
    }

    public onColorChange(e: Event): void {
        const val = (e.target as HTMLInputElement).value;
        if (val) this.commands().color(val);
    }

    public onBackgroundChange(e: Event): void {
        const val = (e.target as HTMLInputElement).value;
        if (val) this.commands().background(val);
    }
}

@Component({
    selector: 'p-editor-context-toolbar-ui',
    standalone: true,
    imports: [CommonModule],
    template: `
        <button type="button" class="p-text-editor-btn" [class.p-active]="state().bold" (mousedown)="$event.preventDefault()" (click)="commands().bold()" title="Bold" aria-label="Bold">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/></svg>
        </button>
        <button type="button" class="p-text-editor-btn" [class.p-active]="state().italic" (mousedown)="$event.preventDefault()" (click)="commands().italic()" title="Italic" aria-label="Italic">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="4" x2="10" y2="4"/><line x1="14" y1="20" x2="5" y2="20"/><line x1="15" y1="4" x2="9" y2="20"/></svg>
        </button>
        <button type="button" class="p-text-editor-btn" [class.p-active]="state().underline" (mousedown)="$event.preventDefault()" (click)="commands().underline()" title="Underline" aria-label="Underline">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"/><line x1="4" y1="21" x2="20" y2="21"/></svg>
        </button>
        <button type="button" class="p-text-editor-btn" [class.p-active]="state().strikethrough" (mousedown)="$event.preventDefault()" (click)="commands().strikethrough()" title="Strikethrough" aria-label="Strikethrough">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4H9a3 3 0 0 0-2.83 4M14 12a4 4 0 0 1 0 8H6"/><line x1="4" y1="12" x2="20" y2="12"/></svg>
        </button>
        <button type="button" class="p-text-editor-btn" [class.p-active]="state().code" (mousedown)="$event.preventDefault()" (click)="commands().code()" title="Inline Code" aria-label="Inline Code">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
        </button>
        <button type="button" class="p-text-editor-btn" (mousedown)="$event.preventDefault()" (click)="toolbarContext.toggleMore()" title="More options" aria-label="More options">
            <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/></svg>
        </button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class EditorContextToolbarUI {
    public toolbarContext = inject(CONTEXT_TOOLBAR_CONTEXT);
    public commands = this.toolbarContext.commands;
    public state = this.toolbarContext.state;
}

@Component({
    selector: 'p-editor-block-controls-ui',
    standalone: true,
    imports: [CommonModule],
    template: `
        <button type="button" class="p-text-editor-btn p-text-editor-btn-add" (click)="ctx.addBlock(ctx.index())" title="Add Block Below" aria-label="Add Block Below">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        </button>
        <button type="button" class="p-text-editor-btn p-text-editor-block-drag-handle" draggable="true" title="Drag to reorder / Click for options" aria-label="Block Options">
            <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="9" cy="6" r="1.5"/><circle cx="15" cy="6" r="1.5"/><circle cx="9" cy="12" r="1.5"/><circle cx="15" cy="12" r="1.5"/><circle cx="9" cy="18" r="1.5"/><circle cx="15" cy="18" r="1.5"/></svg>
        </button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class EditorBlockControlsUI {
    public ctx = inject(BLOCK_CONTROLS_CONTEXT);
}
