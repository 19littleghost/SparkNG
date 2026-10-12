import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, ContentChild, DestroyRef, inject, signal, ViewEncapsulation } from '@angular/core';
import { BLOCK_CONTROLS_CONTEXT, TEXT_EDITOR_CONTEXT } from '../../context/editor.context';
import { getBlockTypeFromHTML } from '../../engine/block-parser';
import { TextEditorBlockMenu } from './editor-block-menu';
import { TextEditorBlockControlsDef } from '../definitions/editor-definitions';
import type { BlockControlsContext } from '@bdspark/sparkng/types/editor';

@Component({
    selector: 'p-text-editor-block-controls',
    standalone: true,
    imports: [CommonModule],
    template: `
        @if (controlsDef) {
            <ng-container
                *ngTemplateOutlet="
                    controlsDef.template;
                    context: {
                        $implicit: controlsContext,
                        index: activeIndex(),
                        blockType: activeType(),
                        addBlock: addBlock,
                        onDragStart: onDragStart,
                        onDragEnd: onDragEnd,
                        onDragHandleClick: onDragHandleClick
                    }
                "
            ></ng-container>
        } @else {
            <button type="button" class="p-text-editor-btn p-text-editor-btn-add" (click)="addBlock(activeIndex())" aria-label="Add block">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
            </button>
            <button
                type="button"
                class="p-text-editor-btn p-text-editor-block-drag-handle"
                draggable="true"
                (dragstart)="onDragStart(activeIndex(), $event)"
                (dragend)="onDragEnd()"
                (click)="onDragHandleClick(activeIndex(), $event)"
                aria-label="Block options"
            >
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                    <circle cx="9" cy="6" r="1.5" />
                    <circle cx="15" cy="6" r="1.5" />
                    <circle cx="9" cy="12" r="1.5" />
                    <circle cx="15" cy="12" r="1.5" />
                    <circle cx="9" cy="18" r="1.5" />
                    <circle cx="15" cy="18" r="1.5" />
                </svg>
            </button>
        }
    `,
    providers: [
        {
            provide: BLOCK_CONTROLS_CONTEXT,
            useFactory: (comp: TextEditorBlockControls) => comp.controlsContext,
            deps: [TextEditorBlockControls]
        }
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'p-text-editor-block-controls',
        '[class.p-active]': 'active()',
        '[attr.data-scope]': '"texteditor"',
        '[attr.data-part]': '"block-controls"',
        '[attr.data-block-type]': 'activeType()',
        '[style.top.px]': 'topPos()'
    }
})
export class TextEditorBlockControls {
    public root = inject(TEXT_EDITOR_CONTEXT);
    private destroyRef = inject(DestroyRef);
    private blockMenu = inject(TextEditorBlockMenu, { optional: true });

    @ContentChild(TextEditorBlockControlsDef)
    public controlsDef?: TextEditorBlockControlsDef;

    public activeIndex = signal<number>(0);
    public activeType = signal<string>('paragraph');
    public topPos = signal<number>(8);
    public active = signal<boolean>(false);

    constructor() {
        if (typeof document !== 'undefined') {
            const onMouseMove = (e: MouseEvent) => {
                if (this.root.mode() !== 'block') return;
                const target = e.target as HTMLElement | null;
                const blockEl = target?.closest('.p-text-editor-content > *') as HTMLElement | null;
                if (blockEl && blockEl.parentElement?.classList.contains('p-text-editor-content')) {
                    const contentEl = blockEl.parentElement;
                    const contentRect = contentEl.getBoundingClientRect();
                    const blockRect = blockEl.getBoundingClientRect();
                    this.topPos.set(Math.max(4, blockRect.top - contentRect.top + contentEl.offsetTop + 2));
                    this.active.set(true);

                    const children = Array.from(contentEl.children);
                    const idx = children.indexOf(blockEl);
                    if (idx >= 0) {
                        this.activeIndex.set(idx);
                        this.activeType.set(getBlockTypeFromHTML(blockEl.outerHTML));
                    }
                }
            };

            document.addEventListener('mousemove', onMouseMove);
            this.destroyRef.onDestroy(() => {
                document.removeEventListener('mousemove', onMouseMove);
            });
        }
    }

    public addBlock = (index: number) => {
        const blocks = [...this.root.getBlocks()];
        blocks.splice(index + 1, 0, '<p><br></p>');
        this.root.setValue(blocks);
    };

    public onDragStart = (index: number, event: DragEvent) => {
        event.dataTransfer?.setData('text/plain', String(index));
    };

    public onDragEnd = () => {};

    public onDragHandleClick = (index: number, event: MouseEvent) => {
        if (!this.blockMenu) return;
        const btn = event.currentTarget as HTMLElement;
        const rect = btn.getBoundingClientRect();
        this.blockMenu.position.set({ x: rect.right + 6, y: rect.top });
        this.blockMenu.blockIndex.set(index);
        this.blockMenu.open.set(true);
    };

    public readonly controlsContext: BlockControlsContext = {
        index: computed(() => this.activeIndex()),
        blockType: computed(() => this.activeType()),
        addBlock: this.addBlock,
        onDragStart: this.onDragStart,
        onDragEnd: this.onDragEnd,
        onDragHandleClick: this.onDragHandleClick
    };
}
