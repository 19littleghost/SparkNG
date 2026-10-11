import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { Component } from '@angular/core';

@Component({
    selector: 'prerequisites-doc',
    standalone: true,
    imports: [AppDocSectionText],
    template: `
        <app-docsectiontext>
            <p>SparkNG targets Angular v22 and newer. Any workspace created with the Angular CLI works, standalone or NgModule based.</p>
            <ul class="leading-relaxed">
                <li>Angular v22 or newer, including <i>&#64;angular/cdk</i>, <i>&#64;angular/forms</i> and <i>&#64;angular/router</i></li>
                <li>RxJS v7.8.1 or newer</li>
                <li>A package manager of your choice — npm, yarn or pnpm</li>
            </ul>
            <p>
                Already using PrimeNG? Do not follow this page. The <a href="https://sparkng.bdspark.com/migration/primeng" target="_blank" rel="noopener noreferrer" class="doc-link">migration guide</a> covers moving an existing PrimeNG v22 workspace
                across with the <i>migrate-from-primeng</i> schematic, which is a separate command from the <i>ng add</i> below.
            </p>
        </app-docsectiontext>
    `
})
export class PrerequisitesDoc {}
