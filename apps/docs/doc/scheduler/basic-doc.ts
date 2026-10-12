import { AppCode } from '@/components/doc/app.code';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { Component, signal } from '@angular/core';
import { SchedulerModule } from '@bdspark/sparkng/scheduler';
import type { SchedulerEvent } from '@bdspark/sparkng/types/scheduler';

@Component({
    selector: 'basic-doc',
    standalone: true,
    imports: [AppDocSectionText, SchedulerModule, AppCode],
    template: `
        <app-docsectiontext>
            <p>
                Scheduler receives events with the <code>[events]</code> property as a collection of <code>SchedulerEvent</code> objects. The compound component architecture provides modular headers, responsive view selectors, and rich date
                navigation in a balanced single-line toolbar.
            </p>
        </app-docsectiontext>
        <div class="card">
            <p-scheduler-root [events]="events()" [view]="'month'" [height]="650">
                <p-scheduler-header>
                    <p-scheduler-navigation></p-scheduler-navigation>
                    <p-scheduler-title></p-scheduler-title>
                    <p-scheduler-view-selector></p-scheduler-view-selector>
                </p-scheduler-header>
                <p-scheduler-content>
                    <p-scheduler-month></p-scheduler-month>
                    <p-scheduler-week></p-scheduler-week>
                    <p-scheduler-day></p-scheduler-day>
                    <p-scheduler-agenda></p-scheduler-agenda>
                    <p-scheduler-timeline></p-scheduler-timeline>
                </p-scheduler-content>
                <p-scheduler-quick-info></p-scheduler-quick-info>
                <p-scheduler-more-popover></p-scheduler-more-popover>
            </p-scheduler-root>
        </div>
        <app-code [code]="code"></app-code>
    `
})
export class BasicDoc {
    readonly now = new Date();
    readonly y = this.now.getFullYear();
    readonly m = this.now.getMonth();
    readonly d = this.now.getDate();

    events = signal<SchedulerEvent[]>([
        {
            id: 1,
            title: 'Q4 Product Roadmap Review',
            start: new Date(this.y, this.m, Math.max(1, this.d - 2), 9, 30),
            end: new Date(this.y, this.m, Math.max(1, this.d - 2), 11, 0),
            color: '#3b82f6',
            description: 'Align product features and delivery milestones with executive stakeholders.'
        },
        {
            id: 2,
            title: 'Design System Workshop',
            start: new Date(this.y, this.m, this.d, 13, 0),
            end: new Date(this.y, this.m, this.d, 15, 30),
            color: '#8b5cf6',
            description: 'Audit typography tokens and compound component accessibility standards.'
        },
        {
            id: 3,
            title: 'Team Sync & Retrospective',
            start: new Date(this.y, this.m, this.d + 1, 10, 0),
            end: new Date(this.y, this.m, this.d + 1, 11, 30),
            color: '#10b981',
            description: 'Sprint retro, velocity checks, and planning next sprint deliverables.'
        },
        {
            id: 4,
            title: 'Customer Advisory Board',
            start: new Date(this.y, this.m, this.d + 3, 14, 0),
            end: new Date(this.y, this.m, this.d + 3, 16, 0),
            color: '#f59e0b',
            description: 'Feedback session with enterprise pilot customers.'
        },
        {
            id: 5,
            title: 'All-Hands Company Meeting',
            start: new Date(this.y, this.m, this.d + 4),
            allDay: true,
            color: '#ec4899',
            description: 'Quarterly financial overview and team recognition awards.'
        }
    ]);

    code = {
        typescript: `import { Component, signal } from '@angular/core';
import { SchedulerModule } from '@bdspark/sparkng/scheduler';
import type { SchedulerEvent } from '@bdspark/sparkng/types/scheduler';

@Component({
    standalone: true,
    imports: [SchedulerModule],
    template: \`
        <p-scheduler-root [events]="events()" [view]="'month'" [height]="650">
            <p-scheduler-header>
                <p-scheduler-navigation></p-scheduler-navigation>
                <p-scheduler-title></p-scheduler-title>
                <p-scheduler-view-selector></p-scheduler-view-selector>
            </p-scheduler-header>
            <p-scheduler-content>
                <p-scheduler-month></p-scheduler-month>
                <p-scheduler-week></p-scheduler-week>
                <p-scheduler-day></p-scheduler-day>
                <p-scheduler-agenda></p-scheduler-agenda>
                <p-scheduler-timeline></p-scheduler-timeline>
            </p-scheduler-content>
            <p-scheduler-quick-info></p-scheduler-quick-info>
            <p-scheduler-more-popover></p-scheduler-more-popover>
        </p-scheduler-root>
    \`
})
export class BasicSchedulerDemo {
    events = signal<SchedulerEvent[]>([
        { id: 1, title: 'Q4 Product Roadmap', start: new Date(), end: new Date() }
    ]);
}`
    };
}
