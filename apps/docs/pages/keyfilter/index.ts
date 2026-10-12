import { AppDoc } from '@/components/doc/app.doc';
import { AccessibilityDoc } from '@/doc/keyfilter/accessibility-doc';
import { UsageDoc } from '@/doc/keyfilter/usage-doc';
import { PresetsDoc } from '@/doc/keyfilter/presets-doc';
import { RegexDoc } from '@/doc/keyfilter/regex-doc';
import { Component } from '@angular/core';

@Component({
    template: `<app-doc
        docTitle="Angular KeyFilter Component - SparkNG"
        header="KeyFilter"
        description="KeyFilter is a directive to restrict individual key strokes. In order to restrict the whole input, use InputNumber or InputMask instead."
        [docs]="docs"
        [apiDocs]="['KeyFilter']"
    ></app-doc>`,
    standalone: true,
    imports: [AppDoc]
})
export class KeyFilterDemo {
    docs = [
        {
            id: 'usage',
            label: 'Usage',
            component: UsageDoc
        },
        {
            id: 'presets',
            label: 'Presets',
            component: PresetsDoc
        },
        {
            id: 'regex',
            label: 'Regex',
            component: RegexDoc
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        }
    ];
}
