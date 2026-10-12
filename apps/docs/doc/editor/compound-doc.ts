import { AppCode } from '@/components/doc/app.code';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextEditorContent, TextEditorRoot, TextEditorToolbar, EditorToolbarUI } from '@bdspark/sparkng/editor';

@Component({
    selector: 'compound-doc',
    standalone: true,
    imports: [FormsModule, TextEditorRoot, TextEditorToolbar, TextEditorContent, EditorToolbarUI, AppCode, AppDocSectionText],
    template: `
        <app-docsectiontext>
            <p>
                The compound <b>TextEditor</b> architecture separates document state from the visual interface. <code>p-text-editor-root</code> acts as the headless container, while <code>p-text-editor-toolbar</code> and
                <code>p-text-editor-content</code> host the toolbar and editable document area.
            </p>
        </app-docsectiontext>
        <div class="card">
            <p-text-editor-root [(value)]="content">
                <p-text-editor-toolbar>
                    <p-editor-toolbar-ui />
                </p-text-editor-toolbar>
                <p-text-editor-content />
            </p-text-editor-root>
        </div>
        <app-code></app-code>
    `
})
export class CompoundDoc {
    content = signal('<h2>Welcome to Modern TextEditor</h2><p>This editor features <b>compound components</b>, Angular Signals, and full styling customization.</p>');
}
