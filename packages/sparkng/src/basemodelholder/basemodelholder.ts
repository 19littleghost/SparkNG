import { computed, Directive, signal } from '@angular/core';
import { isNotEmpty } from '@bdspark/sparkng-utils';
import { BaseComponent } from '@bdspark/sparkng/basecomponent';

@Directive({ standalone: true })
export class BaseModelHolder<PT = any> extends BaseComponent<PT> {
    modelValue = signal<string | string[] | any | undefined>(undefined);

    $filled = computed(() => isNotEmpty(this.modelValue()));

    writeModelValue(value: any) {
        this.modelValue.set(value);
    }
}
