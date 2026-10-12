import { AppCode } from '@/components/doc/app.code';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorToolbarUI, TextEditorContent, TextEditorRoot, TextEditorTableControls, TextEditorToolbar } from '@bdspark/sparkng/editor';

@Component({
    selector: 'content-doc',
    standalone: true,
    imports: [FormsModule, TextEditorRoot, TextEditorToolbar, TextEditorContent, TextEditorTableControls, EditorToolbarUI, AppCode, AppDocSectionText],
    template: `
        <app-docsectiontext>
            <p>
                <b>Rich Content</b> features include dynamic <b>Tables</b> with contextual row/column controls, <b>Hyperlinks</b>, <b>Document</b> attachment cards, and <b>Images</b>.
                Click inside any table cell to trigger floating table manipulation controls.
            </p>
        </app-docsectiontext>
        <div class="card">
            <p-text-editor-root [(value)]="content">
                <p-text-editor-toolbar>
                    <p-editor-toolbar-ui />
                </p-text-editor-toolbar>
                <p-text-editor-content />
                <p-text-editor-table-controls />
            </p-text-editor-root>
        </div>
        <app-code></app-code>
    `
})
export class ContentDoc {
    content = signal(`
        <p>Interactive table with editable cells and contextual controls:</p>
        <table class="p-text-editor-table">
            <thead>
                <tr><th>Feature</th><th>Status</th><th>Notes</th></tr>
            </thead>
            <tbody>
                <tr><td>Tables</td><td>Ready</td><td>Row & column triggers</td></tr>
                <tr><td>Documents</td><td>Ready</td><td>Download link badge</td></tr>
            </tbody>
        </table>
        <p><a href="https://sparkng.bdspark.com" target="_blank">SparkNG Official Website</a></p>
        <p><a href="#download" class="p-text-editor-doc-link">📄 Release_Notes_v22.pdf</a></p>
    `);
}
