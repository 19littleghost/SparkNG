import { AppCode } from '@/components/doc/app.code';
import { Code } from '@/domain/code';
import { Component } from '@angular/core';

@Component({
    selector: 'toolbar-usage-doc',
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
        typescript: `import { ToolbarModule } from '@bdspark/sparkng/toolbar';`
    };

    usageCode: Code = {
        html: `<p-toolbar>
    <ng-template #start></ng-template>
    <ng-template #center></ng-template>
    <ng-template #end></ng-template>
</p-toolbar>`
    };
}
