import { AppCode } from '@/components/doc/app.code';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from '@bdspark/sparkng/selectbutton';

@Component({
    selector: 'basic-doc',
    standalone: true,
    imports: [FormsModule, SelectButtonModule, AppDocSectionText, AppCode],
    template: `
        <app-docsectiontext>
            <p>SelectButton requires a value to bind and a collection of options.</p>
        </app-docsectiontext>
        <div class="card flex justify-center">
            <p-selectbutton [options]="stateOptions" [(ngModel)]="value" optionLabel="label" optionValue="value" aria-labelledby="basic" />
        </div>
        <app-code></app-code>
    `
})
export class BasicDoc {
    stateOptions: any[] = [
        { label: 'One-Way', value: 'one-way' },
        { label: 'Return', value: 'return' }
    ];

    value: string = 'one-way';
}
