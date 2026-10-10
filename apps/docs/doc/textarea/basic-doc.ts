import { AppCode } from '@/components/doc/app.code';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextareaModule } from '@bdspark/sparkng/textarea';

@Component({
    selector: 'basic-doc',
    standalone: true,
    imports: [FormsModule, AppCode, AppDocSectionText, TextareaModule],
    template: `
        <app-docsectiontext>
            <p>Textarea is applied to an input field with <i>pTextarea</i> directive.</p>
        </app-docsectiontext>
        <div class="card flex justify-center">
            <textarea rows="5" cols="30" pTextarea [(ngModel)]="value"></textarea>
        </div>
        <app-code></app-code>
    `
})
export class BasicDoc {
    value!: string;
}
