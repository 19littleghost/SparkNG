import { AppDoc } from '@/components/doc/app.doc';
import { AccessibilityDoc } from '@/doc/dock/accessibility-doc';
import { AdvancedDoc } from '@/doc/dock/advanced-doc';
import { BasicDoc } from '@/doc/dock/basic-doc';
import { UsageDoc } from '@/doc/dock/usage-doc';
import { PTComponent } from '@/doc/dock/pt/PTComponent';
import { Component } from '@angular/core';

@Component({
    standalone: true,
    imports: [AppDoc],
    template: `
        <app-doc docTitle="Angular Dock Component - SparkNG" header="Dock" description="Dock is a navigation component consisting of menuitems." [docs]="docs" [apiDocs]="['Dock', 'MenuItem']" [ptDocs]="ptComponent" themeDocs="dock"></app-doc>
    `
})
export class DockDemo {
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
            id: 'advanced',
            label: 'Advanced',
            component: AdvancedDoc
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        }
    ];

    ptComponent = PTComponent;
}
