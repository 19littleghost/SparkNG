import { AppCodeModule } from '@/components/doc/app.code';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { Component } from '@angular/core';
import { InputGroupModule } from '@bdspark/sparkng/inputgroup';
import { InputGroupAddonModule } from '@bdspark/sparkng/inputgroupaddon';
import { InputTextModule } from '@bdspark/sparkng/inputtext';

@Component({
    selector: 'multiple-doc',
    standalone: true,
    imports: [AppDocSectionText, AppCodeModule, InputGroupModule, InputGroupAddonModule, InputTextModule],
    template: `
        <app-docsectiontext>
            <p>Multiple add-ons can be placed inside the same group.</p>
        </app-docsectiontext>
        <div class="card flex justify-center">
            <p-inputgroup class="w-full md:!w-[30rem]">
                <p-inputgroup-addon>
                    <i class="pi pi-clock"></i>
                </p-inputgroup-addon>
                <p-inputgroup-addon>
                    <i class="pi pi-star-fill"></i>
                </p-inputgroup-addon>
                <input type="text" pInputText placeholder="Price" />
                <p-inputgroup-addon>$</p-inputgroup-addon>
                <p-inputgroup-addon>.00</p-inputgroup-addon>
            </p-inputgroup>
        </div>
        <app-code></app-code>
    `
})
export class MultipleDoc {}
