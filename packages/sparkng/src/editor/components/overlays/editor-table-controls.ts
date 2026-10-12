import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, ContentChild, DestroyRef, inject, signal, ViewEncapsulation } from '@angular/core';
import { TABLE_CONTROLS_CONTEXT, TEXT_EDITOR_CONTEXT } from '../../context/editor.context';
import { TextEditorTableControlsDef } from '../definitions/editor-definitions';
import type { TableControlsContext } from '@bdspark/sparkng/types/editor';

@Component({
    selector: 'p-text-editor-table-controls',
    standalone: true,
    imports: [CommonModule],
    template: `
        @if (visible()) {
            @if (tableControlsDef) {
                <ng-container
                    *ngTemplateOutlet="
                        tableControlsDef.template;
                        context: {
                            $implicit: tableContext,
                            position: position(),
                            commands: tableContext.commands
                        }
                    "
                ></ng-container>
            } @else {
                <div class="p-text-editor-table-controls-bar">
                    <button type="button" class="p-text-editor-btn" (mousedown)="$event.preventDefault()" (click)="addRow(false)" title="Add Row Below" aria-label="Add Row Below">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <path d="M3 12h18" />
                            <path d="M12 7v10" />
                        </svg>
                    </button>
                    <button type="button" class="p-text-editor-btn" (mousedown)="$event.preventDefault()" (click)="addColumn(false)" title="Add Column Right" aria-label="Add Column Right">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <path d="M12 3v18" />
                            <path d="M7 12h10" />
                        </svg>
                    </button>
                    <button type="button" class="p-text-editor-btn" (mousedown)="$event.preventDefault()" (click)="deleteRow()" title="Delete Row" aria-label="Delete Row">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M3 6h18" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                            <line x1="10" y1="11" x2="14" y2="11" />
                        </svg>
                    </button>
                    <button type="button" class="p-text-editor-btn" (mousedown)="$event.preventDefault()" (click)="deleteColumn()" title="Delete Column" aria-label="Delete Column">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M3 6h18" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                            <line x1="12" y1="9" x2="12" y2="15" />
                        </svg>
                    </button>
                    <button type="button" class="p-text-editor-btn" (mousedown)="$event.preventDefault()" (click)="deleteTable()" title="Delete Table" aria-label="Delete Table">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M3 6h18" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                            <line x1="9" y1="10" x2="15" y2="16" />
                            <line x1="15" y1="10" x2="9" y2="16" />
                        </svg>
                    </button>
                </div>
            }
        }
    `,
    providers: [
        {
            provide: TABLE_CONTROLS_CONTEXT,
            useFactory: (comp: TextEditorTableControls) => comp.tableContext,
            deps: [TextEditorTableControls]
        }
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'p-text-editor-table-controls',
        '[attr.data-scope]': '"texteditor"',
        '[attr.data-part]': '"table-controls"',
        '[style.position]': '"fixed"',
        '[style.zIndex]': '"1200"',
        '[style.display]': 'visible() && position() ? "block" : "none"',
        '[style.left.px]': 'position()?.x',
        '[style.top.px]': 'position()?.y'
    }
})
export class TextEditorTableControls {
    public rootContext = inject(TEXT_EDITOR_CONTEXT);
    private destroyRef = inject(DestroyRef);

    @ContentChild(TextEditorTableControlsDef)
    public tableControlsDef?: TextEditorTableControlsDef;

    public position = signal<{ x: number; y: number } | null>(null);

    public visible = computed(() => {
        return this.rootContext.state().inTable || !!this.position();
    });

    constructor() {
        if (typeof document !== 'undefined') {
            const updatePosition = () => {
                const sel = window.getSelection();
                if (!sel || sel.rangeCount === 0) {
                    if (!this.rootContext.state().inTable) {
                        this.position.set(null);
                    }
                    return;
                }
                let node: Node | null = sel.anchorNode;
                let foundCell: HTMLElement | null = null;
                while (node) {
                    if (node.nodeName === 'TD' || node.nodeName === 'TH') {
                        foundCell = node as HTMLElement;
                        break;
                    }
                    node = node.parentNode;
                }
                if (foundCell) {
                    const table = foundCell.closest('table');
                    const target = table || foundCell;
                    const rect = target.getBoundingClientRect();
                    this.position.set({
                        x: Math.max(8, rect.left),
                        y: Math.max(8, rect.top - 42)
                    });
                } else if (!this.rootContext.state().inTable) {
                    this.position.set(null);
                }
            };

            document.addEventListener('selectionchange', updatePosition);
            this.destroyRef.onDestroy(() => {
                document.removeEventListener('selectionchange', updatePosition);
            });
        }
    }

    public addRow = (before = false) => {
        this.rootContext.commands().addRow(before);
    };

    public addColumn = (before = false) => {
        this.rootContext.commands().addColumn(before);
    };

    public deleteRow = () => {
        this.rootContext.commands().deleteRow?.();
    };

    public deleteColumn = () => {
        this.rootContext.commands().deleteColumn?.();
    };

    public deleteTable = () => {
        this.rootContext.commands().deleteTable?.();
    };

    public readonly tableContext: TableControlsContext = {
        position: computed(() => this.position()),
        commands: {
            addRow: this.addRow,
            addColumn: this.addColumn,
            deleteRow: this.deleteRow,
            deleteColumn: this.deleteColumn,
            deleteTable: this.deleteTable
        }
    };
}
