import { AppDoc } from '@/components/doc/app.doc';
import { AccessibilityDoc } from '@/doc/paginator/accessibility-doc';
import { BasicDoc } from '@/doc/paginator/basic-doc';
import { CurrentPageReportDoc } from '@/doc/paginator/currentpagereport-doc';
import { ImagesDoc } from '@/doc/paginator/images-doc';
import { UsageDoc } from '@/doc/paginator/usage-doc';
import { PTComponent } from '@/doc/paginator/pt/PTComponent';
import { TemplateDoc } from '@/doc/paginator/template-doc';
import { Component } from '@angular/core';

@Component({
    template: `<app-doc
        docTitle="Angular Paginator Component - SparkNG"
        header="Paginator"
        description="Paginator displays data in paged format and provides navigation between pages."
        [docs]="docs"
        [apiDocs]="['Paginator']"
        [ptDocs]="ptComponent"
        themeDocs="paginator"
    ></app-doc>`,
    standalone: true,
    imports: [AppDoc],
    styles: `
        .image-gallery {
            text-align: center;
            padding: 1rem;
        }
    `
})
export class PaginatorDemo {
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
            id: 'current-page-report',
            label: 'Current Page Report',
            component: CurrentPageReportDoc
        },
        {
            id: 'images',
            label: 'Images',
            component: ImagesDoc
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        }
    ];
}
