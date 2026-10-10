import { AppCodeModule } from '@/components/doc/app.code';
import { Code } from '@/domain/code';
import { Component } from '@angular/core';

@Component({
    selector: 'import-doc',
    standalone: true,
    imports: [AppCodeModule],
    template: ` <app-code [code]="code" [hideToggleCode]="true"></app-code> `
})
export class ImportDoc {
    code: Code = {
        typescript: `import { ImageCompareModule } from '@bdspark/sparkng/imagecompare';`
    };
}
