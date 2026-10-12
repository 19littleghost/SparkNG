import { AppDoc } from '@/components/doc/app.doc';
import { AccessibilityDoc } from '@/doc/toggleswitch/accessibility-doc';
import { BasicDoc } from '@/doc/toggleswitch/basic-doc';
import { DisabledDoc } from '@/doc/toggleswitch/disabled-doc';
import { UsageDoc } from '@/doc/toggleswitch/usage-doc';
import { InvalidDoc } from '@/doc/toggleswitch/invalid-doc';
import { PreselectionDoc } from '@/doc/toggleswitch/preselection-doc';
import { PTComponent } from '@/doc/toggleswitch/pt/PTComponent';
import { ReactiveFormsDoc } from '@/doc/toggleswitch/reactiveforms-doc';
import { TemplateDoc } from '@/doc/toggleswitch/template-doc';
import { TemplateDrivenFormsDoc } from '@/doc/toggleswitch/templatedrivenforms-doc';
import { Component } from '@angular/core';

@Component({
    template: `<app-doc
        docTitle="Angular ToggleSwitch Component - SparkNG"
        header="ToggleSwitch"
        description="ToggleSwitch is used to select a boolean value."
        [docs]="docs"
        [apiDocs]="['ToggleSwitch']"
        [ptDocs]="ptComponent"
        themeDocs="toggleswitch"
    ></app-doc>`,
    standalone: true,
    imports: [AppDoc]
})
export class ToggleSwitchDemo {
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
            id: 'preselection',
            label: 'Preselection',
            component: PreselectionDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'disabled',
            label: 'Disabled',
            component: DisabledDoc
        },
        {
            id: 'invalid',
            label: 'Invalid',
            component: InvalidDoc
        },
        {
            id: 'forms',
            label: 'Forms',
            children: [
                { id: 'templatedriven', label: 'Template Driven', component: TemplateDrivenFormsDoc },
                { id: 'reactive', label: 'Reactive Forms', component: ReactiveFormsDoc }
            ]
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        }
    ];
}
