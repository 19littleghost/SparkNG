/**
 * @file
 * Event layout & column packing algorithms for day and week time grids
 */

import { ProcessedEvent } from '../types/scheduler.types';

export function computeTimeGridEventPositions(events: ProcessedEvent[], startHour = 0, endHour = 24): ProcessedEvent[] {
    if (events.length === 0) return [];

    const totalMinutes = (endHour - startHour) * 60;

    // Filter out all-day events and sort chronologically
    const timed = events
        .filter((e) => !e.allDay)
        .map((e) => {
            const startMins = e.startDate.getHours() * 60 + e.startDate.getMinutes() - startHour * 60;
            const endMins = e.endDate.getHours() * 60 + e.endDate.getMinutes() - startHour * 60;
            const clampedStart = Math.max(0, Math.min(totalMinutes, startMins));
            const clampedEnd = Math.max(clampedStart + 15, Math.min(totalMinutes, endMins));

            return {
                ...e,
                _startMins: clampedStart,
                _endMins: clampedEnd,
                topPercent: (clampedStart / totalMinutes) * 100,
                heightPercent: ((clampedEnd - clampedStart) / totalMinutes) * 100
            };
        })
        .sort((a, b) => a._startMins - b._startMins || b._endMins - b._startMins - (a._endMins - a._startMins));

    // Cluster overlapping events into groups
    const clusters: (typeof timed)[] = [];
    let currentCluster: typeof timed = [];
    let clusterEnd = -1;

    for (const evt of timed) {
        if (currentCluster.length === 0 || evt._startMins < clusterEnd) {
            currentCluster.push(evt);
            clusterEnd = Math.max(clusterEnd, evt._endMins);
        } else {
            clusters.push(currentCluster);
            currentCluster = [evt];
            clusterEnd = evt._endMins;
        }
    }
    if (currentCluster.length > 0) {
        clusters.push(currentCluster);
    }

    // Allocate columns within each cluster
    const positioned: ProcessedEvent[] = [];

    for (const cluster of clusters) {
        const columns: (typeof timed)[] = [];

        for (const evt of cluster) {
            let placed = false;
            for (let c = 0; c < columns.length; c++) {
                const lastInCol = columns[c][columns[c].length - 1];
                if (lastInCol._endMins <= evt._startMins) {
                    columns[c].push(evt);
                    (evt as any).colIndex = c;
                    placed = true;
                    break;
                }
            }
            if (!placed) {
                columns.push([evt]);
                (evt as any).colIndex = columns.length - 1;
            }
        }

        const totalCols = columns.length;
        for (const evt of cluster) {
            const col = (evt as any).colIndex || 0;
            evt.colIndex = col;
            evt.totalCols = totalCols;
            evt.leftPercent = (col / totalCols) * 100;
            evt.widthPercent = (1 / totalCols) * 100;
            positioned.push(evt);
        }
    }

    return positioned;
}
