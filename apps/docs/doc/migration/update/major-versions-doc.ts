import { AppCode } from '@/components/doc/app.code';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { AppVersionCompatibility } from '@/components/doc/app.versioncompatibility';
import { Code } from '@/domain/code';
import { Component } from '@angular/core';

@Component({
    selector: 'update-major-versions-doc',
    standalone: true,
    imports: [AppDocSectionText, AppCode, AppVersionCompatibility],
    template: `
        <app-docsectiontext>
            <p>Each SparkNG major targets a single Angular major.</p>
            <app-version-compatibility></app-version-compatibility>
            <p>
                To move to a new major, update Angular first — the <a href="https://angular.dev/update-guide" target="_blank" rel="noopener noreferrer">Angular update guide</a> covers that step — then update SparkNG to the matching major by passing
                the target version. For example, from v1 on Angular v21:
            </p>
            <app-code [code]="code" [hideToggleCode]="true"></app-code>
            <p>Review the release notes of the target version for breaking changes before you start.</p>
        </app-docsectiontext>
    `
})
export class MajorVersionsDoc {
    code: Code = {
        command: `ng update @angular/core@22 @angular/cli@22
ng update @bdspark/sparkng@2`
    };
}
