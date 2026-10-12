import { AppMenuComponent } from '@/components/layout/menu/app.menu.component';
import { AppTopBarComponent } from '@/components/layout/topbar/app.topbar.component';
import { AppConfigService } from '@/service/appconfigservice';
import { CommonModule } from '@angular/common';
import { Component, computed, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ButtonModule } from '@bdspark/sparkng/button';
import { DomHandler } from '@bdspark/sparkng/dom';
import { Subscription } from 'rxjs';
import { FeaturesSectionComponent } from './featuressection.component';
import { HeroSectionComponent } from './herosection.component';
import { ThemeSectionComponent } from './themesection.component';

@Component({
    selector: 'landing',
    standalone: true,
    templateUrl: './landing.component.html',
    imports: [CommonModule, AppTopBarComponent, AppMenuComponent, ButtonModule, HeroSectionComponent, FeaturesSectionComponent, ThemeSectionComponent]
})
export class LandingComponent implements OnInit {
    subscription!: Subscription;

    isNewsActive = computed(() => this.configService.newsActive());

    isDarkMode = computed(() => this.configService.appState().darkTheme);

    isMenuActive = computed(() => this.configService.appState().menuActive);

    landingClass = computed(() => {
        return {
            'layout-dark': this.isDarkMode(),
            'layout-light': !this.isDarkMode(),
            'layout-news-active': this.isNewsActive()
        };
    });

    constructor(
        private configService: AppConfigService,
        private metaService: Meta,
        private titleService: Title
    ) {}

    hideMenu() {
        this.configService.hideMenu();
        DomHandler.unblockBodyScroll('blocked-scroll');
    }

    ngOnInit() {
        this.titleService.setTitle('SparkNG - Angular UI Component Library');
        this.metaService.updateTag({
            name: 'description',
            content: 'The ultimate collection of design-agnostic, flexible and accessible Angular UI Components.'
        });
    }
}
