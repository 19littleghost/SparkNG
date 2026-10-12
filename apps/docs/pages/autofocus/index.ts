import { AppDoc } from '@/components/doc/app.doc';
import { BasicDoc } from '@/doc/autofocus/basic-doc';
import { UsageDoc } from '@/doc/autofocus/usage-doc';
import { Component } from '@angular/core';

@Component({
    standalone: true,
    imports: [AppDoc],
    template: ` <app-doc docTitle="Angular AutoFocus Directive - SparkNG" header="AutoFocus" description="AutoFocus manages focus on focusable element on load." [docs]="docs" [apiDocs]="['AutoFocus']"></app-doc>`
})
export class AutoFocusDemo {
    docs = [
        {
            id: 'usage',
            label: 'Usage',
            component: UsageDoc
        },
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDoc
        }
    ];
}
