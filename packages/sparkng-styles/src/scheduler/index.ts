export const style = /*css*/ `
/* Base Root Container */
.p-scheduler {
    --p-scheduler-border-color: var(--p-content-border-color, #cbd5e1);
    --p-scheduler-background: var(--p-content-background, #ffffff);
    --p-scheduler-header-bg: var(--p-content-background, #ffffff);
    --p-scheduler-color: var(--p-content-color, #1e293b);
    --p-scheduler-muted-color: #64748b;
    --p-scheduler-hover-bg: var(--p-content-hover-background, #f1f5f9);
    --p-scheduler-weekend-bg: var(--p-content-hover-background, #f8fafc);
    --p-scheduler-primary: var(--p-primary-color, #3b82f6);
    --p-scheduler-primary-contrast: var(--p-primary-contrast-color, #ffffff);
    --p-scheduler-slot-height: 48px;
    --p-scheduler-gutter-width: 64px;

    display: flex;
    flex-direction: column;
    position: relative;
    box-sizing: border-box;
    font-family: inherit;
    color: var(--p-scheduler-color);
    background-color: var(--p-scheduler-background);
    border: 1px solid var(--p-scheduler-border-color);
    border-radius: var(--p-border-radius-lg, 12px);
    overflow: hidden;
    user-select: none;
    width: 100%;
}

.p-scheduler *, .p-scheduler *:before, .p-scheduler *:after {
    box-sizing: border-box;
}

.p-scheduler-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    flex: 1;
}

/* Header & Single-Line Toolbar Redesign */
.p-scheduler-header {
    border-bottom: 1px solid var(--p-scheduler-border-color);
    background: var(--p-scheduler-header-bg);
    padding: 0.5rem 0.75rem;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    flex-shrink: 0;
}

.p-scheduler-header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 100%;
    min-width: 0;
    gap: 0.375rem;
    white-space: nowrap;
    box-sizing: border-box;
}

/* Left Side: < Today > */
.p-scheduler-header-left,
.p-scheduler-navigation {
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    flex: 0 0 auto;
    min-width: 0;
}

/* Center: October 2026 / Oct 11 – 17, 2026 */
.p-scheduler-header-center,
.p-scheduler-title {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1 1 auto;
    text-align: center;
    min-width: 0;
    overflow: hidden;
    padding: 0 0.25rem;
}

/* Right Side: "Month", "Week", "Day", "Agenda", "Timeline" */
.p-scheduler-header-right,
.p-scheduler-view-selector {
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;
    flex: 0 0 auto;
    min-width: 0;
}

.p-scheduler-title-text {
    margin: 0;
    font-size: 0.9375rem;
    font-weight: 700;
    color: var(--p-scheduler-color);
    white-space: nowrap;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    letter-spacing: -0.01em;
    line-height: 1.25;
}

/* Button Groups: Navigation (< Today >) and Views */
.p-scheduler-nav-buttons,
.p-scheduler-view-buttons {
    display: inline-flex;
    align-items: center;
    background: var(--p-scheduler-hover-bg, #f1f5f9);
    border: 1px solid var(--p-scheduler-border-color);
    border-radius: 8px;
    padding: 2px;
    gap: 2px;
    white-space: nowrap;
    flex-shrink: 0;
}

.p-scheduler-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    border: none;
    background: transparent;
    color: var(--p-scheduler-color);
    padding: 0.25rem 0.4375rem;
    font-size: 0.75rem;
    font-weight: 600;
    border-radius: 6px;
    cursor: pointer;
    line-height: 1.2;
    transition: background 0.15s ease, color 0.15s ease, box-shadow 0.15s ease;
    white-space: nowrap;
}

.p-scheduler-btn:hover {
    background: var(--p-scheduler-background);
    color: var(--p-scheduler-color);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.p-scheduler-btn.p-scheduler-btn-active {
    background: var(--p-scheduler-background);
    color: var(--p-scheduler-primary);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    font-weight: 700;
}

.p-scheduler-btn-prev,
.p-scheduler-btn-next {
    width: 26px;
    height: 26px;
    padding: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.p-scheduler-btn-today {
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
}

@media (max-width: 520px) {
    .p-scheduler-header {
        padding: 0.375rem 0.5rem;
    }
    .p-scheduler-header-content {
        gap: 0.25rem;
    }
    .p-scheduler-title-text {
        font-size: 0.8125rem;
    }
    .p-scheduler-btn {
        padding: 0.2rem 0.3125rem;
        font-size: 0.6875rem;
    }
    .p-scheduler-btn-prev,
    .p-scheduler-btn-next {
        width: 22px;
        height: 22px;
    }
}

.p-scheduler-btn-primary {
    background: var(--p-scheduler-primary);
    color: var(--p-scheduler-primary-contrast);
}

.p-scheduler-btn-danger {
    background: #ef4444;
    color: #ffffff;
}

/* Category Legend */
.p-scheduler-category-legend {
    padding: 0.5rem 1.25rem;
    border-bottom: 1px solid var(--p-scheduler-border-color);
    background: var(--p-scheduler-background);
}

.p-scheduler-legend-list {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
}

.p-scheduler-legend-item {
    display: inline-flex;
    align-items: center;
    gap: 0.375rem;
    border: 1px solid var(--p-scheduler-border-color);
    background: var(--p-scheduler-background);
    padding: 0.25rem 0.625rem;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s ease;
    opacity: 0.55;
}

.p-scheduler-legend-item-active {
    opacity: 1;
    border-color: var(--p-scheduler-primary);
    box-shadow: 0 0 0 1px var(--p-scheduler-primary);
}

.p-scheduler-legend-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
}

/* Content Container & Full Viewport Sizing */
.p-scheduler-content {
    flex: 1;
    min-height: 520px;
    height: 100%;
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
}

.p-scheduler-content-inner {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    width: 100%;
}

p-scheduler-month,
p-scheduler-week,
p-scheduler-day,
p-scheduler-agenda,
p-scheduler-year,
p-scheduler-timeline,
p-scheduler-resource-timeline,
p-scheduler-resource-day,
p-scheduler-resource-week,
p-scheduler-resource-month,
p-scheduler-date-day,
p-scheduler-date-week,
p-scheduler-date-month,
.p-scheduler-month-scope,
.p-scheduler-week-scope,
.p-scheduler-day-scope,
.p-scheduler-agenda-scope,
.p-scheduler-year-scope,
.p-scheduler-timeline-scope,
.p-scheduler-resource-timeline-scope,
.p-scheduler-resource-day-scope,
.p-scheduler-resource-week-scope,
.p-scheduler-resource-month-scope,
.p-scheduler-date-day-scope,
.p-scheduler-date-week-scope,
.p-scheduler-date-month-scope {
    display: none;
    flex-direction: column;
    flex: 1 1 0%;
    height: 100%;
    width: 100%;
    min-height: 0;
    box-sizing: border-box;
}

p-scheduler-month.p-scheduler-view-active,
p-scheduler-week.p-scheduler-view-active,
p-scheduler-day.p-scheduler-view-active,
p-scheduler-agenda.p-scheduler-view-active,
p-scheduler-year.p-scheduler-view-active,
p-scheduler-timeline.p-scheduler-view-active,
p-scheduler-resource-timeline.p-scheduler-view-active,
p-scheduler-resource-day.p-scheduler-view-active,
p-scheduler-resource-week.p-scheduler-view-active,
p-scheduler-resource-month.p-scheduler-view-active,
p-scheduler-date-day.p-scheduler-view-active,
p-scheduler-date-week.p-scheduler-view-active,
p-scheduler-date-month.p-scheduler-view-active,
.p-scheduler-month-scope.p-scheduler-view-active,
.p-scheduler-week-scope.p-scheduler-view-active,
.p-scheduler-day-scope.p-scheduler-view-active,
.p-scheduler-agenda-scope.p-scheduler-view-active,
.p-scheduler-year-scope.p-scheduler-view-active,
.p-scheduler-timeline-scope.p-scheduler-view-active,
.p-scheduler-resource-timeline-scope.p-scheduler-view-active,
.p-scheduler-resource-day-scope.p-scheduler-view-active,
.p-scheduler-resource-week-scope.p-scheduler-view-active,
.p-scheduler-resource-month-scope.p-scheduler-view-active,
.p-scheduler-date-day-scope.p-scheduler-view-active,
.p-scheduler-date-week-scope.p-scheduler-view-active,
.p-scheduler-date-month-scope.p-scheduler-view-active {
    display: flex;
}

/* =========================================================================
 * Month View: Full Table View with 100% Height & Width Line Color
 * ========================================================================= */
.p-scheduler-month-view {
    display: flex;
    flex-direction: column;
    flex: 1 1 0%;
    height: 100%;
    width: 100%;
    min-height: 0;
    box-sizing: border-box;
}

.p-scheduler-month-weekdays {
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    border-bottom: 1px solid var(--p-scheduler-border-color);
    background: var(--p-scheduler-hover-bg);
    width: 100%;
    box-sizing: border-box;
}

.p-scheduler-weekday-cell {
    padding: 0.625rem 0.5rem;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--p-scheduler-muted-color);
    text-align: center;
    border-right: 1px solid var(--p-scheduler-border-color);
    min-width: 0;
    overflow: hidden;
    box-sizing: border-box;
}

.p-scheduler-weekday-cell:last-child {
    border-right: none;
}

.p-scheduler-month-grid {
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    grid-auto-rows: 1fr;
    flex: 1 1 0%;
    height: 100%;
    width: 100%;
    min-height: 0;
    background: var(--p-scheduler-background);
    box-sizing: border-box;
}

.p-scheduler-month-day {
    background: var(--p-scheduler-background);
    min-height: 0;
    height: 100%;
    padding: 0.375rem;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transition: background 0.15s ease;
    border-right: 1px solid var(--p-scheduler-border-color);
    border-bottom: 1px solid var(--p-scheduler-border-color);
    box-sizing: border-box;
    min-width: 0;
    overflow: hidden;
}

.p-scheduler-month-day:nth-child(7n) {
    border-right: none;
}

.p-scheduler-month-day:nth-last-child(-n+7) {
    border-bottom: none;
}

.p-scheduler-month-day:hover {
    background: var(--p-scheduler-hover-bg);
}

.p-scheduler-month-day.p-scheduler-other-month {
    opacity: 0.4;
}

.p-scheduler-month-day.p-scheduler-weekend {
    background: var(--p-scheduler-weekend-bg);
}

.p-scheduler-day-top {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.25rem;
    margin-bottom: 0.25rem;
}

.p-scheduler-day-number {
    font-size: 0.8125rem;
    font-weight: 600;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
}

.p-scheduler-today .p-scheduler-day-number {
    background: var(--p-scheduler-primary);
    color: var(--p-scheduler-primary-contrast);
    font-weight: 700;
}

.p-scheduler-day-events {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    flex: 1;
}

/* Event Pill */
.p-scheduler-event-pill {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 600;
    cursor: pointer;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
    transition: transform 0.1s ease, filter 0.1s ease;
    min-width: 0;
    max-width: 100%;
    width: 100%;
    box-sizing: border-box;
}

.p-scheduler-event-pill:hover {
    filter: brightness(0.95);
    transform: translateY(-1px);
}

.p-scheduler-event-pill-time {
    font-size: 0.6875rem;
    opacity: 0.85;
    font-weight: 500;
}

.p-scheduler-event-pill-title {
    overflow: hidden;
    text-overflow: ellipsis;
}

.p-scheduler-more-link {
    border: none;
    background: transparent;
    color: var(--p-scheduler-primary);
    font-size: 0.75rem;
    font-weight: 700;
    padding: 0.125rem 0.25rem;
    text-align: left;
    cursor: pointer;
}

/* =========================================================================
 * Time Grid (Week & Day Views): Full Height & Width Line Color
 * ========================================================================= */
.p-scheduler-time-grid-view {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
    width: 100%;
    overflow: hidden;
}

.p-scheduler-time-grid-header {
    display: flex;
    border-bottom: 1px solid var(--p-scheduler-border-color);
    background: var(--p-scheduler-hover-bg);
}

.p-scheduler-time-gutter-header {
    width: var(--p-scheduler-gutter-width, 64px);
    flex-shrink: 0;
    border-right: 1px solid var(--p-scheduler-border-color);
}

.p-scheduler-time-grid-header-days {
    display: flex;
    flex: 1;
}

.p-scheduler-time-grid-header-day {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5rem;
    border-right: 1px solid var(--p-scheduler-border-color);
}

.p-scheduler-time-grid-header-day:last-child {
    border-right: none;
}

.p-scheduler-weekday-name {
    font-size: 0.75rem;
    color: var(--p-scheduler-muted-color);
    font-weight: 700;
    text-transform: uppercase;
}

.p-scheduler-day-badge {
    font-size: 1.125rem;
    font-weight: 700;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-top: 0.125rem;
}

.p-scheduler-day-badge.p-scheduler-today {
    background: var(--p-scheduler-primary);
    color: var(--p-scheduler-primary-contrast);
}

.p-scheduler-time-grid-body {
    display: flex;
    flex: 1;
    overflow-y: auto;
    position: relative;
    height: 100%;
    min-height: 520px;
    align-items: flex-start;
}

.p-scheduler-time-gutter {
    width: var(--p-scheduler-gutter-width, 64px);
    flex-shrink: 0;
    border-right: 1px solid var(--p-scheduler-border-color);
    background: var(--p-scheduler-background);
    height: fit-content;
    min-height: 100%;
}

.p-scheduler-gutter-slot {
    height: var(--p-scheduler-slot-height, 48px);
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    padding-right: 0.5rem;
    font-size: 0.6875rem;
    color: var(--p-scheduler-muted-color);
    font-weight: 500;
    border-bottom: 1px solid var(--p-scheduler-border-color);
}

.p-scheduler-gutter-slot span {
    transform: translateY(-50%);
    line-height: 1;
}

.p-scheduler-gutter-slot:first-child span {
    transform: translateY(0);
}

.p-scheduler-columns-container {
    display: flex;
    flex: 1;
    position: relative;
    height: fit-content;
    min-height: 100%;
    align-items: flex-start;
}

.p-scheduler-day-column {
    flex: 1;
    position: relative;
    border-right: 1px solid var(--p-scheduler-border-color);
    background: var(--p-scheduler-background);
    height: fit-content;
    min-height: 100%;
}

.p-scheduler-day-column:last-child {
    border-right: none;
}

.p-scheduler-grid-slot {
    height: var(--p-scheduler-slot-height, 48px);
    border-bottom: 1px solid var(--p-scheduler-border-color);
}

.p-scheduler-grid-slot:hover {
    background: rgba(59, 130, 246, 0.04);
}

.p-scheduler-timed-event-wrapper {
    position: absolute;
    box-sizing: border-box;
    padding: 1px 2px;
    z-index: 2;
}

.p-scheduler-timed-event-card {
    height: 100%;
    border-radius: 4px;
    padding: 0.375rem 0.5rem;
    border-left: 3px solid #2563eb;
    background: rgba(59, 130, 246, 0.15);
    color: var(--p-scheduler-color);
    font-size: 0.75rem;
    cursor: pointer;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.p-scheduler-timed-event-title {
    font-weight: 700;
    line-height: 1.2;
}

.p-scheduler-timed-event-time {
    font-size: 0.6875rem;
    opacity: 0.85;
    margin-top: 2px;
}

/* =========================================================================
 * Agenda View
 * ========================================================================= */
.p-scheduler-agenda-view {
    padding: 1rem 1.5rem;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    height: 100%;
    flex: 1;
}

.p-scheduler-agenda-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.p-scheduler-agenda-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 0.375rem;
    border-bottom: 2px solid var(--p-scheduler-border-color);
}

.p-scheduler-agenda-date {
    font-size: 0.9375rem;
    font-weight: 700;
}

.p-scheduler-agenda-count {
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--p-scheduler-muted-color);
}

.p-scheduler-agenda-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.p-scheduler-agenda-card {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.75rem 1rem;
    border: 1px solid var(--p-scheduler-border-color);
    border-left-width: 4px;
    border-radius: 6px;
    background: var(--p-scheduler-background);
    cursor: pointer;
    transition: background 0.15s ease, transform 0.1s ease;
}

.p-scheduler-agenda-card:hover {
    background: var(--p-scheduler-hover-bg);
    transform: translateX(2px);
}

.p-scheduler-agenda-time {
    font-size: 0.75rem;
    font-weight: 600;
    min-width: 130px;
    color: var(--p-scheduler-muted-color);
}

.p-scheduler-agenda-title {
    font-size: 0.875rem;
    font-weight: 600;
}

.p-scheduler-agenda-meta {
    font-size: 0.75rem;
    color: var(--p-scheduler-muted-color);
    margin-top: 2px;
}

/* =========================================================================
 * Year View
 * ========================================================================= */
.p-scheduler-year-view {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    gap: 1.25rem;
    padding: 1.25rem;
    overflow-y: auto;
    height: 100%;
    flex: 1;
}

.p-scheduler-mini-month-card {
    border: 1px solid var(--p-scheduler-border-color);
    border-radius: 8px;
    padding: 0.875rem;
    background: var(--p-scheduler-background);
}

.p-scheduler-mini-month-name {
    font-size: 0.875rem;
    font-weight: 700;
    margin-bottom: 0.625rem;
    text-align: center;
    color: var(--p-scheduler-color);
}

.p-scheduler-mini-month-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 2px;
}

.p-scheduler-mini-day {
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.6875rem;
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    color: var(--p-scheduler-color);
}

.p-scheduler-mini-day:hover {
    background: var(--p-scheduler-hover-bg);
}

.p-scheduler-mini-today {
    background: var(--p-scheduler-primary);
    color: var(--p-scheduler-primary-contrast);
    font-weight: 700;
}

.p-scheduler-mini-dot {
    position: absolute;
    bottom: 2px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--p-scheduler-primary);
}

/* =========================================================================
 * Timeline & Resource Views
 * ========================================================================= */
.p-scheduler-timeline-view {
    display: flex;
    flex-direction: column;
    overflow-x: auto;
    height: 100%;
    flex: 1;
}

.p-scheduler-timeline-header {
    display: flex;
    border-bottom: 1px solid var(--p-scheduler-border-color);
    background: var(--p-scheduler-hover-bg);
}

.p-scheduler-timeline-resource-col {
    width: 200px;
    flex-shrink: 0;
    padding: 0.625rem 0.875rem;
    font-weight: 700;
    font-size: 0.8125rem;
    border-right: 1px solid var(--p-scheduler-border-color);
}

.p-scheduler-timeline-days-header {
    display: flex;
    flex: 1;
}

.p-scheduler-timeline-day-cell {
    width: 64px;
    flex-shrink: 0;
    text-align: center;
    padding: 0.5rem 0.25rem;
    border-right: 1px solid var(--p-scheduler-border-color);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.p-scheduler-timeline-day-name {
    font-size: 0.6875rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--p-scheduler-muted-color);
}

.p-scheduler-timeline-day-num {
    font-size: 0.8125rem;
    font-weight: 600;
    margin-top: 2px;
}

.p-scheduler-timeline-body {
    display: flex;
    flex-direction: column;
    flex: 1;
}

.p-scheduler-timeline-row {
    display: flex;
    border-bottom: 1px solid var(--p-scheduler-border-color);
    min-height: 48px;
}

.p-scheduler-timeline-row-label {
    width: 200px;
    flex-shrink: 0;
    padding: 0.5rem 0.875rem;
    border-right: 1px solid var(--p-scheduler-border-color);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8125rem;
    font-weight: 600;
    background: var(--p-scheduler-hover-bg);
}

.p-scheduler-resource-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    flex-shrink: 0;
}

.p-scheduler-timeline-row-track {
    display: flex;
    flex: 1;
    position: relative;
}

.p-scheduler-timeline-slot {
    width: 64px;
    flex-shrink: 0;
    border-right: 1px solid var(--p-scheduler-border-color);
}

.p-scheduler-timeline-event-bar {
    position: absolute;
    top: 6px;
    bottom: 6px;
    border-radius: 4px;
    padding: 0.25rem 0.5rem;
    color: #ffffff;
    font-size: 0.75rem;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
}

/* Resource Timeline */
.p-scheduler-resource-timeline-view {
    display: flex;
    flex-direction: column;
    overflow-x: auto;
    height: 100%;
    flex: 1;
}

.p-scheduler-resource-timeline-header {
    display: flex;
    border-bottom: 1px solid var(--p-scheduler-border-color);
    background: var(--p-scheduler-hover-bg);
}

.p-scheduler-resource-header-cell {
    padding: 0.75rem 1rem;
    font-weight: 700;
    font-size: 0.875rem;
    border-right: 1px solid var(--p-scheduler-border-color);
    flex-shrink: 0;
}

.p-scheduler-resource-timeline-body {
    display: flex;
    flex-direction: column;
}

.p-scheduler-resource-timeline-row {
    display: flex;
    border-bottom: 1px solid var(--p-scheduler-border-color);
    min-height: 48px;
}

.p-scheduler-resource-cell {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border-right: 1px solid var(--p-scheduler-border-color);
    font-size: 0.875rem;
    font-weight: 600;
    flex-shrink: 0;
    background: var(--p-scheduler-hover-bg);
}

.p-scheduler-tree-toggle {
    border: none;
    background: transparent;
    cursor: pointer;
    font-size: 0.6875rem;
    padding: 0 2px;
    color: #64748b;
}

.p-scheduler-resource-avatar {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    object-fit: cover;
}

.p-scheduler-resource-badge {
    margin-left: auto;
    font-size: 0.6875rem;
    font-weight: 700;
    background: var(--p-scheduler-border-color);
    color: #475569;
    padding: 1px 6px;
    border-radius: 9999px;
}

.p-scheduler-timeline-track {
    display: flex;
    flex: 1;
    position: relative;
}

/* =========================================================================
 * Availability & Feature Patterns
 * ========================================================================= */
.p-scheduler-non-working-day {
    background: repeating-linear-gradient(
        -45deg,
        rgba(100, 116, 139, 0.05),
        rgba(100, 116, 139, 0.05) 10px,
        rgba(100, 116, 139, 0.1) 10px,
        rgba(100, 116, 139, 0.1) 20px
    ) !important;
}

.p-scheduler-off-badge {
    font-size: 0.6875rem;
    font-weight: 700;
    text-transform: uppercase;
    color: #94a3b8;
    background: rgba(148, 163, 184, 0.15);
    padding: 1px 6px;
    border-radius: 4px;
}

.p-scheduler-business-hour {
    background: transparent;
}

.p-scheduler-off-hour {
    background: rgba(241, 245, 249, 0.6);
}

.p-scheduler-blocked-interval {
    position: absolute;
    left: 2px;
    right: 2px;
    background: repeating-linear-gradient(
        -45deg,
        rgba(239, 68, 68, 0.12),
        rgba(239, 68, 68, 0.12) 8px,
        rgba(239, 68, 68, 0.22) 8px,
        rgba(239, 68, 68, 0.22) 16px
    );
    border: 1px dashed #ef4444;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.375rem;
    font-size: 0.75rem;
    font-weight: 700;
    color: #b91c1c;
    z-index: 2;
    pointer-events: auto;
}

.p-scheduler-lock-icon {
    font-size: 0.75rem;
}

.p-scheduler-appointment-slot {
    position: absolute;
    left: 4px;
    right: 4px;
    background: rgba(16, 185, 129, 0.12);
    border: 1px solid #10b981;
    border-radius: 6px;
    padding: 0.25rem 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.75rem;
    font-weight: 600;
    color: #065f46;
    z-index: 3;
}

.p-scheduler-appointment-slot.p-scheduler-slot-booked {
    background: rgba(100, 116, 139, 0.12);
    border-color: #94a3b8;
    color: #475569;
}

.p-scheduler-slot-price {
    font-weight: 700;
    color: #047857;
    margin-left: 0.375rem;
}

.p-scheduler-slot-book-btn {
    border: none;
    background: #10b981;
    color: #ffffff;
    font-size: 0.6875rem;
    font-weight: 700;
    padding: 2px 8px;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.15s ease;
}

.p-scheduler-slot-book-btn:hover {
    background: #059669;
}

/* Now Indicator Line */
.p-scheduler-now-indicator {
    position: absolute;
    left: 0;
    right: 0;
    z-index: 8;
    pointer-events: none;
    display: flex;
    align-items: center;
}

.p-scheduler-now-arrow {
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 7px solid #ef4444;
    margin-left: -2px;
}

.p-scheduler-now-line {
    flex: 1;
    height: 2px;
    background: #ef4444;
}

/* Resize Handles */
.p-scheduler-resize-handle {
    position: absolute;
    left: 0;
    right: 0;
    height: 6px;
    cursor: ns-resize;
    z-index: 10;
}

.p-scheduler-resize-top {
    top: 0;
}

.p-scheduler-resize-bottom {
    bottom: 0;
}

/* Adaptive Breakpoint Bar */
.p-scheduler-adaptive-bar {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: var(--p-scheduler-hover-bg);
    border-bottom: 1px solid var(--p-scheduler-border-color);
}

.p-scheduler-adaptive-label {
    font-size: 0.8125rem;
    font-weight: 700;
    color: var(--p-scheduler-color);
}

.p-scheduler-adaptive-select {
    padding: 0.25rem 0.5rem;
    font-size: 0.8125rem;
    border-radius: 6px;
    border: 1px solid var(--p-scheduler-border-color);
    background: var(--p-scheduler-background);
    color: var(--p-scheduler-color);
}

/* Selection Toolbar */
.p-scheduler-selection-toolbar {
    padding: 0.5rem 1.25rem;
    background: #eff6ff;
    border-bottom: 1px solid #bfdbfe;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.p-scheduler-selection-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.p-scheduler-selection-count {
    font-size: 0.8125rem;
    font-weight: 700;
    color: #1d4ed8;
}

.p-scheduler-selection-actions {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.p-scheduler-event-selected {
    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px var(--p-scheduler-primary) !important;
}

/* Overlays & Modals */
.p-scheduler-overlay-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1000;
}

.p-scheduler-overlay-backdrop.transparent {
    background: transparent;
}

.p-scheduler-quick-info-dialog,
.p-scheduler-more-popover-card {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--p-scheduler-background);
    color: var(--p-scheduler-color);
    border: 1px solid var(--p-scheduler-border-color);
    border-radius: 12px;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
    z-index: 1001;
    width: 90%;
    max-width: 440px;
    overflow: hidden;
}

.p-scheduler-quick-info-header,
.p-scheduler-more-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 1.25rem;
    border-bottom: 1px solid var(--p-scheduler-border-color);
}

.p-scheduler-quick-info-color-bar {
    width: 4px;
    height: 20px;
    border-radius: 2px;
}

.p-scheduler-quick-info-title,
.p-scheduler-more-date {
    margin: 0;
    font-size: 1.125rem;
    font-weight: 700;
    flex: 1;
}

.p-scheduler-btn-close {
    border: none;
    background: transparent;
    font-size: 1.125rem;
    cursor: pointer;
    color: var(--p-scheduler-muted-color);
}

.p-scheduler-quick-info-body,
.p-scheduler-more-event-list {
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.p-scheduler-quick-info-row {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
}

.p-scheduler-quick-info-desc {
    padding: 0.75rem;
    border-radius: 6px;
    background: var(--p-scheduler-hover-bg);
    font-size: 0.8125rem;
    color: var(--p-scheduler-muted-color);
}

.p-scheduler-quick-info-footer {
    display: flex;
    justify-content: flex-end;
    gap: 0.75rem;
    padding: 0.75rem 1.25rem;
    border-top: 1px solid var(--p-scheduler-border-color);
    background: var(--p-scheduler-hover-bg);
}

.p-scheduler-context-menu-panel {
    position: fixed;
    background: var(--p-scheduler-background);
    border: 1px solid var(--p-scheduler-border-color);
    border-radius: 8px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    z-index: 1001;
    min-width: 170px;
    overflow: hidden;
    padding: 0.25rem 0;
}

.p-scheduler-context-menu-list {
    display: flex;
    flex-direction: column;
}

.p-scheduler-menu-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.875rem;
    border: none;
    background: transparent;
    text-align: left;
    font-size: 0.8125rem;
    font-weight: 500;
    color: var(--p-scheduler-color);
    cursor: pointer;
    transition: background 0.15s ease;
}

.p-scheduler-menu-item:hover {
    background: var(--p-scheduler-hover-bg);
}

.p-scheduler-menu-item-danger {
    color: #ef4444;
}

.p-scheduler-menu-item-danger:hover {
    background: #fef2f2;
}
`;
