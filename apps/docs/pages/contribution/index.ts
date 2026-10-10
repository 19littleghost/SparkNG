import { AppDoc } from '@/components/doc/app.doc';
import { BenefitsDoc } from '@/doc/contribution/benefits-doc';
import { HelpNeededDoc } from '@/doc/contribution/helpneeded-doc';
import { IntroductionDoc } from '@/doc/contribution/introduction-doc';
import { PathwayDoc } from '@/doc/contribution/pathway-doc';
import { Component } from '@angular/core';

@Component({
    standalone: true,
    imports: [AppDoc],
    template: ` <app-doc docTitle="Contribution - SparkNG" header="Contribution Guide" description="Welcome to the SparkNG Contribution Guide and thank you for considering contributing." [docs]="docs"></app-doc> `
})
export class ContributionDemo {
    docs = [
        {
            id: 'introduction',
            label: 'Introduction',
            component: IntroductionDoc
        },
        {
            id: 'helpneeded',
            label: 'Help Needed',
            component: HelpNeededDoc
        },
        {
            id: 'pathway',
            label: 'Pathway',
            component: PathwayDoc
        },
        {
            id: 'benefits',
            label: 'Benefits',
            component: BenefitsDoc
        }
    ];
}
