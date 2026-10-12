import { AppCode } from '@/components/doc/app.code';
import { Code } from '@/domain/code';
import { Component } from '@angular/core';

@Component({
    selector: 'floatlabel-usage-doc',
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
        typescript: `import { FloatLabelModule } from '@bdspark/sparkng/floatlabel';`
    };

    usageCode: Code = {
        html: `<p-floatlabel>
    <!-- input element like InputText, InputNumber, Select, Textarea etc. -->
    <!-- label element -->
</p-floatlabel>`
    };
}
