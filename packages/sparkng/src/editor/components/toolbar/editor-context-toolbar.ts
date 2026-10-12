import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, computed, ContentChild, DestroyRef, ElementRef, inject, signal, ViewEncapsulation } from '@angular/core';
import { CONTEXT_TOOLBAR_CONTEXT, TEXT_EDITOR_CONTEXT } from '../../context/editor.context';
import { TextEditorContextToolbarDef, TextEditorContextToolbarMoreDef } from '../definitions/editor-definitions';
import { EditorContextToolbarUI } from '../ui/editor-ui';
import type { ContextToolbarContext } from '@bdspark/sparkng/types/editor';

@Component({
    selector: 'p-text-editor-context-toolbar-more',
    standalone: true,
    imports: [CommonModule],
    template: `
        @if (moreDef) {
            <ng-container
                *ngTemplateOutlet="
                    moreDef.template;
                    context: {
                        commands: rootContext.commands(),
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
        class: 'p-text-editor-popover-menu p-text-editor-context-toolbar-more',
        '[attr.data-scope]': '"texteditor"',
        '[attr.data-part]': '"context-toolbar-more"',
        '[style.display]': 'parentToolbar?.moreActive() ? "block" : "none"',
        '[style.top.px]': '(parentToolbar?.coords()?.top ?? 0) + 40',
        '[style.left.px]': 'parentToolbar?.coords()?.left',
        '[style.transform]': '"translateX(-50%)"'
    }
})
export class TextEditorContextToolbarMore {
    public rootContext = inject(TEXT_EDITOR_CONTEXT);
    public parentToolbar = inject(TextEditorContextToolbar, { optional: true });

    @ContentChild(TextEditorContextToolbarMoreDef)
    public moreDef?: TextEditorContextToolbarMoreDef;

    public dismiss = () => {
        this.parentToolbar?.moreActive.set(false);
    };
}

@Component({
    selector: 'p-text-editor-context-toolbar',
    standalone: true,
    imports: [CommonModule, EditorContextToolbarUI],
    template: `
        @if (visible()) {
            @if (contextToolbarDef) {
                <ng-container
                    *ngTemplateOutlet="
                        contextToolbarDef.template;
                        context: {
                            $implicit: toolbarContext,
                            commands: rootContext.commands(),
                            state: rootContext.state(),
                            plugins: rootContext.pluginCommands(),
                            moreActive: moreActive(),
                            toggleMore: toggleMore,
                            dismiss: dismiss
                        }
                    "
                ></ng-container>
            } @else {
                <div class="p-text-editor-context-toolbar-content" [style.display]="hasCustomContent ? 'contents' : 'none'">
                    <ng-content></ng-content>
                </div>
                @if (!hasCustomContent) {
                    <p-editor-context-toolbar-ui />
                }
            }
        }
    `,
    providers: [
        {
            provide: CONTEXT_TOOLBAR_CONTEXT,
            useFactory: (comp: TextEditorContextToolbar) => comp.toolbarContext,
            deps: [TextEditorContextToolbar]
        }
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'p-text-editor-context-toolbar',
        '[attr.data-scope]': '"texteditor"',
        '[attr.data-part]': '"context-toolbar"',
        '[style.display]': 'visible() && coords() ? "flex" : "none"',
        '[style.top.px]': 'coords()?.top',
        '[style.left.px]': 'coords()?.left',
        '[style.transform]': '"translateX(-50%)"'
    }
})
export class TextEditorContextToolbar implements AfterViewInit {
    public rootContext = inject(TEXT_EDITOR_CONTEXT);
    private destroyRef = inject(DestroyRef);
    private hostEl = inject(ElementRef);
    private cdr = inject(ChangeDetectorRef);

    @ContentChild(TextEditorContextToolbarDef)
    public contextToolbarDef?: TextEditorContextToolbarDef;

    public moreActive = signal<boolean>(false);
    public coords = signal<{ top: number; left: number } | null>(null);
    public hasCustomContent = false;

    public visible = computed(() => {
        const state = this.rootContext.state();
        return !state.selectionEmpty && !this.rootContext.readonly();
    });

    public ngAfterViewInit(): void {
        const contentEl = this.hostEl.nativeElement.querySelector('.p-text-editor-context-toolbar-content');
        if (contentEl) {
            const hasElements = contentEl.children.length > 0;
            const hasText = (contentEl.textContent || '').trim().length > 0;
            if (this.hasCustomContent !== (hasElements || hasText)) {
                this.hasCustomContent = hasElements || hasText;
                this.cdr.markForCheck();
            }
        }
    }

    constructor() {
        if (typeof document !== 'undefined') {
            const onSelectionChange = () => this.updatePosition();
            document.addEventListener('selectionchange', onSelectionChange);
            this.destroyRef.onDestroy(() => {
                document.removeEventListener('selectionchange', onSelectionChange);
            });
        }
    }

    public updatePosition(): void {
        if (typeof window === 'undefined') return;
        const sel = window.getSelection();
        if (!sel || sel.rangeCount === 0 || sel.isCollapsed) {
            this.coords.set(null);
            this.moreActive.set(false);
            return;
        }

        const range = sel.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        if (rect.width === 0 && rect.height === 0) {
            this.coords.set(null);
            return;
        }

        this.coords.set({
            top: Math.max(8, rect.top - 46),
            left: rect.left + rect.width / 2
        });
    }

    public toggleMore = () => {
        this.moreActive.update((v) => !v);
    };

    public dismiss = () => {
        this.moreActive.set(false);
    };

    public readonly toolbarContext: ContextToolbarContext = {
        commands: this.rootContext.commands,
        state: this.rootContext.state,
        plugins: this.rootContext.pluginCommands,
        moreActive: computed(() => this.moreActive()),
        toggleMore: this.toggleMore,
        dismiss: this.dismiss
    };
}
