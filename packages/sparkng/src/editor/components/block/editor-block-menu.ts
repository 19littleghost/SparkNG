import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, ContentChild, inject, signal, ViewEncapsulation } from '@angular/core';
import { BLOCK_MENU_CONTEXT, TEXT_EDITOR_CONTEXT } from '../../context/editor.context';
import { TextEditorBlockMenuDef, TextEditorBlockSubmenuDef } from '../definitions/editor-definitions';
import type { BlockMenuContext } from '@bdspark/sparkng/types/editor';

@Component({
    selector: 'p-text-editor-block-submenu',
    standalone: true,
    imports: [CommonModule],
    template: `
        @if (submenuDef) {
            <ng-container
                *ngTemplateOutlet="
                    submenuDef.template;
                    context: {
                        activeSubmenu: activeSubmenu(),
                        commands: rootContext.commands(),
                        blockType: blockType(),
                        state: rootContext.state(),
                        dismiss: dismiss
                    }
                "
            ></ng-container>
        } @else {
            <ng-content></ng-content>
        }
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'p-text-editor-popover-submenu',
        '[attr.data-scope]': '"texteditor"',
        '[attr.data-part]': '"block-submenu"'
    }
})
export class TextEditorBlockSubmenu {
    public rootContext = inject(TEXT_EDITOR_CONTEXT);

    @ContentChild(TextEditorBlockSubmenuDef)
    public submenuDef?: TextEditorBlockSubmenuDef;

    public activeSubmenu = signal<string | null>(null);
    public blockType = signal<string>('paragraph');
    public dismiss = () => {};
}

@Component({
    selector: 'p-text-editor-block-menu',
    standalone: true,
    imports: [CommonModule],
    template: `
        @if (open()) {
            @if (menuDef) {
                <ng-container
                    *ngTemplateOutlet="
                        menuDef.template;
                        context: {
                            $implicit: menuContext,
                            blockIndex: blockIndex(),
                            blockType: blockType(),
                            commands: rootContext.commands(),
                            state: rootContext.state(),
                            submenu: activeSubmenu(),
                            dismiss: dismiss
                        }
                    "
                ></ng-container>
            } @else {
                <div class="p-text-editor-menu-item" (click)="turnInto('paragraph')">
                    <span class="p-text-editor-menu-item-icon">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 4v16m-6-8h6m-6-8h6a4 4 0 0 1 0 8H7V4z"/></svg>
                    </span>
                    <span>Text</span>
                </div>
                <div class="p-text-editor-menu-item" (click)="turnInto('h1')">
                    <span class="p-text-editor-menu-item-icon">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12h8m-8-6v12m8-12v12m6 6V7l-3 2"/></svg>
                    </span>
                    <span>Heading 1</span>
                </div>
                <div class="p-text-editor-menu-item" (click)="turnInto('h2')">
                    <span class="p-text-editor-menu-item-icon">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12h8m-8-6v12m8-12v12m4 6c0-2 2-3 3-3a2 2 0 1 0-3-2m0 5h4"/></svg>
                    </span>
                    <span>Heading 2</span>
                </div>
                <div class="p-text-editor-menu-item" (click)="turnInto('h3')">
                    <span class="p-text-editor-menu-item-icon">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12h8m-8-6v12m8-12v12m4 1a2 2 0 1 0 3-2 2 2 0 1 0-3-2"/></svg>
                    </span>
                    <span>Heading 3</span>
                </div>
                <div class="p-text-editor-menu-item" (click)="turnInto('bulletList')">
                    <span class="p-text-editor-menu-item-icon">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="5" cy="7" r="1.5" fill="currentColor"/><line x1="10" y1="7" x2="20" y2="7"/><circle cx="5" cy="12" r="1.5" fill="currentColor"/><line x1="10" y1="12" x2="20" y2="12"/><circle cx="5" cy="17" r="1.5" fill="currentColor"/><line x1="10" y1="17" x2="20" y2="17"/></svg>
                    </span>
                    <span>Bulleted List</span>
                </div>
                <div class="p-text-editor-menu-item" (click)="turnInto('orderedList')">
                    <span class="p-text-editor-menu-item-icon">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><line x1="10" y1="6" x2="20" y2="6"/><line x1="10" y1="12" x2="20" y2="12"/><line x1="10" y1="18" x2="20" y2="18"/><path d="M4 6h1v4"/><path d="M4 18h3"/></svg>
                    </span>
                    <span>Numbered List</span>
                </div>
                <div class="p-text-editor-menu-item" (click)="turnInto('blockquote')">
                    <span class="p-text-editor-menu-item-icon">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/></svg>
                    </span>
                    <span>Quote</span>
                </div>
                <div class="p-text-editor-menu-item" (click)="duplicateBlock()">
                    <span class="p-text-editor-menu-item-icon">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect width="13" height="13" x="9" y="9" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                    </span>
                    <span>Duplicate</span>
                </div>
                <div class="p-text-editor-menu-item" style="color: var(--p-text-editor-danger);" (click)="deleteBlock()">
                    <span class="p-text-editor-menu-item-icon" style="color: var(--p-text-editor-danger);">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                    </span>
                    <span>Delete</span>
                </div>
            }
        }
    `,
    providers: [
        {
            provide: BLOCK_MENU_CONTEXT,
            useFactory: (comp: TextEditorBlockMenu) => comp.menuContext,
            deps: [TextEditorBlockMenu]
        }
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'p-text-editor-popover-menu p-text-editor-block-menu',
        '[attr.data-scope]': '"texteditor"',
        '[attr.data-part]': '"block-menu"',
        '[style.display]': 'open() && position() ? "block" : "none"',
        '[style.left.px]': 'position()?.x',
        '[style.top.px]': 'position()?.y'
    }
})
export class TextEditorBlockMenu {
    public rootContext = inject(TEXT_EDITOR_CONTEXT);

    @ContentChild(TextEditorBlockMenuDef)
    public menuDef?: TextEditorBlockMenuDef;

    public open = signal<boolean>(false);
    public position = signal<{ x: number; y: number } | null>(null);
    public blockIndex = signal<number>(0);
    public blockType = signal<string>('paragraph');
    public activeSubmenu = signal<string | null>(null);

    public openSubmenu = (name: string) => {
        this.activeSubmenu.set(name);
    };

    public dismiss = () => {
        this.open.set(false);
        this.activeSubmenu.set(null);
    };

    public turnInto = (type: string) => {
        const blocks = [...this.rootContext.getBlocks()];
        const idx = this.blockIndex();
        if (blocks[idx]) {
            const raw = blocks[idx].replace(/<[^>]+>/g, '').trim() || '<br>';
            switch (type) {
                case 'h1':
                    blocks[idx] = `<h1>${raw}</h1>`;
                    break;
                case 'h2':
                    blocks[idx] = `<h2>${raw}</h2>`;
                    break;
                case 'h3':
                    blocks[idx] = `<h3>${raw}</h3>`;
                    break;
                case 'blockquote':
                    blocks[idx] = `<blockquote>${raw}</blockquote>`;
                    break;
                case 'bulletList':
                    blocks[idx] = `<ul><li>${raw}</li></ul>`;
                    break;
                case 'orderedList':
                    blocks[idx] = `<ol><li>${raw}</li></ol>`;
                    break;
                default:
                    blocks[idx] = `<p>${raw}</p>`;
                    break;
            }
            this.rootContext.setValue(blocks);
        }
        this.dismiss();
    };

    public duplicateBlock = () => {
        const blocks = [...this.rootContext.getBlocks()];
        const idx = this.blockIndex();
        if (blocks[idx]) {
            blocks.splice(idx + 1, 0, blocks[idx]);
            this.rootContext.setValue(blocks);
        }
        this.dismiss();
    };

    public deleteBlock = () => {
        const blocks = [...this.rootContext.getBlocks()];
        const idx = this.blockIndex();
        blocks.splice(idx, 1);
        if (blocks.length === 0) blocks.push('<p><br></p>');
        this.rootContext.setValue(blocks);
        this.dismiss();
    };

    public readonly menuContext: BlockMenuContext = {
        blockIndex: computed(() => this.blockIndex()),
        blockType: computed(() => this.blockType()),
        commands: this.rootContext.commands,
        state: this.rootContext.state,
        submenu: computed(() => this.activeSubmenu()),
        openSubmenu: this.openSubmenu,
        dismiss: this.dismiss
    };
}
