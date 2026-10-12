import { AppCode } from '@/components/doc/app.code';
import { Code } from '@/domain/code';
import { Component } from '@angular/core';

@Component({
    selector: 'inputgroup-usage-doc',
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
        typescript: `import { InputGroupModule } from '@bdspark/sparkng/inputgroup';
import { InputGroupAddonModule } from '@bdspark/sparkng/inputgroupaddon';`
    };

    usageCode: Code = {
        html: `<p-inputgroup>
    <p-inputgroup-addon></p-inputgroup-addon>
</p-inputgroup>`
    };
}
