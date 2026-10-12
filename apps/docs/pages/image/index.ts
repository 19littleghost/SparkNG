import { AppDoc } from '@/components/doc/app.doc';
import { AccessibilityDoc } from '@/doc/Image/accessibility-doc';
import { BasicDoc } from '@/doc/Image/basic-doc';
import { UsageDoc } from '@/doc/Image/usage-doc';
import { PreviewDoc } from '@/doc/Image/preview-doc';
import { PTComponent } from '@/doc/Image/pt/PTComponent';
import { TemplateDoc } from '@/doc/Image/template-doc';
import { Component } from '@angular/core';

@Component({
    template: `<app-doc docTitle="Angular Image Component - SparkNG" header="Image" description="Displays an image with preview and tranformation options." [docs]="docs" [apiDocs]="['Image']" [ptDocs]="ptComponent" themeDocs="image"></app-doc> `,
    standalone: true,
    imports: [AppDoc]
})
export class ImageDemo {
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
            id: 'preview',
            label: 'Preview',
            component: PreviewDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        }
    ];

    ptComponent = PTComponent;
}
