import { Injectable } from '@angular/core';
import { BaseStyle } from '@bdspark/sparkng/base';

const classes = {
    root: ({ instance }) => [
        'p-tabpanel',
        {
            'p-tabpanel-active': instance.active()
        }
    ]
};

@Injectable()
export class TabPanelStyle extends BaseStyle {
    name = 'tabpanel';

    classes = classes;
}

/**
 *
 * Tab is a helper component for Tabs component.
 *
 * [Live Demo](https://TODO-BDSPARK-DOMAIN/tabs/)
 *
 * @module tabstyle
 *
 */

export enum TabPanelClasses {
    /**
     * Class name of the root element
     */
    root = 'p-tabpanel'
}

export interface TabPanelStyle extends BaseStyle {}
