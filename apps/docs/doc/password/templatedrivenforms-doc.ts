import { AppCode } from '@/components/doc/app.code';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from '@bdspark/sparkng/api';
import { ButtonModule } from '@bdspark/sparkng/button';
import { MessageModule } from '@bdspark/sparkng/message';
import { PasswordModule } from '@bdspark/sparkng/password';
import { ToastModule } from '@bdspark/sparkng/toast';

@Component({
    selector: 'templatedrivenforms-doc',
    standalone: true,
    imports: [FormsModule, PasswordModule, ButtonModule, ToastModule, MessageModule, AppCode, AppDocSectionText],
    providers: [MessageService],
    template: `
        <app-docsectiontext> </app-docsectiontext>
        <p-toast />
        <div class="card flex justify-center">
            <form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex justify-center flex-col gap-4 md:w-56">
                <div class="flex flex-col gap-1">
                    <p-password #model="ngModel" [(ngModel)]="value" [invalid]="model.invalid && (model.touched || exampleForm.submitted)" name="password" [feedback]="false" autocomplete="off" required fluid />

                    @if (model.invalid && (model.touched || exampleForm.submitted)) {
                        <p-message severity="error" size="small" variant="simple">Password is required.</p-message>
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

    value: any;

    onSubmit(form: any) {
        if (form.valid) {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Form Submitted', life: 3000 });
            form.resetForm();
        }
    }
}
