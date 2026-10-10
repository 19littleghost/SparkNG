import { AppCode } from '@/components/doc/app.code';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { Code } from '@/domain/code';
import { Component } from '@angular/core';

@Component({
    selector: 'provider-doc',
    standalone: true,
    imports: [AppDocSectionText, AppCode],
    template: `
        <app-docsectiontext>
            <p>The initial configuration is defined by the <i>provideOptimus</i> provider during application startup.</p>
        </app-docsectiontext>
        <app-code [code]="code" [hideToggleCode]="true"></app-code>
    `
})
export class ProviderDoc {
    code: Code = {
        typescript: `import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideOptimus } from '@bdspark/sparkng/config';

export const appConfig: ApplicationConfig = {
    providers: [
        provideAnimationsAsync(),
        provideOptimus({ /* options */ })
    ]
};`
    };
}
