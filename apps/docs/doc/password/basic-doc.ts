import { AppCode } from '@/components/doc/app.code';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from '@bdspark/sparkng/password';

@Component({
    selector: 'basic-doc',
    standalone: true,
    imports: [FormsModule, PasswordModule, AppCode, AppDocSectionText],
    template: `
        <app-docsectiontext>
            <p>Two-way value binding is defined using <i>ngModel</i>.</p>
        </app-docsectiontext>
        <div class="card flex justify-center">
            <p-password [(ngModel)]="value" [feedback]="false" autocomplete="off" />
        </div>
        <app-code></app-code>
    `
})
export class BasicDoc {
    value!: string;
}
