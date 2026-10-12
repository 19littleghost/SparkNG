/**
 * @file
 * Pre-styled UI Parts (PrimeOne / Spark Theme) for @bdspark/sparkng-scheduler
 */

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, ViewEncapsulation } from '@angular/core';
import { injectSchedulerEventContext, injectSchedulerHeaderContext, injectSchedulerRoot } from '../../context/scheduler.context';
import { SchedulerNavigation, SchedulerTitle, SchedulerViewSelector } from '../header/scheduler-header';

@Component({
    selector: 'p-scheduler-toolbar-ui',
    standalone: true,
    imports: [CommonModule, SchedulerNavigation, SchedulerTitle, SchedulerViewSelector],
    template: `
        <div class="p-scheduler-toolbar">
            <div class="p-scheduler-toolbar-start">
                <p-scheduler-navigation />
                <p-scheduler-title />
            </div>
            <div class="p-scheduler-toolbar-end">
                <p-scheduler-view-selector />
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'p-scheduler-toolbar-ui',
        '[attr.data-slot]': '"scheduler-toolbar-ui"'
    }
})
export class SchedulerToolbarUI {}

@Component({
    selector: 'p-scheduler-month-event-ui',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="p-scheduler-event-pill" [style.backgroundColor]="ctx().accentColor" [class.p-scheduler-event-selected]="ctx().isSelected">
            <span class="p-scheduler-event-pill-time">{{ ctx().timeText }}</span>
            <span class="p-scheduler-event-pill-title">{{ ctx().title }}</span>
        </div>
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'p-scheduler-month-event-ui',
        '[attr.data-slot]': '"scheduler-month-event-ui"'
    }
})
export class SchedulerMonthEventUI {
    readonly ctx = injectSchedulerEventContext();
}

@Component({
    selector: 'p-scheduler-time-grid-event-ui',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="p-scheduler-timed-event-card" [style.borderLeftColor]="ctx().accentColor" [class.p-scheduler-event-selected]="ctx().isSelected">
            <div class="p-scheduler-timed-event-header">
                <span class="p-scheduler-timed-event-time">{{ ctx().timeText }}</span>
            </div>
            <div class="p-scheduler-timed-event-title">{{ ctx().title }}</div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'p-scheduler-time-grid-event-ui',
        '[attr.data-slot]': '"scheduler-time-grid-event-ui"'
    }
})
export class SchedulerTimeGridEventUI {
    readonly ctx = injectSchedulerEventContext();
}

@Component({
    selector: 'p-scheduler-all-day-event-ui',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="p-scheduler-all-day-pill" [style.backgroundColor]="ctx().accentColor">
            <span class="p-scheduler-all-day-badge">All Day</span>
            <span class="p-scheduler-event-title">{{ ctx().title }}</span>
        </div>
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'p-scheduler-all-day-event-ui',
        '[attr.data-slot]': '"scheduler-all-day-event-ui"'
    }
})
export class SchedulerAllDayEventUI {
    readonly ctx = injectSchedulerEventContext();
}

@Component({
    selector: 'p-scheduler-timeline-event-ui',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="p-scheduler-timeline-event-card" [style.backgroundColor]="ctx().accentColor">
            <span class="p-scheduler-event-title">{{ ctx().title }}</span>
        </div>
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'p-scheduler-timeline-event-ui',
        '[attr.data-slot]': '"scheduler-timeline-event-ui"'
    }
})
export class SchedulerTimelineEventUI {
    readonly ctx = injectSchedulerEventContext();
}

@Component({
    selector: 'p-scheduler-agenda-event-ui',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="p-scheduler-agenda-card" [style.borderLeftColor]="ctx().accentColor">
            <div class="p-scheduler-agenda-time">{{ ctx().timeText }}</div>
            <div class="p-scheduler-agenda-info">
                <div class="p-scheduler-agenda-title">{{ ctx().title }}</div>
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'p-scheduler-agenda-event-ui',
        '[attr.data-slot]': '"scheduler-agenda-event-ui"'
    }
})
export class SchedulerAgendaEventUI {
    readonly ctx = injectSchedulerEventContext();
}
