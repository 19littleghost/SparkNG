import { AppDocPtViewer, getPTOptions } from '@/components/doc/app.docptviewer';
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { SchedulerModule } from '@bdspark/sparkng/scheduler';
import type { SchedulerEvent } from '@bdspark/sparkng/types/scheduler';

@Component({
    selector: 'scheduler-pt-viewer',
    standalone: true,
    imports: [CommonModule, AppDocPtViewer, SchedulerModule],
    template: `
        <app-docptviewer [docs]="docs">
            <p-scheduler-root [date]="currentDate()" view="month" [events]="events()">
                <p-scheduler-header>
                    <div class="p-scheduler-toolbar">
                        <div class="p-scheduler-toolbar-start">
                            <p-scheduler-navigation />
                            <p-scheduler-title />
                        </div>
                        <div class="p-scheduler-toolbar-end">
                            <p-scheduler-view-selector />
                        </div>
                    </div>
                </p-scheduler-header>
                <p-scheduler-content>
                    <p-scheduler-month />
                </p-scheduler-content>
            </p-scheduler-root>
        </app-docptviewer>
    `
})
export class PTViewer {
    currentDate = signal<Date>(new Date(2026, 9, 12));

    events = signal<SchedulerEvent[]>([
        {
            id: 'pt-1',
            title: 'Sprint Planning',
            start: new Date(2026, 9, 12, 9, 0),
            end: new Date(2026, 9, 12, 10, 30),
            color: '#3b82f6'
        },
        {
            id: 'pt-2',
            title: 'Design Review',
            start: new Date(2026, 9, 14, 14, 0),
            end: new Date(2026, 9, 14, 15, 30),
            color: '#10b981'
        }
    ]);

    docs = [
        {
            data: getPTOptions('Scheduler'),
            key: 'Scheduler'
        }
    ];
}
