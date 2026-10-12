import { AppDoc } from '@/components/doc/app.doc';
import { AccessibilityDoc } from '@/doc/ripple/accessibility-doc';
import { CustomDoc } from '@/doc/ripple/custom-doc';
import { DefaultDoc } from '@/doc/ripple/default-doc';
import { UsageDoc } from '@/doc/ripple/usage-doc';
import { Component } from '@angular/core';
@Component({
    template: `<app-doc docTitle="Angular Ripple Component - SparkNG" header="Ripple" description="Ripple directive adds ripple effect to the host element." [docs]="docs" themeDocs="ripple"></app-doc>`,
    standalone: true,
    imports: [AppDoc],
    styleUrl: './rippledemo.scss'
})
export class RippleDemo {
    docs = [
        {
            id: 'usage',
            label: 'Usage',
            component: UsageDoc
        },
        {
            id: 'default',
            label: 'Default',
            component: DefaultDoc
        },
        {
            id: 'custom',
            label: 'Custom',
            component: CustomDoc
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        }
    ];
}
