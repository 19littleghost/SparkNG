import { Injectable } from '@angular/core';
import { style } from '@bdspark/sparkng-styles/scrolltop';
import { BaseStyle } from '@bdspark/sparkng/base';

const classes = {
    root: ({ instance }) => ['p-scrolltop', { 'p-scrolltop-sticky': instance.target !== 'window' }],
    icon: 'p-scrolltop-icon'
};

@Injectable()
export class ScrollTopStyle extends BaseStyle {
    name = 'scrolltop';

    style = style;

    classes = classes;
}

/**
 *
 * ScrollTop gets displayed after a certain scroll position and used to navigates to the top of the page quickly.
 *
 * [Live Demo](https://sparkng.bdspark.com/scrolltop/)
 *
 * @module scrolltopstyle
 *
 */
export enum ScrollTopClasses {
    /**
     * Class name of the root element
     */
    root = 'p-scrolltop',
    /**
     * Class name of the icon element
     */
    icon = 'p-scrolltop-icon'
}

export interface ScrollTopStyle extends BaseStyle {}
