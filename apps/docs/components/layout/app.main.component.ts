import { AppConfigService } from '@/service/appconfigservice';
import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

import { Spark } from '@bdspark/sparkng/config';
import { DomHandler } from '@bdspark/sparkng/dom';
import { AppFooterComponent } from './footer/app.footer.component';
import { AppMenuComponent } from './menu/app.menu.component';
import { AppTopBarComponent } from './topbar/app.topbar.component';

@Component({
    selector: 'app-main',
    template: `
        <div class="layout-wrapper" [ngClass]="containerClass()">
            <!-- <app-news /> -->
            @if (!embedded()) {
                <app-topbar />
            }
            @if (isMenuActive()) {
                <div class="layout-mask" (click)="hideMenu()" animate.enter="px-modal-enter" animate.leave="px-modal-leave"></div>
            }
            <div class="layout-content">
                @if (!embedded()) {
                    <app-menu />
                }
                <div class="layout-content-slot">
                    <router-outlet></router-outlet>
                </div>
            </div>
            @if (!embedded()) {
                <app-footer />
            }
        </div>
    `,
    standalone: true,
    imports: [RouterOutlet, AppFooterComponent, CommonModule, AppMenuComponent, AppTopBarComponent]
})
export class AppMainComponent {
    configService: AppConfigService = inject(AppConfigService);

    config: Spark = inject(Spark);

    private route = inject(ActivatedRoute);

    isNewsActive = computed(() => false);

    // Chromeless layout for live previews embedded in an iframe (e.g. the playground page).
    // Seeded from the snapshot so SSR renders the embedded variant immediately.
    embedded = signal(this.route.snapshot.queryParamMap.has('embed'));

    isMenuActive = computed(() => this.configService.appState().menuActive);

    containerClass = computed(() => {
        return {
            'layout-news-active': this.isNewsActive(),
            'layout-embedded': this.embedded()
        };
    });

    constructor() {
        this.route.queryParamMap.pipe(takeUntilDestroyed()).subscribe((params) => {
            this.embedded.set(params.has('embed'));
        });
    }

    hideMenu() {
        this.configService.hideMenu();
        DomHandler.unblockBodyScroll('blocked-scroll');
    }
}
