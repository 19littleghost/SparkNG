import { AppCode } from '@/components/doc/app.code';
import { Code } from '@/domain/code';
import { Component } from '@angular/core';

@Component({
    selector: 'tabs-usage-doc',
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
        typescript: `import { TabsModule } from '@bdspark/sparkng/tabs';`
    };

    usageCode: Code = {
        html: `<p-tabs>
    <p-tablist>
        <p-tab></p-tab>
    </p-tablist>
    <p-tabpanels>
        <p-tabpanel>
        </p-tabpanel>
    </p-tabpanels>
</p-tabs>`
    };
}
