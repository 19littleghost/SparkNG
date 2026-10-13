import { Injectable } from '@angular/core';
import { style } from './scheduler.style';
import { BaseStyle } from '@bdspark/sparkng/base';

const classes = {
    root: 'p-scheduler p-component',
    wrapper: 'p-scheduler-wrapper',
    header: 'p-scheduler-header',
    content: 'p-scheduler-content',
    footer: 'p-scheduler-footer'
};

@Injectable()
export class SchedulerStyle extends BaseStyle {
    name = 'scheduler';

    style = style;

    classes = classes;
}

/**
 *
 * Scheduler provides event planning, calendar grids, resource timelines, and appointment booking.
 *
 * [Live Demo](https://sparkng.bdspark.com/scheduler)
 *
 * @module schedulerstyle
 *
 */
export enum SchedulerClasses {
    /**
     * Class name of the root element
     */
    root = 'p-scheduler',
    /**
     * Class name of the wrapper element
     */
    wrapper = 'p-scheduler-wrapper',
    /**
     * Class name of the header element
     */
    header = 'p-scheduler-header',
    /**
     * Class name of the content element
     */
    content = 'p-scheduler-content',
    /**
     * Class name of the footer element
     */
    footer = 'p-scheduler-footer'
}

export interface SchedulerStyle extends BaseStyle {}
