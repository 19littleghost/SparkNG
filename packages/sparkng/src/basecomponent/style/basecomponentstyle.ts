import { Injectable } from '@angular/core';
import { BaseStyle } from '@bdspark/sparkng/base';

@Injectable({ providedIn: 'root' })
export class BaseComponentStyle extends BaseStyle {
    name = 'common';
}
