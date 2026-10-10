import { AppCodeModule } from '@/components/doc/app.code';
import { Code } from '@/domain/code';
import { Component } from '@angular/core';

@Component({
    selector: 'import-doc',
    standalone: true,
    imports: [AppCodeModule],
    template: ` <app-code [hideToggleCode]="true" [hideStackBlitz]="true" [hideCodeSandbox]="true" [code]="code"></app-code> `
})
export class ImportDoc {
    value1: string;

    code: Code = {
        typescript: `import { InputTextModule } from '@bdspark/sparkng/inputtext';`
    };
}
