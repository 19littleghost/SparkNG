import { CommonModule } from '@angular/common';
import { afterNextRender, ChangeDetectionStrategy, Component, ElementRef, HostListener, inject, ViewEncapsulation } from '@angular/core';
import { matchMarkdownTrigger } from '../../engine/markdown-rules';
import { TextEditorRoot } from '../root/editor-root';

@Component({
    selector: 'p-text-editor-content',
    standalone: true,
    imports: [CommonModule],
    template: ``,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'p-text-editor-content',
        contenteditable: 'true',
        '[attr.data-scope]': '"texteditor"',
        '[attr.data-part]': '"content"',
        '[attr.data-placeholder]': 'root.placeholder()',
        '[attr.aria-multiline]': '"true"',
        role: 'textbox'
    }
})
export class TextEditorContent {
    public root = inject(TextEditorRoot);
    private el = inject(ElementRef<HTMLElement>);

    constructor() {
        afterNextRender(() => {
            this.root.registerContentElement(this.el.nativeElement);
        });
    }

    @HostListener('input')
    public onInput(): void {
        this.checkMarkdownRules();
        this.root.syncFromDOM();
    }

    @HostListener('focus', ['$event'])
    public onFocus(event: FocusEvent): void {
        this.root.onFocus.emit(event);
    }

    @HostListener('blur', ['$event'])
    public onBlur(event: FocusEvent): void {
        this.root.onBlur.emit(event);
    }

    @HostListener('keyup')
    @HostListener('mouseup')
    public onSelectionChange(): void {
        this.root.updateState();
    }

    @HostListener('click', ['$event'])
    public onClick(event: MouseEvent): void {
        const target = event.target as HTMLElement;
        if (target && target.tagName === 'INPUT' && (target as HTMLInputElement).type === 'checkbox') {
            const li = target.closest('li');
            if (li) {
                const isChecked = (target as HTMLInputElement).checked;
                li.setAttribute('data-p-checked', isChecked ? 'true' : 'false');
                this.root.syncFromDOM();
            }
        }
    }

    @HostListener('dragover', ['$event'])
    public onDragOver(event: DragEvent): void {
        if (event.dataTransfer?.types.includes('text/plain') && this.root.mode() === 'block') {
            event.preventDefault();
            event.dataTransfer.dropEffect = 'move';
        } else if (event.dataTransfer?.types.includes('Files')) {
            event.preventDefault();
        }
    }

    @HostListener('drop', ['$event'])
    public onDrop(event: DragEvent): void {
        const sourceIndexStr = event.dataTransfer?.getData('text/plain');
        if (sourceIndexStr !== undefined && sourceIndexStr !== '' && this.root.mode() === 'block') {
            const sourceIndex = parseInt(sourceIndexStr, 10);
            if (!isNaN(sourceIndex)) {
                event.preventDefault();
                const target = event.target as HTMLElement;
                const blockEl = target.closest('.p-text-editor-content > *');
                if (blockEl && blockEl.parentElement === this.el.nativeElement) {
                    const children = Array.from(this.el.nativeElement.children);
                    const targetIndex = children.indexOf(blockEl);
                    if (targetIndex >= 0 && targetIndex !== sourceIndex) {
                        const blocks = [...this.root.getBlocks()];
                        const [moved] = blocks.splice(sourceIndex, 1);
                        blocks.splice(targetIndex, 0, moved);
                        this.root.setValue(blocks);
                    }
                }
                return;
            }
        }

        if (event.dataTransfer?.files && event.dataTransfer.files.length > 0) {
            const file = event.dataTransfer.files[0];
            if (file.type.startsWith('image/')) {
                event.preventDefault();
                const reader = new FileReader();
                reader.onload = (e) => {
                    const result = e.target?.result as string;
                    if (result) {
                        this.root.commands.image(result, file.name);
                    }
                };
                reader.readAsDataURL(file);
            }
        }
    }

    @HostListener('paste', ['$event'])
    public onPaste(event: ClipboardEvent): void {
        const items = event.clipboardData?.items;
        if (items) {
            for (let i = 0; i < items.length; i++) {
                if (items[i].type.startsWith('image/')) {
                    const file = items[i].getAsFile();
                    if (file) {
                        event.preventDefault();
                        const reader = new FileReader();
                        reader.onload = (e) => {
                            const result = e.target?.result as string;
                            if (result) {
                                this.root.commands.image(result, 'Pasted image');
                            }
                        };
                        reader.readAsDataURL(file);
                        return;
                    }
                }
            }
        }
    }

    @HostListener('keydown', ['$event'])
    public onKeyDown(event: KeyboardEvent): void {
        if (this.root.disabled() || this.root.readonly()) return;

        // Common formatting keyboard shortcuts
        if (event.ctrlKey || event.metaKey) {
            switch (event.key.toLowerCase()) {
                case 'b':
                    event.preventDefault();
                    this.root.commands.bold();
                    return;
                case 'i':
                    event.preventDefault();
                    this.root.commands.italic();
                    return;
                case 'u':
                    event.preventDefault();
                    this.root.commands.underline();
                    return;
                case 'z':
                    event.preventDefault();
                    if (event.shiftKey) this.root.commands.redo();
                    else this.root.commands.undo();
                    return;
                case 'y':
                    event.preventDefault();
                    this.root.commands.redo();
                    return;
                case 'a':
                    // allow native select all
                    setTimeout(() => this.root.updateState(), 0);
                    return;
            }
        }
    }

    private checkMarkdownRules(): void {
        if (!this.root.markdown()) return;
        const sel = window.getSelection();
        if (!sel || !sel.isCollapsed) return;

        const anchorNode = sel.anchorNode;
        if (!anchorNode || anchorNode.nodeType !== Node.TEXT_NODE) return;

        const text = anchorNode.textContent || '';
        const match = matchMarkdownTrigger(text);
        if (!match) return;

        // Replace trigger text with rich block
        anchorNode.textContent = '';
        switch (match.type) {
            case 'heading':
                this.root.commands.heading(match.level || 1);
                break;
            case 'bulletList':
                this.root.commands.bulletList();
                break;
            case 'orderedList':
                this.root.commands.orderedList();
                break;
            case 'taskList':
                this.root.commands.taskList();
                break;
            case 'blockquote':
                this.root.commands.blockquote();
                break;
            case 'codeBlock':
                this.root.commands.codeBlock();
                break;
            case 'horizontalRule':
                this.root.commands.horizontalRule();
                break;
        }
    }
}
