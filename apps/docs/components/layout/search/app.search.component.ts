import { default as MenuData } from '@/assets/data/menu.json';
import { DOCUMENT } from '@angular/common';
import { afterNextRender, afterRenderEffect, ChangeDetectionStrategy, Component, computed, ElementRef, inject, Injector, OnDestroy, Renderer2, signal, viewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DomHandler } from '@bdspark/sparkng/dom';

interface MenuNode {
    name: string;
    icon?: string;
    routerLink?: string;
    children?: MenuNode[];
}

interface IconFontEntry {
    properties?: { name?: string };
    icon?: { tags?: string[] };
}

interface IconFont {
    icons?: IconFontEntry[];
}

interface SearchEntry {
    name: string;
    section: string;
    group?: string;
    routerLink: string;
    icon: string;
    type: 'doc' | 'icon';
    haystack: string;
    tags?: string;
}

interface SearchResult extends SearchEntry {
    score: number;
    before: string;
    match: string;
    after: string;
}

interface ResultGroup {
    section: string;
    startIndex: number;
    items: SearchResult[];
}

const MAX_RESULTS = 30;
const DEFAULT_SECTIONS = new Set(['Getting Started', 'Theming', 'Guides', 'Icons', 'Migration']);

function normalize(value: string): string {
    return value
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
}

function escapeRegExp(value: string): string {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function flattenMenu(): SearchEntry[] {
    const entries: SearchEntry[] = [];

    for (const section of (MenuData as { data: MenuNode[] }).data ?? []) {
        const walk = (nodes: MenuNode[], group?: string) => {
            for (const node of nodes ?? []) {
                if (node.routerLink) {
                    const routeSegment = node.routerLink.split('/').filter(Boolean).pop() ?? '';
                    entries.push({
                        name: node.name,
                        section: section.name,
                        group,
                        routerLink: node.routerLink,
                        icon: node.icon ?? section.icon ?? 'pi pi-book',
                        type: 'doc',
                        haystack: normalize([node.name, group, section.name, routeSegment, node.routerLink].join(' '))
                    });
                }
                if (node.children?.length) {
                    walk(node.children, group ?? node.name);
                }
            }
        };
        walk(section.children);
    }

    return entries;
}

function highlight(entry: SearchEntry, query: string, tokens: string[]): Pick<SearchResult, 'before' | 'match' | 'after'> {
    const lowerName = entry.name.toLowerCase();
    let index = query ? lowerName.indexOf(query) : -1;
    if (index < 0) {
        index = tokens.findIndex((token) => lowerName.includes(token));
        index = index >= 0 ? lowerName.indexOf(tokens[index]) : -1;
    }
    if (index < 0) {
        return { before: entry.name, match: '', after: '' };
    }
    return {
        before: entry.name.slice(0, index),
        match: entry.name.slice(index, index + query.length || entry.name.length - index),
        after: entry.name.slice(index + (query.length || entry.name.length - index))
    };
}

function rankEntries(entries: SearchEntry[], rawQuery: string): SearchResult[] {
    const query = normalize(rawQuery.trim());
    if (!query) {
        return entries.filter((entry) => DEFAULT_SECTIONS.has(entry.section) && entry.type === 'doc').map((entry) => ({ ...entry, score: 0, ...highlight(entry, '', []) }));
    }

    const tokens = query.split(/\s+/);
    const wordStart = new RegExp(`\\b${escapeRegExp(query)}`);
    const results: SearchResult[] = [];

    for (const entry of entries) {
        if (!tokens.every((token) => entry.haystack.includes(token))) continue;

        const name = normalize(entry.name);
        let score = 0;
        if (name.startsWith(query)) {
            score += 100;
        } else if (wordStart.test(name)) {
            score += 80;
        } else if (name.includes(query)) {
            score += 60;
        } else if (entry.tags?.includes(query)) {
            score += 45;
        }
        score += tokens.filter((token) => name.includes(token)).length * 8;
        if (entry.type === 'doc') {
            score += 10;
        }
        score += Math.max(0, 15 - name.length / 2);

        results.push({ ...entry, score, ...highlight(entry, query, tokens) });
    }

    results.sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));
    return results.slice(0, MAX_RESULTS);
}

function groupBySection(results: SearchResult[]): ResultGroup[] {
    const groups = new Map<string, ResultGroup>();
    for (const result of results) {
        let group = groups.get(result.section);
        if (!group) {
            group = { section: result.section, startIndex: 0, items: [] };
            groups.set(result.section, group);
        }
        group.items.push(result);
    }
    let offset = 0;
    for (const group of groups.values()) {
        group.startIndex = offset;
        offset += group.items.length;
    }
    return [...groups.values()];
}

@Component({
    selector: 'app-search',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './app.search.component.html',
    styleUrls: ['./app.search.component.scss'],
    host: {
        class: 'app-search'
    }
})
export class AppSearchComponent implements OnDestroy {
    readonly modKey: string = typeof navigator !== 'undefined' && /mac|iphone|ipad|ipod/i.test(navigator.userAgent) ? '⌘' : 'Ctrl';

    readonly visible = signal(false);
    readonly query = signal('');
    readonly activeIndex = signal(0);

    private readonly entries = signal<SearchEntry[]>(flattenMenu());

    readonly results = computed<SearchResult[]>(() => rankEntries(this.entries(), this.query()));
    readonly groups = computed<ResultGroup[]>(() => groupBySection(this.results()));
    // keyboard navigation walks the grouped order the user sees, which differs
    // from the score order whenever sections interleave in the ranking
    readonly flatResults = computed<SearchResult[]>(() => this.groups().flatMap((group) => group.items));

    private readonly modalEl = viewChild<ElementRef<HTMLElement>>('modalRoot');
    private readonly inputEl = viewChild<ElementRef<HTMLInputElement>>('searchInput');

    private readonly router = inject(Router);
    private readonly document = inject(DOCUMENT);
    private readonly renderer = inject(Renderer2);
    private readonly injector = inject(Injector);

    private unbindKeydown: VoidFunction | null = null;
    private iconsRequested = false;

    constructor() {
        afterNextRender(() => {
            this.unbindKeydown = this.renderer.listen(this.document, 'keydown', (event: KeyboardEvent) => {
                if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
                    event.preventDefault();
                    this.visible() ? this.close() : this.open();
                }
            });
        });

        afterRenderEffect(() => {
            this.activeIndex();
            this.document.querySelector('.search-hit-active')?.scrollIntoView({ block: 'nearest' });
        });
    }

    open() {
        if (this.visible()) return;
        this.visible.set(true);
        this.query.set('');
        this.activeIndex.set(0);
        this.loadIconEntries();

        afterNextRender(
            () => {
                const modal = this.modalEl()?.nativeElement;
                if (modal && modal.parentElement !== this.document.body) {
                    // the sticky topbar has a backdrop-filter, which becomes the
                    // containing block of fixed children, so the modal lives on the body
                    this.document.body.appendChild(modal);
                }
                DomHandler.blockBodyScroll('blocked-scroll');
                this.inputEl()?.nativeElement.focus();
            },
            { injector: this.injector }
        );
    }

    close() {
        if (!this.visible()) return;
        this.visible.set(false);
        DomHandler.unblockBodyScroll('blocked-scroll');
    }

    onInput(event: Event) {
        this.query.set((event.target as HTMLInputElement).value);
        this.activeIndex.set(0);
    }

    onModalKeydown(event: KeyboardEvent) {
        const count = this.flatResults().length;
        switch (event.key) {
            case 'ArrowDown':
                event.preventDefault();
                this.activeIndex.set(Math.min(this.activeIndex() + 1, count - 1));
                break;
            case 'ArrowUp':
                event.preventDefault();
                this.activeIndex.set(Math.max(this.activeIndex() - 1, 0));
                break;
            case 'Enter': {
                event.preventDefault();
                const current = this.flatResults()[this.activeIndex()];
                if (current) this.select(current);
                break;
            }
            case 'Escape':
                event.stopPropagation();
                this.close();
                break;
        }
    }

    setActive(index: number) {
        this.activeIndex.set(index);
    }

    select(item: SearchResult) {
        this.close();
        void this.router.navigateByUrl(item.routerLink);
    }

    ngOnDestroy() {
        this.unbindKeydown?.();
        if (this.visible()) {
            DomHandler.unblockBodyScroll('blocked-scroll');
        }
    }

    private async loadIconEntries() {
        if (this.iconsRequested) return;
        this.iconsRequested = true;
        try {
            const response = await fetch('/assets/data/icons.json');
            if (!response.ok) return;
            const font = (await response.json()) as IconFont;
            const iconEntries: SearchEntry[] = (font.icons ?? []).map((icon) => {
                const name = icon.properties?.name ?? '';
                const tags = icon.icon?.tags ?? [];
                return {
                    name,
                    section: 'Icons',
                    group: 'bdSpark Icons',
                    routerLink: '/icons',
                    icon: `pi pi-${name}`,
                    type: 'icon',
                    tags: normalize(tags.join(' ')),
                    haystack: normalize([name, ...tags].join(' '))
                };
            });
            this.entries.update((current) => [...current, ...iconEntries]);
        } catch {
            // icon search stays unavailable when the list cannot be fetched, doc search still works
        }
    }
}
