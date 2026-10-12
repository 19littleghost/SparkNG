import { AppCode } from '@/components/doc/app.code';
import { Code } from '@/domain/code';
import { Component } from '@angular/core';

@Component({
    selector: 'stepper-usage-doc',
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
        typescript: `import { StepperModule } from '@bdspark/sparkng/stepper';`
    };

    usageCode: Code = {
        html: `<p-stepper>
    <p-step-list>
        <p-step></p-step>
    </p-step-list>
    <p-step-panels>
        <p-step-panel>
        </p-step-panel>
    </p-step-panels>
</p-stepper>`
    };
}
