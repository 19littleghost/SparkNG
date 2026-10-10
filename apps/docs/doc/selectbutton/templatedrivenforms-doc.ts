import { AppCode } from '@/components/doc/app.code';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from '@bdspark/sparkng/api';
import { ButtonModule } from '@bdspark/sparkng/button';
import { MessageModule } from '@bdspark/sparkng/message';
import { SelectButton } from '@bdspark/sparkng/selectbutton';
import { ToastModule } from '@bdspark/sparkng/toast';

@Component({
    selector: 'templatedrivenforms-doc',
    standalone: true,
    imports: [FormsModule, SelectButton, ToastModule, ButtonModule, MessageModule, AppDocSectionText, AppCode, CommonModule],
    template: `
        <app-docsectiontext> </app-docsectiontext>
        <p-toast />
        <div class="card flex justify-center">
            <form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex justify-center flex-col gap-4">
                <div class="flex flex-col gap-1">
                    <p-selectbutton #model="ngModel" [(ngModel)]="value" [options]="stateOptions" optionLabel="label" optionValue="value" [invalid]="model.invalid && (model.touched || exampleForm.submitted)" required name="value" />
                    @if (model.invalid && (model.touched || exampleForm.submitted)) {
                        <p-message severity="error" size="small" variant="simple">Selection is required.</p-message>
                    }
                </div>
                <button pButton type="submit"><span pButtonLabel>Submit</span></button>
            </form>
        </div>
        <app-code></app-code>
    `
})
export class TemplateDrivenFormsDoc {
    messageService = inject(MessageService);

    value: any;

    stateOptions: any[] = [
        { label: 'One-Way', value: 'one-way' },
        { label: 'Return', value: 'return' }
    ];

    onSubmit(form: any) {
        if (form.valid) {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Form Submitted', life: 3000 });
            form.resetForm();
        }
    }
}
