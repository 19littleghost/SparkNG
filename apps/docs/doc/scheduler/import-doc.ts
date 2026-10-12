import { AppCode } from '@/components/doc/app.code';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { Component } from '@angular/core';

@Component({
    selector: 'import-doc',
    standalone: true,
    imports: [AppDocSectionText, AppCode],
    template: `
        <app-docsectiontext>
            <p>
                Scheduler is available under the <code>@bdspark/sparkng/scheduler</code> entry point. You can import <code>SchedulerModule</code> for all scheduler components or import individual standalone components like <code>SchedulerRoot</code>,
                <code>SchedulerHeader</code>, and view scopes.
            </p>
        </app-docsectiontext>
        <app-code [code]="code" [hideToggleCode]="true"></app-code>
    `
})
export class ImportDoc {
    code = {
        typescript: `import { Component } from '@angular/core';
import { SchedulerModule } from '@bdspark/sparkng/scheduler';

@Component({
    standalone: true,
    imports: [SchedulerModule],
    template: \`
        <p-scheduler-root [events]="events">
            <p-scheduler-header>
                <p-scheduler-navigation></p-scheduler-navigation>
                <p-scheduler-title></p-scheduler-title>
                <p-scheduler-view-selector></p-scheduler-view-selector>
            </p-scheduler-header>
            <p-scheduler-content>
                <p-scheduler-month></p-scheduler-month>
            </p-scheduler-content>
        </p-scheduler-root>
    \`
})
export class MySchedulerComponent {
    events = [
        { id: 1, title: 'Sprint Review', start: new Date(), allDay: true }
    ];
}`
    };
}
