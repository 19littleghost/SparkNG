/**
 * @file
 * Zero-dependency date utilities and formatters for @bdspark/sparkng-scheduler
 */

export function toDate(value: Date | string | number | undefined): Date {
    if (!value) return new Date();
    if (value instanceof Date) return new Date(value.getTime());
    return new Date(value);
}

export function startOfDay(date: Date): Date {
    const d = new Date(date.getTime());
    d.setHours(0, 0, 0, 0);
    return d;
}

export function endOfDay(date: Date): Date {
    const d = new Date(date.getTime());
    d.setHours(23, 59, 59, 999);
    return d;
}

export function startOfWeek(date: Date, firstDayOfWeek = 0): Date {
    const d = startOfDay(date);
    const day = d.getDay();
    const diff = (day < firstDayOfWeek ? 7 : 0) + day - firstDayOfWeek;
    d.setDate(d.getDate() - diff);
    return d;
}

export function endOfWeek(date: Date, firstDayOfWeek = 0): Date {
    const s = startOfWeek(date, firstDayOfWeek);
    const d = new Date(s.getTime());
    d.setDate(d.getDate() + 6);
    d.setHours(23, 59, 59, 999);
    return d;
}

export function startOfMonth(date: Date): Date {
    const d = new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0, 0);
    return d;
}

export function endOfMonth(date: Date): Date {
    const d = new Date(date.getFullYear(), date.getMonth() + 1, 0, 23, 59, 59, 999);
    return d;
}

export function addDays(date: Date, amount: number): Date {
    const d = new Date(date.getTime());
    d.setDate(d.getDate() + amount);
    return d;
}

export function addMonths(date: Date, amount: number): Date {
    const d = new Date(date.getTime());
    d.setMonth(d.getMonth() + amount);
    return d;
}

export function addYears(date: Date, amount: number): Date {
    const d = new Date(date.getTime());
    d.setFullYear(d.getFullYear() + amount);
    return d;
}

export function addMinutes(date: Date, amount: number): Date {
    const d = new Date(date.getTime());
    d.setMinutes(d.getMinutes() + amount);
    return d;
}

export function isSameDay(a: Date, b: Date): boolean {
    return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

export function isSameMonth(a: Date, b: Date): boolean {
    return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth();
}

export function isBetween(date: Date, start: Date, end: Date): boolean {
    const t = date.getTime();
    return t >= start.getTime() && t <= end.getTime();
}

export function diffInMinutes(start: Date, end: Date): number {
    return Math.round((end.getTime() - start.getTime()) / 60000);
}

export function formatTime(date: Date, locale = 'en-US', hour12 = true): string {
    return new Intl.DateTimeFormat(locale, {
        hour: 'numeric',
        minute: '2-digit',
        hour12
    }).format(date);
}

export function formatDate(date: Date, locale = 'en-US', options?: Intl.DateTimeFormatOptions): string {
    return new Intl.DateTimeFormat(
        locale,
        options ?? {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        }
    ).format(date);
}

export function getViewTitle(view: string, date: Date, locale = 'en-US', firstDayOfWeek = 0): string {
    switch (view) {
        case 'month':
        case 'resourceMonth':
        case 'dateMonth':
            return new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }).format(date);
        case 'week':
        case 'resourceWeek':
        case 'dateWeek': {
            const start = startOfWeek(date, firstDayOfWeek);
            const end = addDays(start, 6);
            if (start.getMonth() === end.getMonth()) {
                const month = new Intl.DateTimeFormat(locale, { month: 'short' }).format(start);
                return `${month} ${start.getDate()} – ${end.getDate()}, ${start.getFullYear()}`;
            }
            const sMonth = new Intl.DateTimeFormat(locale, { month: 'short' }).format(start);
            const eMonth = new Intl.DateTimeFormat(locale, { month: 'short' }).format(end);
            return `${sMonth} ${start.getDate()} – ${eMonth} ${end.getDate()}, ${end.getFullYear()}`;
        }
        case 'day':
        case 'resourceDay':
        case 'dateDay':
            return new Intl.DateTimeFormat(locale, {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
                year: 'numeric'
            }).format(date);
        case 'year':
            return String(date.getFullYear());
        case 'agenda':
        case 'timeline':
        case 'resourceTimeline':
            return new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }).format(date);
        default:
            return new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }).format(date);
    }
}

export interface MonthGridDay {
    date: Date;
    dayNumber: number;
    isCurrentMonth: boolean;
    isToday: boolean;
    isWeekend: boolean;
}

export function generateMonthGrid(date: Date, firstDayOfWeek = 0): MonthGridDay[] {
    const today = new Date();
    const firstOfMonth = startOfMonth(date);
    const start = startOfWeek(firstOfMonth, firstDayOfWeek);
    const days: MonthGridDay[] = [];

    let current = new Date(start.getTime());
    // Generate exactly 35 or 42 cells (5 or 6 weeks)
    for (let i = 0; i < 42; i++) {
        const isCurrentMonth = current.getMonth() === date.getMonth();
        const dayOfWeek = current.getDay();
        const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

        days.push({
            date: new Date(current.getTime()),
            dayNumber: current.getDate(),
            isCurrentMonth,
            isToday: isSameDay(current, today),
            isWeekend
        });

        current.setDate(current.getDate() + 1);
        if (i === 34 && current.getMonth() !== date.getMonth()) {
            break; // Finished 5 weeks and subsequent days are in next month
        }
    }

    return days;
}

export function generateWeekDays(date: Date, firstDayOfWeek = 0, count = 7): Date[] {
    const start = startOfWeek(date, firstDayOfWeek);
    const days: Date[] = [];
    for (let i = 0; i < count; i++) {
        days.push(addDays(start, i));
    }
    return days;
}

export function generateTimeSlots(startHour = 0, endHour = 24, stepMinutes = 60): { hour: number; minute: number; timeString: string }[] {
    const slots: { hour: number; minute: number; timeString: string }[] = [];
    for (let h = startHour; h < endHour; h++) {
        for (let m = 0; m < 60; m += stepMinutes) {
            const hStr = h < 10 ? `0${h}` : `${h}`;
            const mStr = m < 10 ? `0${m}` : `${m}`;
            slots.push({
                hour: h,
                minute: m,
                timeString: `${hStr}:${mStr}`
            });
        }
    }
    return slots;
}
