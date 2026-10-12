import { SchedulerDemo } from './';

export default [
    {
        path: '',
        component: SchedulerDemo
    },
    // Views
    { path: 'views/year', component: SchedulerDemo },
    { path: 'views/month', component: SchedulerDemo },
    { path: 'views/week', component: SchedulerDemo },
    { path: 'views/day', component: SchedulerDemo },
    { path: 'views/agenda', component: SchedulerDemo },
    { path: 'views/timeline', component: SchedulerDemo },
    { path: 'views/resource-timeline', component: SchedulerDemo },
    // Grouping
    { path: 'grouping/resources', component: SchedulerDemo },
    { path: 'grouping/horizontal-resources', component: SchedulerDemo },
    { path: 'grouping/date-grouping', component: SchedulerDemo },
    { path: 'grouping/adaptive-grouping', component: SchedulerDemo },
    // Scheduling
    { path: 'features/scheduling/date-selection', component: SchedulerDemo },
    { path: 'features/scheduling/add-edit-events', component: SchedulerDemo },
    { path: 'features/scheduling/controlled-state', component: SchedulerDemo },
    // Availability
    { path: 'features/availability/business-hours', component: SchedulerDemo },
    { path: 'features/availability/working-days', component: SchedulerDemo },
    { path: 'features/availability/blocked-intervals', component: SchedulerDemo },
    { path: 'features/availability/appointment-slots', component: SchedulerDemo },
    // Events
    { path: 'features/events/event-data', component: SchedulerDemo },
    { path: 'features/events/all-day-spanning-events', component: SchedulerDemo },
    { path: 'features/events/recurring-events', component: SchedulerDemo },
    { path: 'features/events/event-styling', component: SchedulerDemo },
    { path: 'features/events/quick-info', component: SchedulerDemo },
    { path: 'features/events/event-popover', component: SchedulerDemo },
    { path: 'features/events/more-popover', component: SchedulerDemo },
    // Interaction
    { path: 'features/interaction/drag-drop', component: SchedulerDemo },
    { path: 'features/interaction/resize', component: SchedulerDemo },
    { path: 'features/interaction/multi-event-selection', component: SchedulerDemo },
    { path: 'features/interaction/keyboard', component: SchedulerDemo },
    { path: 'features/interaction/context-menu', component: SchedulerDemo },
    // Data Export
    { path: 'features/data-export/import-export', component: SchedulerDemo },
    // Reference
    { path: 'reference/api', component: SchedulerDemo },
    { path: 'reference/theming', component: SchedulerDemo },
    { path: 'reference/events', component: SchedulerDemo },
    { path: 'reference/data-attributes', component: SchedulerDemo },
    { path: 'reference/accessibility', component: SchedulerDemo },
    { path: 'reference/performance', component: SchedulerDemo },
    { path: 'reference/tree-shaking', component: SchedulerDemo }
];
