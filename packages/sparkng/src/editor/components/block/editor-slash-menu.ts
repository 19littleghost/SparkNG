import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, ContentChild, DestroyRef, inject, signal, ViewEncapsulation } from '@angular/core';
import { SLASH_MENU_CONTEXT, TEXT_EDITOR_CONTEXT } from '../../context/editor.context';
import { TextEditorSlashMenuDef } from '../definitions/editor-definitions';
import type { SlashMenuContext } from '@bdspark/sparkng/types/editor';

export interface SlashMenuItem {
    title: string;
    description: string;
    icon: string;
    action: () => void;
}

@Component({
    selector: 'p-text-editor-slash-menu',
    standalone: true,
    imports: [CommonModule],
    template: `
        @if (open()) {
            @if (slashMenuDef) {
                <ng-container
                    *ngTemplateOutlet="
                        slashMenuDef.template;
                        context: {
                            $implicit: menuContext,
                            commands: rootContext.commands(),
                            state: rootContext.state(),
                            filterText: filterText(),
                            position: position(),
                            dismiss: dismiss
                        }
                    "
                ></ng-container>
            } @else {
                <div class="p-text-editor-slash-palette">
                    @for (item of filteredItems(); track item.title) {
                        <div class="p-text-editor-menu-item" (click)="selectItem(item)">
                            <span class="p-text-editor-menu-item-icon" [innerHTML]="item.icon"></span>
                            <div class="p-text-editor-menu-item-text">
                                <div style="font-weight: 500;">{{ item.title }}</div>
                                <div style="font-size: 0.75rem; color: var(--p-text-editor-muted);">{{ item.description }}</div>
                            </div>
                        </div>
                    }
                </div>
            }
        }
    `,
    providers: [
        {
            provide: SLASH_MENU_CONTEXT,
            useFactory: (comp: TextEditorSlashMenu) => comp.menuContext,
            deps: [TextEditorSlashMenu]
        }
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'p-text-editor-popover-menu p-text-editor-slash-menu',
        '[attr.data-scope]': '"texteditor"',
        '[attr.data-part]': '"slash-menu"',
        '[style.display]': 'open() && position() ? "block" : "none"',
        '[style.left.px]': 'position()?.x',
        '[style.top.px]': 'position()?.y'
    }
})
export class TextEditorSlashMenu {
    public rootContext = inject(TEXT_EDITOR_CONTEXT);
    private destroyRef = inject(DestroyRef);

    @ContentChild(TextEditorSlashMenuDef)
    public slashMenuDef?: TextEditorSlashMenuDef;

    public open = signal<boolean>(false);
    public filterText = signal<string>('');
    public position = signal<{ x: number; y: number } | null>(null);

    public items: SlashMenuItem[] = [
        {
            title: 'Heading 1',
            description: 'Large section heading',
            icon: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12h8m-8-6v12m8-12v12m6 6V7l-3 2"/></svg>',
            action: () => this.rootContext.commands().heading(1)
        },
        {
            title: 'Heading 2',
            description: 'Medium section heading',
            icon: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12h8m-8-6v12m8-12v12m4 6c0-2 2-3 3-3a2 2 0 1 0-3-2m0 5h4"/></svg>',
            action: () => this.rootContext.commands().heading(2)
        },
        {
            title: 'Heading 3',
            description: 'Small section heading',
            icon: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12h8m-8-6v12m8-12v12m4 1a2 2 0 1 0 3-2 2 2 0 1 0-3-2"/></svg>',
            action: () => this.rootContext.commands().heading(3)
        },
        {
            title: 'Bulleted List',
            description: 'Create a simple bulleted list',
            icon: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="5" cy="7" r="1.5" fill="currentColor"/><line x1="10" y1="7" x2="20" y2="7"/><circle cx="5" cy="12" r="1.5" fill="currentColor"/><line x1="10" y1="12" x2="20" y2="12"/><circle cx="5" cy="17" r="1.5" fill="currentColor"/><line x1="10" y1="17" x2="20" y2="17"/></svg>',
            action: () => this.rootContext.commands().bulletList()
        },
        {
            title: 'Numbered List',
            description: 'Create a list with numbering',
            icon: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><line x1="10" y1="6" x2="20" y2="6"/><line x1="10" y1="12" x2="20" y2="12"/><line x1="10" y1="18" x2="20" y2="18"/><path d="M4 6h1v4"/><path d="M4 18h3"/></svg>',
            action: () => this.rootContext.commands().orderedList()
        },
        {
            title: 'Checklist',
            description: 'Track tasks with a to-do list',
            icon: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 11 3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>',
            action: () => this.rootContext.commands().taskList()
        },
        {
            title: 'Quote',
            description: 'Capture a quote or citation',
            icon: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/></svg>',
            action: () => this.rootContext.commands().blockquote()
        },
        {
            title: 'Code Block',
            description: 'Display code with syntax formatting',
            icon: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
            action: () => this.rootContext.commands().codeBlock()
        },
        {
            title: 'Table',
            description: 'Insert a 3x3 table with columns',
            icon: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 3v18"/><path d="M15 3v18"/></svg>',
            action: () => this.rootContext.commands().table(3, 3)
        },
        {
            title: 'Divider',
            description: 'Visually separate content',
            icon: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/></svg>',
            action: () => this.rootContext.commands().horizontalRule()
        },
        {
            title: 'Details',
            description: 'Insert collapsible section',
            icon: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/><rect x="3" y="3" width="18" height="18" rx="2"/></svg>',
            action: () => this.rootContext.commands().details()
        }
    ];

    public filteredItems = computed(() => {
        const query = this.filterText().toLowerCase().trim();
        if (!query) return this.items;
        return this.items.filter((i) => i.title.toLowerCase().includes(query) || i.description.toLowerCase().includes(query));
    });

    constructor() {
        if (typeof document !== 'undefined') {
            const onKeyDown = (e: KeyboardEvent) => {
                if (e.key === '/') {
                    setTimeout(() => this.checkSlashTrigger(), 10);
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

    private checkSlashTrigger(): void {
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

    public selectItem(item: SlashMenuItem): void {
        const sel = window.getSelection();
        if (sel && sel.anchorNode && sel.anchorNode.textContent?.endsWith('/')) {
            sel.anchorNode.textContent = sel.anchorNode.textContent.slice(0, -1);
        }
        item.action();
        this.dismiss();
    }

    public dismiss = () => {
        this.open.set(false);
        this.filterText.set('');
        this.position.set(null);
    };

    public readonly menuContext: SlashMenuContext = {
        commands: this.rootContext.commands,
        state: this.rootContext.state,
        filterText: computed(() => this.filterText()),
        position: computed(() => this.position()),
        dismiss: this.dismiss
    };
}
