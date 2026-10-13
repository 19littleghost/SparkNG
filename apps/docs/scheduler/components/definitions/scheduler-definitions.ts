/**
 * @file
 * Semantic Definition Components and Structural Def Directives for @bdspark/sparkng-scheduler
 */

import { Directive, TemplateRef, inject, Component } from '@angular/core';

/* =========================================================================
 * 1. Event Definitions
 * ========================================================================= */

@Directive({
    selector: '[pSchedulerEventDef]',
    standalone: true
})
export class SchedulerEventDef {
    readonly template = inject(TemplateRef<any>);
}

@Component({
    selector: 'p-scheduler-event',
    standalone: true,
    template: `<ng-content></ng-content>`
})
export class SchedulerEventComponent {}

@Directive({
    selector: '[pSchedulerTimeGridEventDef]',
    standalone: true
})
export class SchedulerTimeGridEventDef {
    readonly template = inject(TemplateRef<any>);
}

@Component({
    selector: 'p-scheduler-time-grid-event',
    standalone: true,
    template: `<ng-content></ng-content>`
})
export class SchedulerTimeGridEvent {}

@Directive({
    selector: '[pSchedulerAllDayEventDef]',
    standalone: true
})
export class SchedulerAllDayEventDef {
    readonly template = inject(TemplateRef<any>);
}

@Component({
    selector: 'p-scheduler-all-day-event',
    standalone: true,
    template: `<ng-content></ng-content>`
})
export class SchedulerAllDayEvent {}

@Directive({
    selector: '[pSchedulerMonthEventDef]',
    standalone: true
})
export class SchedulerMonthEventDef {
    readonly template = inject(TemplateRef<any>);
}

@Component({
    selector: 'p-scheduler-month-event',
    standalone: true,
    template: `<ng-content></ng-content>`
})
export class SchedulerMonthEvent {}

@Directive({
    selector: '[pSchedulerTimelineEventDef]',
    standalone: true
})
export class SchedulerTimelineEventDef {
    readonly template = inject(TemplateRef<any>);
}

@Component({
    selector: 'p-scheduler-timeline-event',
    standalone: true,
    template: `<ng-content></ng-content>`
})
export class SchedulerTimelineEvent {}

@Directive({
    selector: '[pSchedulerAgendaEventDef]',
    standalone: true
})
export class SchedulerAgendaEventDef {
    readonly template = inject(TemplateRef<any>);
}

@Component({
    selector: 'p-scheduler-agenda-event',
    standalone: true,
    template: `<ng-content></ng-content>`
})
export class SchedulerAgendaEvent {}

/* =========================================================================
 * 2. Cells, Headers, Gutters
 * ========================================================================= */

@Directive({
    selector: '[pSchedulerMonthCellDef]',
    standalone: true
})
export class SchedulerMonthCellDef {
    readonly template = inject(TemplateRef<any>);
}

@Component({
    selector: 'p-scheduler-month-cell',
    standalone: true,
    template: `<ng-content></ng-content>`
})
export class SchedulerMonthCell {}

@Directive({
    selector: '[pSchedulerMonthDayCellDef]',
    standalone: true
})
export class SchedulerMonthDayCellDef {
    readonly template = inject(TemplateRef<any>);
}

@Component({
    selector: 'p-scheduler-month-day-cell',
    standalone: true,
    template: `<ng-content></ng-content>`
})
export class SchedulerMonthDayCell {}

@Directive({
    selector: '[pSchedulerMonthHeaderCellDef]',
    standalone: true
})
export class SchedulerMonthHeaderCellDef {
    readonly template = inject(TemplateRef<any>);
}

@Component({
    selector: 'p-scheduler-month-header-cell',
    standalone: true,
    template: `<ng-content></ng-content>`
})
export class SchedulerMonthHeaderCell {}

@Directive({
    selector: '[pSchedulerMonthCellNumberDef]',
    standalone: true
})
export class SchedulerMonthCellNumberDef {
    readonly template = inject(TemplateRef<any>);
}

@Component({
    selector: 'p-scheduler-month-cell-number',
    standalone: true,
    template: `<ng-content></ng-content>`
})
export class SchedulerMonthCellNumber {}

@Directive({
    selector: '[pSchedulerMonthMoreLinkDef]',
    standalone: true
})
export class SchedulerMonthMoreLinkDef {
    readonly template = inject(TemplateRef<any>);
}

@Component({
    selector: 'p-scheduler-month-more-link',
    standalone: true,
    template: `<ng-content></ng-content>`
})
export class SchedulerMonthMoreLink {}

@Directive({
    selector: '[pSchedulerDayHeaderDef]',
    standalone: true
})
export class SchedulerDayHeaderDef {
    readonly template = inject(TemplateRef<any>);
}

@Component({
    selector: 'p-scheduler-day-header',
    standalone: true,
    template: `<ng-content></ng-content>`
})
export class SchedulerDayHeader {}

@Directive({
    selector: '[pSchedulerTimeGutterDef]',
    standalone: true
})
export class SchedulerTimeGutterDef {
    readonly template = inject(TemplateRef<any>);
}

@Component({
    selector: 'p-scheduler-time-gutter',
    standalone: true,
    template: `<ng-content></ng-content>`
})
export class SchedulerTimeGutter {}

@Directive({
    selector: '[pSchedulerAgendaDateHeaderDef]',
    standalone: true
})
export class SchedulerAgendaDateHeaderDef {
    readonly template = inject(TemplateRef<any>);
}

@Component({
    selector: 'p-scheduler-agenda-date-header',
    standalone: true,
    template: `<ng-content></ng-content>`
})
export class SchedulerAgendaDateHeader {}

@Directive({
    selector: '[pSchedulerTimeGridCellDef]',
    standalone: true
})
export class SchedulerTimeGridCellDef {
    readonly template = inject(TemplateRef<any>);
}

@Component({
    selector: 'p-scheduler-time-grid-cell',
    standalone: true,
    template: `<ng-content></ng-content>`
})
export class SchedulerTimeGridCell {}

@Directive({
    selector: '[pSchedulerWorkCellDef]',
    standalone: true
})
export class SchedulerWorkCellDef {
    readonly template = inject(TemplateRef<any>);
}

@Component({
    selector: 'p-scheduler-work-cell',
    standalone: true,
    template: `<ng-content></ng-content>`
})
export class SchedulerWorkCell {}

@Directive({
    selector: '[pSchedulerAllDayCellDef]',
    standalone: true
})
export class SchedulerAllDayCellDef {
    readonly template = inject(TemplateRef<any>);
}

@Component({
    selector: 'p-scheduler-all-day-cell',
    standalone: true,
    template: `<ng-content></ng-content>`
})
export class SchedulerAllDayCell {}

@Directive({
    selector: '[pSchedulerTimelineCellDef]',
    standalone: true
})
export class SchedulerTimelineCellDef {
    readonly template = inject(TemplateRef<any>);
}

@Component({
    selector: 'p-scheduler-timeline-cell',
    standalone: true,
    template: `<ng-content></ng-content>`
})
export class SchedulerTimelineCell {}

@Directive({
    selector: '[pSchedulerTimelineHeaderCellDef]',
    standalone: true
})
export class SchedulerTimelineHeaderCellDef {
    readonly template = inject(TemplateRef<any>);
}

@Component({
    selector: 'p-scheduler-timeline-header-cell',
    standalone: true,
    template: `<ng-content></ng-content>`
})
export class SchedulerTimelineHeaderCell {}

@Directive({
    selector: '[pSchedulerMiniMonthCellDef]',
    standalone: true
})
export class SchedulerMiniMonthCellDef {
    readonly template = inject(TemplateRef<any>);
}

@Component({
    selector: 'p-scheduler-mini-month-cell',
    standalone: true,
    template: `<ng-content></ng-content>`
})
export class SchedulerMiniMonthCell {}

@Directive({
    selector: '[pSchedulerMiniMonthHeaderDef]',
    standalone: true
})
export class SchedulerMiniMonthHeaderDef {
    readonly template = inject(TemplateRef<any>);
}

@Component({
    selector: 'p-scheduler-mini-month-header',
    standalone: true,
    template: `<ng-content></ng-content>`
})
export class SchedulerMiniMonthHeader {}

/* =========================================================================
 * 3. Resources Definitions
 * ========================================================================= */

@Directive({
    selector: '[pSchedulerResourceHeaderDef]',
    standalone: true
})
export class SchedulerResourceHeaderDef {
    readonly template = inject(TemplateRef<any>);
}

@Component({
    selector: 'p-scheduler-resource-header',
    standalone: true,
    template: `<ng-content></ng-content>`
})
export class SchedulerResourceHeader {}

@Directive({
    selector: '[pSchedulerResourceColumnHeaderDef]',
    standalone: true
})
export class SchedulerResourceColumnHeaderDef {
    readonly template = inject(TemplateRef<any>);
}

@Component({
    selector: 'p-scheduler-resource-column-header',
    standalone: true,
    template: `<ng-content></ng-content>`
})
export class SchedulerResourceColumnHeader {}

@Directive({
    selector: '[pSchedulerResourceRowDef]',
    standalone: true
})
export class SchedulerResourceRowDef {
    readonly template = inject(TemplateRef<any>);
}

@Component({
    selector: 'p-scheduler-resource-row',
    standalone: true,
    template: `<ng-content></ng-content>`
})
export class SchedulerResourceRow {}

@Directive({
    selector: '[pSchedulerResourceGroupDef]',
    standalone: true
})
export class SchedulerResourceGroupDef {
    readonly template = inject(TemplateRef<any>);
}

@Component({
    selector: 'p-scheduler-resource-group',
    standalone: true,
    template: `<ng-content></ng-content>`
})
export class SchedulerResourceGroup {}

@Directive({
    selector: '[pSchedulerResourceAggregateBadgeDef]',
    standalone: true
})
export class SchedulerResourceAggregateBadgeDef {
    readonly template = inject(TemplateRef<any>);
}

@Component({
    selector: 'p-scheduler-resource-aggregate-badge',
    standalone: true,
    template: `<ng-content></ng-content>`
})
export class SchedulerResourceAggregateBadge {}

@Directive({
    selector: '[pSchedulerResourceDef]',
    standalone: true
})
export class SchedulerResourceDef {
    readonly template = inject(TemplateRef<any>);
}

@Component({
    selector: 'p-scheduler-resource',
    standalone: true,
    template: `<ng-content></ng-content>`
})
export class SchedulerResourceComponent {}

@Directive({
    selector: '[pSchedulerResourceAreaHeaderDef]',
    standalone: true
})
export class SchedulerResourceAreaHeaderDef {
    readonly template = inject(TemplateRef<any>);
}

@Component({
    selector: 'p-scheduler-resource-area-header',
    standalone: true,
    template: `<ng-content></ng-content>`
})
export class SchedulerResourceAreaHeader {}
