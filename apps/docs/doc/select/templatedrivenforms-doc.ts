import { AppCode } from '@/components/doc/app.code';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from '@bdspark/sparkng/api';
import { ButtonModule } from '@bdspark/sparkng/button';
import { MessageModule } from '@bdspark/sparkng/message';
import { SelectModule } from '@bdspark/sparkng/select';
import { ToastModule } from '@bdspark/sparkng/toast';

interface City {
    name: string;
    code: string;
}

@Component({
    selector: 'templatedrivenforms-doc',
    standalone: true,
    imports: [CommonModule, AppDocSectionText, AppCode, FormsModule, SelectModule, ToastModule, MessageModule, ButtonModule, CommonModule],
    template: `
        <app-docsectiontext> </app-docsectiontext>
        <p-toast />
        <div class="card flex justify-center">
            <form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex flex-col gap-4 w-full sm:w-56">
                <div class="flex flex-col gap-1">
                    <p-select
                        #city="ngModel"
                        [(ngModel)]="selectedCity"
                        [options]="cities"
                        [invalid]="city.invalid && (city.touched || exampleForm.submitted)"
                        optionLabel="name"
                        name="city"
                        placeholder="Select a City"
                        class="w-full md:w-56"
                        required
                    />
                    @if (city.invalid && (city.touched || exampleForm.submitted)) {
                        <p-message severity="error" size="small" variant="simple">City is required.</p-message>
                    }
                </div>
                <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
            </form>
        </div>
        <app-code></app-code>
    `
})
export class TemplateDrivenFormsDoc {
    messageService = inject(MessageService);

    cities: City[] = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    selectedCity: City | undefined;

    onSubmit(form: any) {
        if (form.valid) {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Form Submitted', life: 3000 });
            form.resetForm();
        }
    }
}
