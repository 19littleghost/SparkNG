import { AppCode } from '@/components/doc/app.code';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { Component, signal } from '@angular/core';
import { SchedulerModule } from '@bdspark/sparkng/scheduler';
import type { SchedulerEvent, SchedulerResource } from '@bdspark/sparkng/types/scheduler';

@Component({
    selector: 'resource-doc',
    standalone: true,
    imports: [AppDocSectionText, SchedulerModule, AppCode],
    template: `
        <app-docsectiontext>
            <p>
                Manage appointments, rooms, and personnel assignments simultaneously by binding <code>[resources]</code> alongside <code>[events]</code>. In timeline and resource views, events are partitioned automatically into individual resource
                lanes.
            </p>
        </app-docsectiontext>
        <div class="card">
            <p-scheduler-root [resources]="resources()" [events]="events()" [view]="'timeline'">
                <p-scheduler-header>
                    <p-scheduler-navigation></p-scheduler-navigation>
                    <p-scheduler-title></p-scheduler-title>
                    <p-scheduler-view-selector></p-scheduler-view-selector>
                </p-scheduler-header>
                <p-scheduler-content>
                    <p-scheduler-timeline></p-scheduler-timeline>
                </p-scheduler-content>
                <p-scheduler-quick-info></p-scheduler-quick-info>
            </p-scheduler-root>
        </div>
        <app-code [code]="code"></app-code>
    `
})
export class ResourceDoc {
    readonly now = new Date();
    readonly y = this.now.getFullYear();
    readonly m = this.now.getMonth();
    readonly d = this.now.getDate();

    resources = signal<SchedulerResource[]>([
        { id: 'conf-a', title: 'Conference Room A', color: '#3b82f6' },
        { id: 'conf-b', title: 'Innovation Lab', color: '#10b981' },
        { id: 'conf-c', title: 'Auditorium', color: '#8b5cf6' },
        { id: 'conf-d', title: 'Executive Boardroom', color: '#f59e0b' }
    ]);

    events = signal<SchedulerEvent[]>([
        {
            id: 201,
            title: 'Q4 Budget Review',
            start: new Date(this.y, this.m, this.d),
            end: new Date(this.y, this.m, this.d + 2),
            resourceId: 'conf-a',
            color: '#3b82f6'
        },
        {
            id: 202,
            title: 'AI Hackathon',
            start: new Date(this.y, this.m, this.d + 1),
            end: new Date(this.y, this.m, this.d + 4),
            resourceId: 'conf-b',
            color: '#10b981'
        },
        {
            id: 203,
            title: 'Town Hall Livestream',
            start: new Date(this.y, this.m, this.d + 2),
            end: new Date(this.y, this.m, this.d + 3),
            resourceId: 'conf-c',
            color: '#8b5cf6'
        }
    ]);

    code = {
        typescript: `import { Component, signal } from '@angular/core';
import { SchedulerModule } from '@bdspark/sparkng/scheduler';
import type { SchedulerEvent, SchedulerResource } from '@bdspark/sparkng/types/scheduler';

@Component({
    standalone: true,
    imports: [SchedulerModule],
    template: \`
        <p-scheduler-root [resources]="resources()" [events]="events()" [view]="'timeline'">
            <p-scheduler-header>
                <p-scheduler-navigation></p-scheduler-navigation>
                <p-scheduler-title></p-scheduler-title>
                <p-scheduler-view-selector></p-scheduler-view-selector>
            </p-scheduler-header>
            <p-scheduler-content>
                <p-scheduler-timeline></p-scheduler-timeline>
            </p-scheduler-content>
        </p-scheduler-root>
    \`
})
export class ResourceSchedulerDemo {
    resources = signal<SchedulerResource[]>([
        { id: 'conf-a', title: 'Conference Room A', color: '#3b82f6' },
        { id: 'conf-b', title: 'Innovation Lab', color: '#10b981' }
    ]);
    events = signal<SchedulerEvent[]>([
        { id: 1, title: 'Budget Review', start: new Date(), end: new Date(), resourceId: 'conf-a' }
    ]);
}`
    };
}
