import { AppCode } from '@/components/doc/app.code';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from '@bdspark/sparkng/api';
import { ButtonModule } from '@bdspark/sparkng/button';
import { MessageModule } from '@bdspark/sparkng/message';
import { ToastModule } from '@bdspark/sparkng/toast';
import { ToggleSwitchModule } from '@bdspark/sparkng/toggleswitch';

@Component({
    selector: 'templatedrivenforms-doc',
    standalone: true,
    imports: [CommonModule, FormsModule, ToggleSwitchModule, ToastModule, MessageModule, ButtonModule, AppCode, AppDocSectionText],
    template: `
        <app-docsectiontext> </app-docsectiontext>
        <p-toast />
        <div class="card flex justify-center">
            <form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex flex-col gap-4 w-48">
                <div class="flex flex-col items-center gap-2">
                    <p-toggleswitch #model="ngModel" [(ngModel)]="checked" name="activation" [invalid]="model.invalid && exampleForm.submitted" required />
                    @if (model.invalid && exampleForm.submitted) {
                        <p-message severity="error" size="small" variant="simple">Activation is required.</p-message>
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

    checked: boolean;

    onSubmit(form: any) {
        if (form.valid) {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Form Submitted', life: 3000 });
            form.resetForm();
        }
    }
}
