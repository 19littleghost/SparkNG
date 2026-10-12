import { AppCode } from '@/components/doc/app.code';
import { Code } from '@/domain/code';
import { Component } from '@angular/core';

@Component({
    selector: 'progressbar-usage-doc',
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
        typescript: `import { ProgressBarModule } from '@bdspark/sparkng/progressbar';
// For dynamic progressbar demo
import { ToastModule } from '@bdspark/sparkng/toast';`
    };

    usageCode: Code = {
        html: `<p-progressbar />`
    };
}
