import { AppCode } from '@/components/doc/app.code';
import { Code } from '@/domain/code';
import { Component } from '@angular/core';

@Component({
    selector: 'carousel-usage-doc',
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
        typescript: `import { CarouselModule } from '@bdspark/sparkng/carousel';`
    };

    usageCode: Code = {
        html: `<p-carousel align="center">
    <p-carousel-content>
        <p-carousel-item>Item 1</p-carousel-item>
        <p-carousel-item>Item 2</p-carousel-item>
    </p-carousel-content>
    <p-carousel-indicators></p-carousel-indicators>
</p-carousel>`
    };
}
