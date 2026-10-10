import { Injectable } from '@angular/core';
import { BaseStyle } from '@bdspark/sparkng/base';

const classes = {
    root: 'p-steppanels'
};

@Injectable()
export class StepPanelsStyle extends BaseStyle {
    name = 'steppanel';

    classes = classes;
}

/**
 *
 * StepPanel is a helper component for Stepper component.
 *
 * [Live Demo](https://sparkng.bdspark.com/stepper/)
 *
 * @module steppanelsstyle
 *
 */
export enum StepPanelsClasses {
    /**
     * Class name of the root element
     */
    root = 'p-steppanels'
}

export interface StepPanelsStyle extends BaseStyle {}
