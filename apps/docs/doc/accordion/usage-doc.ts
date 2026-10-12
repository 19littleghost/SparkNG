import { AppCode } from '@/components/doc/app.code';
import { Code } from '@/domain/code';
import { Component } from '@angular/core';

@Component({
    selector: 'accordion-usage-doc',
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
        typescript: `import { AccordionModule } from '@bdspark/sparkng/accordion';`
    };

    usageCode: Code = {
        html: `<p-accordion>
    <p-accordion-panel>
        <p-accordion-header></p-accordion-header>
        <p-accordion-content>

        </p-accordion-content>
    </p-accordion-panel>
</p-accordion>`
    };
}
