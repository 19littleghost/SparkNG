import { AppCode } from '@/components/doc/app.code';
import { Code } from '@/domain/code';
import { Component } from '@angular/core';

@Component({
    selector: 'animateonscroll-usage-doc',
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
        typescript: `import { AnimateOnScrollModule } from '@bdspark/sparkng/animateonscroll';`
    };

    usageCode: Code = {
        html: `<div pAnimateOnScroll enterClass="animate-enter fade-in-10 animate-duration-1000"></div>`
    };
}
