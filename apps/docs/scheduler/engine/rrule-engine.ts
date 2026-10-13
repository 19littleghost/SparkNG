/**
 * @file
 * Recurrence expansion engine (RFC 5545 RRule support) for @bdspark/sparkng-scheduler
 */

import { ProcessedEvent, RRuleOptions, SchedulerEvent } from '../types/scheduler.types';
import { addDays, addMonths, addYears, isSameDay, toDate } from './date-utils';

export function parseRRule(rrule: string | RRuleOptions): RRuleOptions {
    if (typeof rrule === 'object') return rrule;

    const options: RRuleOptions = { freq: 'DAILY' };
    const parts = rrule.split(';');

    for (const part of parts) {
        const [key, val] = part.split('=');
        if (!key || !val) continue;

        switch (key.toUpperCase()) {
            case 'FREQ':
                options.freq = val.toUpperCase() as RRuleOptions['freq'];
                break;
            case 'INTERVAL':
                options.interval = parseInt(val, 10);
                break;
            case 'COUNT':
                options.count = parseInt(val, 10);
                break;
            case 'UNTIL':
                options.until = new Date(val);
                break;
            case 'BYDAY':
            case 'BYWEEKDAY': {
                const dayMap: Record<string, number> = { SU: 0, MO: 1, TU: 2, WE: 3, TH: 4, FR: 5, SA: 6 };
                options.byweekday = val.split(',').map((d) => dayMap[d.toUpperCase()] ?? parseInt(d, 10));
                break;
            }
        }
    }

    return options;
}

export function expandRecurringEvents(events: SchedulerEvent[], rangeStart: Date, rangeEnd: Date): ProcessedEvent[] {
    const result: ProcessedEvent[] = [];

    for (const event of events) {
        const baseStart = toDate(event.start);
        const duration = event.end ? toDate(event.end).getTime() - baseStart.getTime() : 3600000; // default 1h

        if (!event.rrule) {
            const baseEnd = event.end ? toDate(event.end) : new Date(baseStart.getTime() + duration);
            if (baseEnd >= rangeStart && baseStart <= rangeEnd) {
                result.push({
                    ...event,
                    startDate: baseStart,
                    endDate: baseEnd,
                    isRecurring: false
                });
            }
            continue;
        }

        // Expand recurring series
        const rule = parseRRule(event.rrule);
        const interval = rule.interval || 1;
        const exdates = (event.exdate || []).map((d) => toDate(d));
        let count = 0;
        let current = new Date(baseStart.getTime());

        const isExcluded = (d: Date) => exdates.some((ex) => isSameDay(ex, d));

        // Limit loop to prevent runaway recursion
        const maxLimit = rule.count || 500;

        while (count < maxLimit) {
            if (rule.until && current > toDate(rule.until)) break;
            if (current > rangeEnd) break;

            const instEnd = new Date(current.getTime() + duration);

            if (instEnd >= rangeStart && current <= rangeEnd && !isExcluded(current)) {
                // Check weekday filter if specified
                const matchesWeekday = !rule.byweekday || rule.byweekday.includes(current.getDay());
                if (matchesWeekday) {
                    result.push({
                        ...event,
                        id: `${event.id}_${current.toISOString()}`,
                        startDate: new Date(current.getTime()),
                        endDate: instEnd,
                        isRecurring: true,
                        originalEvent: event
                    });
                }
            }

            count++;

            // Increment current based on frequency
            switch (rule.freq) {
                case 'DAILY':
                    current = addDays(current, interval);
                    break;
                case 'WEEKLY':
                    current = addDays(current, 7 * interval);
                    break;
                case 'MONTHLY':
                    current = addMonths(current, interval);
                    break;
                case 'YEARLY':
                    current = addYears(current, interval);
                    break;
                default:
                    current = addDays(current, interval);
                    break;
            }
        }
    }

    return result;
}
