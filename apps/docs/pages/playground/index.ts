import { default as MenuData } from '@/assets/data/menu.json';
import { AppCode } from '@/components/doc/app.code';
import { Demo } from '@/domain/democode';
import { DemoCodeService } from '@/service/democodeservice';
import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, Meta, SafeResourceUrl, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ButtonModule } from '@bdspark/sparkng/button';
import { InputTextModule } from '@bdspark/sparkng/inputtext';

interface CatalogItem {
    group: string;
    name: string;
    slug: string;
    demoComponent: string;
}

interface CatalogGroup {
    name: string;
    items: CatalogItem[];
}

// Menu routes whose demos.json entries live under a different component name.
const DEMO_COMPONENT_OVERRIDES: Record<string, string> = {
    virtualscroller: 'scroller'
};

const toCatalogItem = (group: string, name: string, routerLink: string): CatalogItem => {
    const slug = routerLink.replace(/^\//, '');

    return {
        group,
        name,
        slug,
        demoComponent: DEMO_COMPONENT_OVERRIDES[slug] ?? slug
    };
};

const componentSections = MenuData.data.find((section: { name: string }) => section.name === 'Components')?.children ?? [];

const CATALOG: CatalogItem[] = componentSections.flatMap((entry: { name: string; routerLink?: string; children?: { name: string; routerLink: string }[] }) =>
    entry.children?.length ? entry.children.map((child) => toCatalogItem(entry.name, child.name, child.routerLink)) : entry.routerLink ? [toCatalogItem('Components', entry.name, entry.routerLink)] : []
);

@Component({
    standalone: true,
    imports: [CommonModule, FormsModule, RouterLink, ButtonModule, InputTextModule, AppCode],
    template: `<div class="doc">
        <div class="doc-main">
            <div class="doc-intro">
                <h1>Playground</h1>
                <p>Pick a component to preview its demos live, read the sources and continue in StackBlitz without installing anything.</p>
            </div>
            <section class="py-6">
                <div class="flex flex-col lg:flex-row gap-6 items-stretch">
                    <aside class="w-full lg:w-64 shrink-0 flex flex-col rounded-md border border-surface-200 dark:border-surface-800 bg-surface-0 dark:bg-surface-950">
                        <div class="p-4 pb-3">
                            <input pInputText type="text" [(ngModel)]="search" class="w-full" placeholder="Search components..." aria-label="Search components" />
                        </div>
                        <div class="overflow-y-auto max-h-[28rem] lg:max-h-[46rem] px-2 pb-3">
                            @for (group of filteredGroups(); track group.name) {
                                <div class="px-2 pt-3 pb-1 text-xs font-semibold uppercase tracking-wide text-surface-500 dark:text-surface-400">{{ group.name }}</div>
                                @for (item of group.items; track item.slug) {
                                    <button
                                        type="button"
                                        class="w-full text-left px-3 py-2 rounded-md text-sm border-0 bg-transparent cursor-pointer hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors"
                                        [ngClass]="{ 'bg-primary-50 dark:bg-surface-800 text-primary': selected()?.slug === item.slug }"
                                        (click)="select(item)"
                                    >
                                        {{ item.name }}
                                    </button>
                                }
                            }
                            @if (filteredGroups().length === 0) {
                                <div class="px-3 py-6 text-sm text-surface-500 dark:text-surface-400">No components match your search.</div>
                            }
                        </div>
                    </aside>
                    <div class="flex-1 min-w-0 flex flex-col gap-4">
                        @if (selected(); as item) {
                            <div class="flex items-center justify-between gap-3 flex-wrap">
                                <div>
                                    <h2 class="text-xl font-bold m-0">{{ item.name }}</h2>
                                    <p class="text-sm m-0 text-surface-500 dark:text-surface-400">Live preview of the {{ item.name }} demos rendered by this site.</p>
                                </div>
                                <a pButton [routerLink]="['/', item.slug]" target="_blank" rel="noopener" label="Open Full Page" icon="pi pi-external-link" [outlined]="true" severity="secondary" size="small"></a>
                            </div>
                            <iframe class="w-full rounded-md border border-surface-200 dark:border-surface-800" [src]="previewUrl()" [title]="item.name + ' live preview'" style="min-height: 32rem; height: 70vh" loading="lazy"></iframe>
                            @if (sections().length > 0) {
                                <div class="flex flex-col gap-3">
                                    <div class="flex flex-wrap gap-2">
                                        @for (demo of sections(); track demo.selector) {
                                            <p-button size="small" [label]="sectionLabel(demo)" [outlined]="activeSection()?.selector !== demo.selector" (onClick)="activeSection.set(demo)" />
                                        }
                                    </div>
                                    @if (activeSection(); as demo) {
                                        <div>
                                            <h3 class="text-base font-semibold m-0 mb-2">{{ item.name }} - {{ sectionLabel(demo) }}</h3>
                                            <app-code [selector]="demo.selector" />
                                        </div>
                                    } @else {
                                        <p class="text-sm m-0 text-surface-500 dark:text-surface-400">Select a demo above to read its source code and open it in StackBlitz.</p>
                                    }
                                </div>
                            }
                        } @else {
                            <div class="flex-1 flex flex-col items-center justify-center gap-3 rounded-md border border-dashed border-surface-200 dark:border-surface-800 p-12 text-center">
                                <i class="pi pi-desktop text-4xl text-primary"></i>
                                <h2 class="text-lg font-semibold m-0">Select a component</h2>
                                <p class="text-sm m-0 max-w-xl text-surface-500 dark:text-surface-400">
                                    Choose a component from the list to render its demos in a live preview, then pick individual demos to browse their source and continue editing in StackBlitz.
                                </p>
                            </div>
                        }
                    </div>
                </div>
            </section>
        </div>
    </div>`
})
export class PlaygroundDemo implements OnInit {
    private titleService = inject(Title);

    private metaService = inject(Meta);

    private sanitizer = inject(DomSanitizer);

    private route = inject(ActivatedRoute);

    private router = inject(Router);

    private demoCodeService = inject(DemoCodeService);

    search = signal('');

    selected = signal<CatalogItem | null>(null);

    activeSection = signal<Demo | null>(null);

    private componentParam = signal(this.route.snapshot.queryParamMap.get('component'));

    filteredGroups = computed<CatalogGroup[]>(() => {
        const query = this.search().toLowerCase().trim();

        const items = query ? CATALOG.filter((item) => item.name.toLowerCase().includes(query) || item.slug.includes(query)) : CATALOG;

        const groups = new Map<string, CatalogItem[]>();
        for (const item of items) {
            if (!groups.has(item.group)) {
                groups.set(item.group, []);
            }
            groups.get(item.group)!.push(item);
        }

        return [...groups.entries()].map(([name, groupItems]) => ({ name, items: groupItems }));
    });

    previewUrl = computed<SafeResourceUrl | null>(() => {
        const item = this.selected();
        return item ? this.sanitizer.bypassSecurityTrustResourceUrl(`/${item.slug}?embed=1`) : null;
    });

    sections = computed<Demo[]>(() => {
        const item = this.selected();
        this.demoCodeService.isLoaded();
        return item ? this.demoCodeService.getDemosByComponent(item.demoComponent) : [];
    });

    constructor() {
        // Seed the selection from the URL so prerendered/SSR deep links (?component=button) resolve immediately.
        this.selectFromParam(this.componentParam());

        this.route.queryParamMap.pipe(takeUntilDestroyed()).subscribe((params) => {
            this.componentParam.set(params.get('component'));
            this.selectFromParam(params.get('component'));
        });
    }

    ngOnInit() {
        this.titleService.setTitle('Playground - SparkNG');
        this.metaService.updateTag({
            name: 'description',
            content: 'Try SparkNG in an interactive playground without installing anything.'
        });
    }

    select(item: CatalogItem) {
        this.selected.set(item);
        this.activeSection.set(null);
        void this.router.navigate([], {
            relativeTo: this.route,
            queryParams: { component: item.slug },
            queryParamsHandling: 'merge',
            replaceUrl: true
        });
    }

    private selectFromParam(slug: string | null) {
        if (!slug || this.selected()?.slug === slug) {
            return;
        }

        const item = CATALOG.find((candidate) => candidate.slug === slug);
        if (item) {
            this.selected.set(item);
            this.activeSection.set(null);
        }
    }

    sectionLabel(demo: Demo): string {
        return demo.section
            .split('-')
            .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
            .join(' ');
    }
}
