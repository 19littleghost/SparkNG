import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { Component } from '@angular/core';
import { ButtonModule } from '@bdspark/sparkng/button';

@Component({
    selector: 'llmsfulltxt-doc',
    standalone: true,
    imports: [AppDocSectionText, ButtonModule],
    template: `
        <app-docsectiontext>
            <p>The <code>llms-full.txt</code> file is a complete list of all the pages in the Optimus UI documentation. It is used to help AI models understand the entire documentation set.</p>
            <a href="/llms/llms-full.txt" target="_blank">
                <p-button label="Open llms-full.txt" />
            </a>
        </app-docsectiontext>
    `
})
export class LlmsFullTxtDoc {}
