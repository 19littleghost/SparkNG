import { AppCode } from '@/components/doc/app.code';
import { Code } from '@/domain/code';
import { Component } from '@angular/core';

@Component({
    selector: 'editor-usage-doc',
    standalone: true,
    imports: [AppCode],
    template: `
        <h3>Compound TextEditor (Recommended)</h3>
        <app-code [code]="compoundImportCode" [hideToggleCode]="true"></app-code>
        <br />
        <app-code [code]="compoundUsageCode" [hideToggleCode]="true"></app-code>
        <br />
        <h3>Classic Editor</h3>
        <app-code [code]="classicImportCode" [hideToggleCode]="true"></app-code>
        <br />
        <app-code [code]="classicUsageCode" [hideToggleCode]="true"></app-code>
    `
})
export class UsageDoc {
    compoundImportCode: Code = {
        typescript: `import { EditorModule, EditorUIModule } from '@bdspark/sparkng/editor';

// Or standalone part imports:
// import { TextEditorRoot, TextEditorToolbar, TextEditorContent, EditorToolbarUI } from '@bdspark/sparkng/editor';`
    };

    compoundUsageCode: Code = {
        html: `<p-text-editor-root [(value)]="content">
    <p-text-editor-toolbar>
        <p-editor-toolbar-ui />
    </p-text-editor-toolbar>
    <p-text-editor-content />
</p-text-editor-root>`
    };

    classicImportCode: Code = {
        typescript: `import { EditorModule } from '@bdspark/sparkng/editor';`
    };

    classicUsageCode: Code = {
        html: `<p-editor [(ngModel)]="text" [style]="{ height: '320px' }" />`
    };
}
