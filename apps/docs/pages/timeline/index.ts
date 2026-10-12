import { AppDoc } from '@/components/doc/app.doc';
import { AccessibilityDoc } from '@/doc/timeline/accessibility-doc';
import { AlignmentDoc } from '@/doc/timeline/alignment-doc';
import { BasicDoc } from '@/doc/timeline/basic-doc';
import { HorizontalDoc } from '@/doc/timeline/horizontal-doc';
import { UsageDoc } from '@/doc/timeline/usage-doc';
import { OppositeDoc } from '@/doc/timeline/opposite-doc';
import { PTComponent } from '@/doc/timeline/pt/PTComponent';
import { TemplateDoc } from '@/doc/timeline/template-doc';
import { Component } from '@angular/core';

@Component({
    template: `<app-doc docTitle="Angular Timeline Component - SparkNG" header="Timeline" description="Timeline visualizes a series of chained events." [docs]="docs" [apiDocs]="['Timeline']" [ptDocs]="ptComponent" themeDocs="timeline"></app-doc>`,
    standalone: true,
    imports: [AppDoc],
    styleUrl: './timelinedemo.scss'
})
export class TimelineDemo {
    ptComponent = PTComponent;

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
        },
        {
            id: 'alignment',
            label: 'Alignment',
            component: AlignmentDoc
        },
        {
            id: 'opposite',
            label: 'Opposite',
            component: OppositeDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'horizontal',
            label: 'Horizontal',
            component: HorizontalDoc
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        }
    ];
}
