import { AppCode } from '@/components/doc/app.code';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { Code } from '@/domain/code';
import { Component } from '@angular/core';

@Component({
    selector: 'repository-doc',
    standalone: true,
    imports: [AppDocSectionText, AppCode],
    template: `
        <app-docsectiontext>
            <p>
                Ready to use settings for locales are available as the <i>&#64;openng/sparkng-locale</i> package, maintained in the
                <a href="https://github.com/openng-org/sparkng/tree/main/packages/sparkng-locale" target="_blank" rel="noopener noreferrer">Optimus UI</a> repository. We'd appreciate if you could contribute translations to the repository and
                share them with the rest of the community.
            </p>
            <app-code [code]="code" [hideToggleCode]="true"></app-code>
        </app-docsectiontext>
    `
})
export class RepositoryDoc {
    code: Code = {
        typescript: `import { de } from '@bdspark/sparkng-locale/js/de.js';

provideOptimus({
    translation: de
})`
    };
}
