import { AppDoc } from '@/components/doc/app.doc';
import { AccessibilityDoc } from '@/doc/inputotp/accessibility-doc';
import { BasicDoc } from '@/doc/inputotp/basic-doc';
import { UsageDoc } from '@/doc/inputotp/usage-doc';
import { IntegerOnlyDoc } from '@/doc/inputotp/integeronly-doc';
import { MaskDoc } from '@/doc/inputotp/mask-doc';
import { PTComponent } from '@/doc/inputotp/pt/PTComponent';
import { ReactiveFormsDoc } from '@/doc/inputotp/reactiveforms-doc';
import { SampleDoc } from '@/doc/inputotp/sample-doc';
import { SizesDoc } from '@/doc/inputotp/sizes-doc';
import { TemplateDoc } from '@/doc/inputotp/template-doc';
import { TemplateDrivenFormsDoc } from '@/doc/inputotp/templatedrivenforms-doc';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    standalone: true,
    imports: [AppDoc],
    template: ` <app-doc docTitle="Angular Otp Input Component - SparkNG" header="InputOtp" description="Input Otp is used to enter one time passwords." [docs]="docs" [ptDocs]="ptComponent" [apiDocs]="['InputOtp']" themeDocs="inputotp"></app-doc> `,
    encapsulation: ViewEncapsulation.None
})
export class InputOtpDemo {
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
            id: 'mask',
            label: 'Mask',
            component: MaskDoc
        },
        {
            id: 'integeronly',
            label: 'Integer Only',
            component: IntegerOnlyDoc
        },
        {
            id: 'sizes',
            label: 'Sizes',
            component: SizesDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
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
            id: 'sample',
            label: 'Sample',
            component: SampleDoc
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        }
    ];
}
