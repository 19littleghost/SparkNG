import { AppCode } from '@/components/doc/app.code';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { Component, signal } from '@angular/core';
import { SchedulerModule } from '@bdspark/sparkng/scheduler';
import type { SchedulerEvent } from '@bdspark/sparkng/types/scheduler';

@Component({
    selector: 'quickinfo-doc',
    standalone: true,
    imports: [AppDocSectionText, SchedulerModule, AppCode],
    template: `
        <app-docsectiontext>
            <p>
                The <code>&lt;p-scheduler-quick-info&gt;</code> component renders an accessible overlay dialog when an event is clicked. It presents details including date intervals, descriptions, and action triggers, allowing quick edits and
                inspections without full-page navigation.
            </p>
        </app-docsectiontext>
        <div class="card">
            <p-scheduler-root [events]="events()" [view]="'month'">
                <p-scheduler-header>
                    <p-scheduler-navigation></p-scheduler-navigation>
                    <p-scheduler-title></p-scheduler-title>
                    <p-scheduler-view-selector></p-scheduler-view-selector>
                </p-scheduler-header>
                <p-scheduler-content>
                    <p-scheduler-month></p-scheduler-month>
                </p-scheduler-content>
                <p-scheduler-quick-info></p-scheduler-quick-info>
            </p-scheduler-root>
        </div>
        <app-code [code]="code"></app-code>
    `
})
export class QuickinfoDoc {
    readonly now = new Date();
    readonly y = this.now.getFullYear();
    readonly m = this.now.getMonth();
    readonly d = this.now.getDate();

    events = signal<SchedulerEvent[]>([
        {
            id: 301,
            title: 'Client Onboarding Kickoff',
            start: new Date(this.y, this.m, this.d, 11, 0),
            end: new Date(this.y, this.m, this.d, 12, 0),
            color: '#10b981',
            description: 'First meeting with the enterprise client implementation team to discuss project requirements and timeline.'
        },
        {
            id: 302,
            title: 'Product Strategy Sync',
            start: new Date(this.y, this.m, this.d + 1, 15, 0),
            end: new Date(this.y, this.m, this.d + 1, 16, 30),
            color: '#3b82f6',
            description: 'Review product analytics, user feedback, and prioritization for upcoming release cycles.'
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
        <p-scheduler-root [events]="events()" [view]="'month'">
            <p-scheduler-header>
                <p-scheduler-navigation></p-scheduler-navigation>
                <p-scheduler-title></p-scheduler-title>
                <p-scheduler-view-selector></p-scheduler-view-selector>
            </p-scheduler-header>
            <p-scheduler-content>
                <p-scheduler-month></p-scheduler-month>
            </p-scheduler-content>
            <p-scheduler-quick-info></p-scheduler-quick-info>
        </p-scheduler-root>
    \`
})
export class QuickInfoSchedulerDemo {
    events = signal<SchedulerEvent[]>([
        {
            id: 1,
            title: 'Client Onboarding',
            start: new Date(),
            end: new Date(),
            description: 'Discuss project requirements and deliverables.'
        }
    ]);
}`
    };
}
