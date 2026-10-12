import { AppDoc } from '@/components/doc/app.doc';
import { AccessibilityDoc } from '@/doc/iconfield/accessibility-doc';
import { BasicDoc } from '@/doc/iconfield/basic-doc';
import { FloatLabelDoc } from '@/doc/iconfield/floatlabel-doc';
import { IftaLabelDoc } from '@/doc/iconfield/iftalabel-doc';
import { UsageDoc } from '@/doc/iconfield/usage-doc';
import { PTComponent } from '@/doc/iconfield/pt/PTComponent';
import { SizesDoc } from '@/doc/iconfield/sizes-doc';
import { TemplateDoc } from '@/doc/iconfield/template-doc';
import { Component } from '@angular/core';

@Component({
    template: ` <app-doc
        docTitle="Angular IconField Component - SparkNG"
        header="IconField"
        description="IconField wraps an input and an icon."
        [docs]="docs"
        [ptDocs]="ptComponent"
        [apiDocs]="['IconField', 'InputIcon']"
        themeDocs="iconfield"
    ></app-doc>`,
    standalone: true,
    imports: [AppDoc]
})
export class IconFieldDemo {
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
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'floatlabel',
            label: 'Float Label',
            component: FloatLabelDoc
        },
        {
            id: 'iftalabel',
            label: 'Ifta Label',
            component: IftaLabelDoc
        },
        {
            id: 'sizes',
            label: 'Sizes',
            component: SizesDoc
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        }
    ];
}
