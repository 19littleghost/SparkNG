import { AppCode } from '@/components/doc/app.code';
import { Code } from '@/domain/code';
import { Component } from '@angular/core';

@Component({
    selector: 'iftalabel-usage-doc',
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
        typescript: `import { IftaLabelModule } from '@bdspark/sparkng/iftalabel';`
    };

    usageCode: Code = {
        html: `<p-iftalabel>
    <!-- input element like InputText, InputNumber, Select, Textarea etc. -->
    <!-- label element -->
</p-iftalabel>`
    };
}
