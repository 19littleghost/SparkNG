import { NgModule } from '@angular/core';
import { SchedulerAgendaEventUI, SchedulerAllDayEventUI, SchedulerMonthEventUI, SchedulerTimeGridEventUI, SchedulerTimelineEventUI, SchedulerToolbarUI } from '../components/ui/scheduler-ui';

const UI_COMPONENTS = [SchedulerToolbarUI, SchedulerMonthEventUI, SchedulerTimeGridEventUI, SchedulerAllDayEventUI, SchedulerTimelineEventUI, SchedulerAgendaEventUI];

@NgModule({
    imports: [...UI_COMPONENTS],
    exports: [...UI_COMPONENTS]
})
export class SchedulerUIModule {}
