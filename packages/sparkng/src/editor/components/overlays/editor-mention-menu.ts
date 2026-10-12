import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, ContentChild, DestroyRef, inject, input, signal, ViewEncapsulation } from '@angular/core';
import { MENTION_MENU_CONTEXT, TEXT_EDITOR_CONTEXT } from '../../context/editor.context';
import { TextEditorMentionMenuDef } from '../definitions/editor-definitions';
import type { MentionMenuContext } from '@bdspark/sparkng/types/editor';

@Component({
    selector: 'p-text-editor-mention-menu',
    standalone: true,
    imports: [CommonModule],
    template: `
        @if (open()) {
            @if (mentionDef) {
                <ng-container
                    *ngTemplateOutlet="
                        mentionDef.template;
                        context: {
                            $implicit: mentionContext,
                            items: filteredItems(),
                            commands: mentionContext.commands,
                            filterText: filterText(),
                            position: position(),
                            dismiss: dismiss
                        }
                    "
                ></ng-container>
            } @else {
                <div class="p-text-editor-mention-list">
                    @for (item of filteredItems(); track item.id || item.name || item) {
                        <div class="p-text-editor-menu-item" (click)="selectItem(item)">
                            <span class="p-text-editor-menu-item-icon">
                                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                    <circle cx="12" cy="7" r="4" />
                                </svg>
                            </span>
                            <span>{{ item.name || item.label || item }}</span>
                        </div>
                    }
                </div>
            }
        }
    `,
    providers: [
        {
            provide: MENTION_MENU_CONTEXT,
            useFactory: (comp: TextEditorMentionMenu) => comp.mentionContext,
            deps: [TextEditorMentionMenu]
        }
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'p-text-editor-popover-menu p-text-editor-mention-menu',
        '[attr.data-scope]': '"texteditor"',
        '[attr.data-part]': '"mention-menu"',
        '[style.display]': 'open() && position() ? "block" : "none"',
        '[style.left.px]': 'position()?.x',
        '[style.top.px]': 'position()?.y'
    }
})
export class TextEditorMentionMenu<T = any> {
    public rootContext = inject(TEXT_EDITOR_CONTEXT);
    private destroyRef = inject(DestroyRef);

    @ContentChild(TextEditorMentionMenuDef)
    public mentionDef?: TextEditorMentionMenuDef;

    public items = input<T[]>([]);
    public open = signal<boolean>(false);
    public filterText = signal<string>('');
    public position = signal<{ x: number; y: number } | null>(null);

    public filteredItems = computed(() => {
        const query = this.filterText().toLowerCase().trim();
        const list = this.items();
        if (!query) return list;
        return list.filter((i: any) => {
            const name = (i.name || i.label || String(i)).toLowerCase();
            return name.includes(query);
        });
    });

    constructor() {
        if (typeof document !== 'undefined') {
            const onKeyDown = (e: KeyboardEvent) => {
                if (e.key === '@') {
                    setTimeout(() => this.checkMentionTrigger(), 10);
                } else if (e.key === 'Escape' && this.open()) {
                    this.dismiss();
                }
            };
            document.addEventListener('keydown', onKeyDown);
            this.destroyRef.onDestroy(() => {
                document.removeEventListener('keydown', onKeyDown);
            });
        }
    }

    private checkMentionTrigger(): void {
        const sel = window.getSelection();
        if (!sel || sel.rangeCount === 0 || !sel.isCollapsed) return;
        const range = sel.getRangeAt(0);
        let rect = range.getBoundingClientRect();
        if (rect.height === 0 && rect.width === 0) {
            const clientRects = range.getClientRects();
            if (clientRects.length > 0) {
                rect = clientRects[0];
            } else if (range.startContainer.nodeType === Node.ELEMENT_NODE) {
                rect = (range.startContainer as HTMLElement).getBoundingClientRect();
            } else if (range.startContainer.parentElement) {
                rect = range.startContainer.parentElement.getBoundingClientRect();
            }
        }
        if (rect.top === 0 && rect.left === 0 && rect.bottom === 0) return;
        this.position.set({ x: rect.left, y: rect.bottom + 6 });
        this.open.set(true);
    }

    public selectItem(item: T): void {
        const sel = window.getSelection();
        if (sel && sel.anchorNode && sel.anchorNode.textContent?.endsWith('@')) {
            sel.anchorNode.textContent = sel.anchorNode.textContent.slice(0, -1);
        }
        const name = (item as any).name || (item as any).label || String(item);
        const html = `<span class="p-text-editor-mention" data-mention-id="${(item as any).id || name}">@${name}</span>&nbsp;`;
        this.rootContext.commands().insertHTML(html);
        this.dismiss();
    }

    public dismiss = () => {
        this.open.set(false);
        this.filterText.set('');
        this.position.set(null);
    };

    public readonly mentionContext: MentionMenuContext<T> = {
        items: computed(() => this.filteredItems()),
        filterText: computed(() => this.filterText()),
        position: computed(() => this.position()),
        commands: {
            select: (item: T) => this.selectItem(item)
        },
        dismiss: this.dismiss
    };
}
