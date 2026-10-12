/**
 * @file
 * Content container and accessory components for @bdspark/sparkng-scheduler
 */

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, input, ViewEncapsulation } from '@angular/core';
import { injectSchedulerRoot } from '../../context/scheduler.context';

@Component({
    selector: 'p-scheduler-content',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="p-scheduler-content-inner">
            <ng-content></ng-content>
        </div>
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'p-scheduler-content',
        '[attr.data-slot]': '"scheduler-content"'
    }
})
export class SchedulerContent {}

@Component({
    selector: 'p-scheduler-loading',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="p-scheduler-loading-overlay">
            <div class="p-scheduler-spinner"></div>
            <span class="p-scheduler-loading-text">Loading events...</span>
        </div>
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'p-scheduler-loading',
        '[attr.data-slot]': '"scheduler-loading"'
    }
})
export class SchedulerLoading {}

@Component({
    selector: 'p-scheduler-footer',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="p-scheduler-footer-content">
            <ng-content></ng-content>
        </div>
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'p-scheduler-footer',
        '[attr.data-slot]': '"scheduler-footer"'
    }
})
export class SchedulerFooter {}

@Component({
    selector: 'p-scheduler-selection-toolbar',
    standalone: true,
    imports: [CommonModule],
    template: `
        @if (selectedCount() > 0) {
            <div class="p-scheduler-selection-bar">
                <span class="p-scheduler-selection-count">{{ selectedCount() }} selected</span>
                <div class="p-scheduler-selection-actions">
                    <ng-content></ng-content>
                    <button type="button" class="p-scheduler-btn p-scheduler-btn-sm" (click)="root.clearSelection()">Deselect all</button>
                </div>
            </div>
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'p-scheduler-selection-toolbar',
        '[attr.data-slot]': '"scheduler-selection-toolbar"'
    }
})
export class SchedulerSelectionToolbar {
    readonly root = injectSchedulerRoot();
    readonly selectedCount = computed(() => this.root.selectedEventIds().size);
}

@Component({
    selector: 'p-scheduler-category-legend',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="p-scheduler-legend-list">
            @for (cat of root.categories(); track cat.id) {
                <button type="button" class="p-scheduler-legend-item" [class.p-scheduler-legend-item-active]="isCategoryActive(cat.id)" (click)="root.toggleCategory(cat.id)">
                    <span class="p-scheduler-legend-dot" [style.backgroundColor]="cat.color"></span>
                    <span class="p-scheduler-legend-name">{{ cat.name }}</span>
                </button>
            }
        </div>
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'p-scheduler-category-legend',
        '[attr.data-slot]': '"scheduler-category-legend"'
    }
})
export class SchedulerCategoryLegend {
    readonly root = injectSchedulerRoot();

    isCategoryActive(catId: string | number): boolean {
        const active = this.root.activeCategoryIds();
        return active.length === 0 || active.includes(catId);
    }
}
