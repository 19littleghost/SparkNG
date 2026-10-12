import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, ContentChild, DestroyRef, inject, signal, ViewEncapsulation } from '@angular/core';
import { NAVIGATOR_CONTEXT, TEXT_EDITOR_CONTEXT } from '../../context/editor.context';
import { TextEditorNavigatorMenuDef, TextEditorNavigatorTriggerDef } from '../definitions/editor-definitions';
import type { NavigatorContext } from '@bdspark/sparkng/types/editor';

@Component({
    selector: 'p-text-editor-navigator-trigger',
    standalone: true,
    imports: [CommonModule],
    template: `
        @if (triggerDef) {
            <ng-container
                *ngTemplateOutlet="
                    triggerDef.template;
                    context: {
                        headings: rootContext.headings(),
                        activeIndex: navComp.activeIndex()
                    }
                "
            ></ng-container>
        } @else {
            <div class="p-text-editor-navigator-bars" (click)="navComp.toggleMenu()" role="button" aria-label="Document Outline" tabindex="0">
                @for (heading of rootContext.headings(); track heading.id; let i = $index) {
                    <div
                        class="p-text-editor-navigator-bar"
                        [attr.data-level]="heading.level"
                        [attr.data-active]="navComp.activeIndex() === i"
                        [title]="heading.text"
                        (click)="navComp.scrollTo(i); $event.stopPropagation()"
                    ></div>
                }
                @if (rootContext.headings().length === 0) {
                    <div class="p-text-editor-navigator-bar" data-level="1" title="Heading 1"></div>
                    <div class="p-text-editor-navigator-bar" data-level="2" title="Heading 2"></div>
                    <div class="p-text-editor-navigator-bar" data-level="3" title="Heading 3"></div>
                }
            </div>
        }
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'p-text-editor-navigator-trigger',
        '[attr.data-scope]': '"texteditor"',
        '[attr.data-part]': '"navigator-trigger"'
    }
})
export class TextEditorNavigatorTrigger {
    public rootContext = inject(TEXT_EDITOR_CONTEXT);
    public navComp = inject(TextEditorNavigator);

    @ContentChild(TextEditorNavigatorTriggerDef)
    public triggerDef?: TextEditorNavigatorTriggerDef;
}

@Component({
    selector: 'p-text-editor-navigator-menu',
    standalone: true,
    imports: [CommonModule],
    template: `
        @if (navComp.menuOpen()) {
            @if (menuDef) {
                <ng-container
                    *ngTemplateOutlet="
                        menuDef.template;
                        context: {
                            headings: rootContext.headings(),
                            activeIndex: navComp.activeIndex(),
                            scrollTo: navComp.scrollTo
                        }
                    "
                ></ng-container>
            } @else {
                <div class="p-text-editor-navigator-popover">
                    <div style="font-weight: 600; font-size: 0.75rem; margin-bottom: 0.5rem; color: var(--p-text-editor-muted);">DOCUMENT OUTLINE</div>
                    @for (heading of rootContext.headings(); track heading.id; let i = $index) {
                        <div
                            class="p-text-editor-navigator-item"
                            [style.padding-inline-start.rem]="(heading.level - 1) * 0.5 + 0.5"
                            [class.p-active]="navComp.activeIndex() === i"
                            (click)="navComp.scrollTo(i)"
                        >
                            {{ heading.text }}
                        </div>
                    }
                    @if (rootContext.headings().length === 0) {
                        <div style="font-size: 0.75rem; color: var(--p-text-editor-muted); padding: 0.25rem 0.5rem;">No headings found</div>
                    }
                </div>
            }
        }
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'p-text-editor-popover-menu p-text-editor-navigator-menu',
        '[attr.data-scope]': '"texteditor"',
        '[attr.data-part]': '"navigator-menu"',
        '[style.display]': 'navComp.menuOpen() ? "block" : "none"'
    }
})
export class TextEditorNavigatorMenu {
    public rootContext = inject(TEXT_EDITOR_CONTEXT);
    public navComp = inject(TextEditorNavigator);

    @ContentChild(TextEditorNavigatorMenuDef)
    public menuDef?: TextEditorNavigatorMenuDef;
}

@Component({
    selector: 'p-text-editor-navigator',
    standalone: true,
    imports: [CommonModule, TextEditorNavigatorTrigger, TextEditorNavigatorMenu],
    template: `
        <p-text-editor-navigator-trigger></p-text-editor-navigator-trigger>
        <p-text-editor-navigator-menu></p-text-editor-navigator-menu>
    `,
    providers: [
        {
            provide: NAVIGATOR_CONTEXT,
            useFactory: (comp: TextEditorNavigator) => comp.navigatorContext,
            deps: [TextEditorNavigator]
        }
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'p-text-editor-navigator',
        '[attr.data-scope]': '"texteditor"',
        '[attr.data-part]': '"navigator"'
    }
})
export class TextEditorNavigator {
    public rootContext = inject(TEXT_EDITOR_CONTEXT);
    private destroyRef = inject(DestroyRef);

    public activeIndex = signal<number>(0);
    public menuOpen = signal<boolean>(false);

    constructor() {
        if (typeof document !== 'undefined') {
            const onScroll = () => {
                const el = (this.rootContext as any).getContentElement?.() || document.querySelector('.p-text-editor-content');
                if (!el) return;
                const headings = Array.from(el.querySelectorAll('h1, h2, h3, h4, h5, h6')) as HTMLElement[];
                if (headings.length === 0) return;
                const containerTop = el.getBoundingClientRect().top;
                for (let i = headings.length - 1; i >= 0; i--) {
                    const rect = headings[i].getBoundingClientRect();
                    if (rect.top - containerTop <= 100) {
                        this.activeIndex.set(i);
                        break;
                    }
                }
            };
            window.addEventListener('scroll', onScroll, true);
            this.destroyRef.onDestroy(() => {
                window.removeEventListener('scroll', onScroll, true);
            });
        }
    }

    public toggleMenu = () => {
        this.menuOpen.update((v) => !v);
    };

    public openMenu = () => {
        this.menuOpen.set(true);
    };

    public closeMenu = () => {
        this.menuOpen.set(false);
    };

    public scrollTo = (index: number) => {
        this.activeIndex.set(index);
        this.closeMenu();
        if (typeof document !== 'undefined') {
            const el = (this.rootContext as any).getContentElement?.() || document.querySelector('.p-text-editor-content');
            if (el) {
                const headings = el.querySelectorAll('h1, h2, h3, h4, h5, h6');
                if (headings[index]) {
                    headings[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        }
    };

    public readonly navigatorContext: NavigatorContext = {
        headings: this.rootContext.headings,
        activeIndex: computed(() => this.activeIndex()),
        menuOpen: computed(() => this.menuOpen()),
        openMenu: this.openMenu,
        closeMenu: this.closeMenu,
        scrollTo: this.scrollTo
    };
}
