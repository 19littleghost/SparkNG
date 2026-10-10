import { AppCode } from '@/components/doc/app.code';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColorPickerModule } from '@bdspark/sparkng/colorpicker';

@Component({
    selector: 'basic-doc',
    standalone: true,
    imports: [CommonModule, FormsModule, ColorPickerModule, AppCode, AppDocSectionText],
    template: `
        <app-docsectiontext>
            <p>ColorPicker is used as a controlled input with <i>ngModel</i> property.</p>
        </app-docsectiontext>
        <div class="card flex justify-center">
            <p-colorpicker [(ngModel)]="color" />
        </div>
        <app-code></app-code>
    `
})
export class BasicDoc {
    color: string | undefined;
}
