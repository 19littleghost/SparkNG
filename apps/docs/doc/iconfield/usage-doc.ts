import { AppCode } from '@/components/doc/app.code';
import { Code } from '@/domain/code';
import { Component } from '@angular/core';

@Component({
    selector: 'iconfield-usage-doc',
    standalone: true,
    imports: [AppCode],
    template: `
        <app-code [code]="importCode" [hideToggleCode]="true"></app-code>
        <br />
        <app-code [code]="usageCode" [hideToggleCode]="true"></app-code>
    `
})
export class UsageDoc {
    importCode: Code = {
        typescript: `import { IconFieldModule } from '@bdspark/sparkng/iconfield';
import { InputIconModule } from '@bdspark/sparkng/inputicon';`
    };

    usageCode: Code = {
        html: `<p-iconfield>
    <p-inputicon class="pi pi-search" />
    <!-- input element like InputText, InputNumber, Select, input etc. -->
</p-iconfield>`
    };
}
