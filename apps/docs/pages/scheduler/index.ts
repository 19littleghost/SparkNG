import { AppDoc } from '@/components/doc/app.doc';
import { ApiDoc } from '@/doc/scheduler/api-doc';
import { AccessibilityDoc } from '@/doc/scheduler/accessibility-doc';
import { AvailabilityDoc } from '@/doc/scheduler/availability-doc';
import { BasicDoc } from '@/doc/scheduler/basic-doc';
import { EventsDoc } from '@/doc/scheduler/events-doc';
import { GroupingDoc } from '@/doc/scheduler/grouping-doc';
import { ImportDoc } from '@/doc/scheduler/import-doc';
import { ImportExportDoc } from '@/doc/scheduler/import-export-doc';
import { InteractionDoc } from '@/doc/scheduler/interaction-doc';
import { QuickinfoDoc } from '@/doc/scheduler/quickinfo-doc';
import { ResourceDoc } from '@/doc/scheduler/resource-doc';
import { SchedulingDoc } from '@/doc/scheduler/scheduling-doc';
import { ViewsDoc } from '@/doc/scheduler/views-doc';
import { PTComponent } from '@/doc/scheduler/pt/PTComponent';
import { Component } from '@angular/core';

@Component({
    template: `
        <app-doc
            docTitle="Angular Scheduler Component - SparkNG"
            header="Scheduler"
            description="Scheduler provides enterprise event planning, responsive multi-view calendar grids, resource timelines, recurrence handling, and appointment booking."
            [docs]="docs"
            [apiDocs]="['Scheduler']"
            themeDocs="scheduler"
            [ptDocs]="ptComponent"
        ></app-doc>
    `,
    standalone: true,
    imports: [AppDoc],
    styleUrl: './schedulerdemo.scss'
})
export class SchedulerDemo {
    ptComponent = PTComponent;
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDoc
        },
        {
            id: 'views',
            label: 'Views',
            component: ViewsDoc
        },
        {
            id: 'grouping',
            label: 'Grouping',
            component: GroupingDoc
        },
        {
            id: 'scheduling',
            label: 'Scheduling',
            component: SchedulingDoc
        },
        {
            id: 'availability',
            label: 'Availability',
            component: AvailabilityDoc
        },
        {
            id: 'events',
            label: 'Events & Recurrence',
            component: EventsDoc
        },
        {
            id: 'interaction',
            label: 'Interaction & Shortcuts',
            component: InteractionDoc
        },
        {
            id: 'importexport',
            label: 'Import / Export',
            component: ImportExportDoc
        },
        {
            id: 'resources',
            label: 'Resource Timeline',
            component: ResourceDoc
        },
        {
            id: 'quickinfo',
            label: 'Quick Info',
            component: QuickinfoDoc
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        },
        {
            id: 'api-reference',
            label: 'API Reference',
            component: ApiDoc
        }
    ];
}
