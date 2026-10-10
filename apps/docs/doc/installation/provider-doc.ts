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
            <p>Add <i>provideOptimus</i> to the list of providers in your <i>app.config.ts</i> and use the <i>theme</i> property to configure a theme such as Aura.</p>
            <app-code [code]="code" [hideToggleCode]="true"></app-code>
        </app-docsectiontext>
    `
})
export class ProviderDoc {
    code: Code = {
        typescript: `import { ApplicationConfig } from '@angular/core';
import { provideOptimus } from '@bdspark/sparkng/config';
import Aura from '@bdspark/sparkng-themes/aura';

export const appConfig: ApplicationConfig = {
    providers: [
        provideOptimus({
            theme: {
                preset: Aura
            }
        })
    ]
};`
    };
}
