/**
 * @file
 * Context tokens and injection helpers for @bdspark/sparkng-scheduler
 */

import { inject, InjectionToken, OutputEmitterRef, Signal } from '@angular/core';
import type {
    AppointmentSlot,
    BlockedInterval,
    BulkEventsPayload,
    BusinessHours,
    ContextMenuState,
    DateClickPayload,
    DateRange,
    DateSelectPayload,
    DensityMode,
    EventCategory,
    EventClickPayload,
    EventDropPayload,
    EventPopoverState,
    EventResizePayload,
    MorePopoverState,
    ProcessedEvent,
    QuickInfoState,
    RecurrenceEditPayload,
    SchedulerEvent,
    SchedulerResource,
    SchedulerViewType,
    SlotBookPayload
} from '../types/scheduler.types';

export interface SchedulerRootInstance {
    hostElement: HTMLElement;
    currentView: Signal<SchedulerViewType>;
    currentDate: Signal<Date>;
    headerTitle: Signal<string>;
    events: Signal<SchedulerEvent[]>;
    resources: Signal<SchedulerResource[]>;
    categories: Signal<EventCategory[]>;
    activeCategoryIds: Signal<(string | number)[]>;
    firstDayOfWeek: Signal<number>;
    locale: Signal<string>;
    slotMinTime: Signal<string>;
    slotMaxTime: Signal<string>;
    slotDuration: Signal<string>;
    businessHours: Signal<any>;
    workingDays: Signal<number[]>;
    blockedIntervals: Signal<BlockedInterval[]>;
    appointmentSlots: Signal<AppointmentSlot[]>;
    adaptiveBreakpoint: Signal<number>;
    maxEventsVisible: Signal<number>;
    editable: Signal<boolean>;
    eventStartEditable: Signal<boolean>;
    eventDurationEditable: Signal<boolean>;
    selectable: Signal<boolean>;
    density: Signal<DensityMode>;
    quickInfo: Signal<boolean>;
    eventPopover: Signal<boolean>;
    showMorePopover: Signal<boolean>;
    contextMenu: Signal<boolean>;
    processedEvents: Signal<ProcessedEvent[]>;
    visibleRange: Signal<DateRange>;

    quickInfoState: Signal<QuickInfoState>;
    morePopoverState: Signal<MorePopoverState>;
    eventPopoverState: Signal<EventPopoverState>;
    contextMenuState: Signal<ContextMenuState>;
    selectedEventIds: Signal<Set<string | number>>;

    eventClick: OutputEmitterRef<EventClickPayload>;
    eventDblclick: OutputEmitterRef<EventClickPayload>;
    dateClick: OutputEmitterRef<DateClickPayload>;
    dateSelect: OutputEmitterRef<DateSelectPayload>;
    eventDrop: OutputEmitterRef<EventDropPayload>;
    eventResize: OutputEmitterRef<EventResizePayload>;
    slotBook: OutputEmitterRef<SlotBookPayload>;
    bulkUpdate: OutputEmitterRef<BulkEventsPayload>;
    recurrenceEdit: OutputEmitterRef<RecurrenceEditPayload>;

    next: () => void;
    prev: () => void;
    today: () => void;
    gotoDate: (date: Date) => void;
    changeView: (view: SchedulerViewType) => void;
    addEvent: (event: SchedulerEvent) => void;
    updateEvent: (event: SchedulerEvent) => void;
    removeEvent: (id: string | number) => void;
    toggleCategory: (categoryId: string | number) => void;
    openMorePopover: (date: Date, events: ProcessedEvent[], target: HTMLElement) => void;
    hideMorePopover: () => void;
    showQuickInfo: (event: SchedulerEvent, target: HTMLElement, isNew?: boolean) => void;
    hideQuickInfo: () => void;
    showEventPopover: (event: ProcessedEvent, target: HTMLElement) => void;
    hideEventPopover: () => void;
    showContextMenu: (x: number, y: number, event?: SchedulerEvent, date?: Date, resourceId?: string | number) => void;
    hideContextMenu: () => void;
    selectEvent: (event: SchedulerEvent, multi?: boolean) => void;
    clearSelection: () => void;
    deleteSelectedEvents: () => void;
    bookSlot: (slot: AppointmentSlot, date: Date, resourceId?: string | number) => void;
    exportToIcs: () => string;
    exportToJson: () => string;
    importEvents: (events: SchedulerEvent[]) => void;
}

export interface SchedulerEventContext {
    event: ProcessedEvent;
    title: string;
    timeText: string;
    accentColor: string;
    isSelected: boolean;
    isDragging: boolean;
    view: SchedulerViewType;
}

export interface SchedulerHeaderContext {
    title: string;
    currentView: SchedulerViewType;
    views: SchedulerViewType[];
    next: () => void;
    prev: () => void;
    today: () => void;
    changeView: (view: SchedulerViewType) => void;
}

export interface SchedulerResourceContext {
    resource: SchedulerResource;
    depth: number;
    isExpanded: boolean;
    toggleExpand: () => void;
    events: ProcessedEvent[];
}

export const SCHEDULER_ROOT_TOKEN = new InjectionToken<SchedulerRootInstance>('SCHEDULER_ROOT_TOKEN');
export const SCHEDULER_EVENT_CONTEXT_TOKEN = new InjectionToken<Signal<SchedulerEventContext>>('SCHEDULER_EVENT_CONTEXT_TOKEN');
export const SCHEDULER_HEADER_CONTEXT_TOKEN = new InjectionToken<Signal<SchedulerHeaderContext>>('SCHEDULER_HEADER_CONTEXT_TOKEN');
export const SCHEDULER_RESOURCE_CONTEXT_TOKEN = new InjectionToken<Signal<SchedulerResourceContext>>('SCHEDULER_RESOURCE_CONTEXT_TOKEN');
export const SCHEDULER_MORE_POPOVER_CONTEXT_TOKEN = new InjectionToken<Signal<MorePopoverState>>('SCHEDULER_MORE_POPOVER_CONTEXT_TOKEN');
export const SCHEDULER_QUICK_INFO_CONTEXT_TOKEN = new InjectionToken<Signal<QuickInfoState>>('SCHEDULER_QUICK_INFO_CONTEXT_TOKEN');
export const SCHEDULER_EVENT_POPOVER_CONTEXT_TOKEN = new InjectionToken<Signal<EventPopoverState>>('SCHEDULER_EVENT_POPOVER_CONTEXT_TOKEN');
export const SCHEDULER_CONTEXT_MENU_CONTEXT_TOKEN = new InjectionToken<Signal<ContextMenuState>>('SCHEDULER_CONTEXT_MENU_CONTEXT_TOKEN');

export function injectSchedulerRoot(): SchedulerRootInstance {
    return inject(SCHEDULER_ROOT_TOKEN);
}

export function injectSchedulerEventContext(): Signal<SchedulerEventContext> {
    return inject(SCHEDULER_EVENT_CONTEXT_TOKEN);
}

export function injectSchedulerHeaderContext(): Signal<SchedulerHeaderContext> {
    return inject(SCHEDULER_HEADER_CONTEXT_TOKEN);
}

export function injectSchedulerResourceRowContext(): Signal<SchedulerResourceContext> {
    return inject(SCHEDULER_RESOURCE_CONTEXT_TOKEN);
}

export function injectSchedulerMorePopoverContext(): Signal<MorePopoverState> {
    return inject(SCHEDULER_MORE_POPOVER_CONTEXT_TOKEN);
}

export function injectSchedulerQuickInfoContext(): Signal<QuickInfoState> {
    return inject(SCHEDULER_QUICK_INFO_CONTEXT_TOKEN);
}

export function injectSchedulerEventPopoverContext(): Signal<EventPopoverState> {
    return inject(SCHEDULER_EVENT_POPOVER_CONTEXT_TOKEN);
}

export function injectSchedulerContextMenuContext(): Signal<ContextMenuState> {
    return inject(SCHEDULER_CONTEXT_MENU_CONTEXT_TOKEN);
}
