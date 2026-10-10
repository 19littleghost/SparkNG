import { AppCode } from '@/components/doc/app.code';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { Code } from '@/domain/code';
import { Component } from '@angular/core';

@Component({
    selector: 'dynamic-doc',
    standalone: true,
    imports: [AppDocSectionText, AppCode],
    template: `
        <app-docsectiontext>
            <p>Inject the <i>Spark</i> to your application to update the initial configuration at runtime.</p>
        </app-docsectiontext>
        <app-code [code]="code" [hideToggleCode]="true"></app-code>
    `
})
export class DynamicDoc {
    code: Code = {
        typescript: `import { Component, OnInit } from '@angular/core';
import { Spark } from '@bdspark/sparkng/config';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(private config: Spark) {}

    ngOnInit() {
        this.config.ripple.set(true);
    }
}`
    };
}
