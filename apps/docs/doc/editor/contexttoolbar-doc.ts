import { AppCode } from '@/components/doc/app.code';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorContextToolbarUI, EditorToolbarUI, TextEditorContent, TextEditorContextToolbar, TextEditorRoot, TextEditorToolbar } from '@bdspark/sparkng/editor';

@Component({
    selector: 'contexttoolbar-doc',
    standalone: true,
    imports: [FormsModule, TextEditorRoot, TextEditorToolbar, TextEditorContent, TextEditorContextToolbar, EditorToolbarUI, EditorContextToolbarUI, AppCode, AppDocSectionText],
    template: `
        <app-docsectiontext>
            <p>The <b>Context Toolbar</b> (<code>p-text-editor-context-toolbar</code>) provides a floating, selection-anchored toolbar that appears directly over selected text for fast inline formatting.</p>
        </app-docsectiontext>
        <div class="card">
            <p-text-editor-root [(value)]="content">
                <p-text-editor-toolbar>
                    <p-editor-toolbar-ui />
                </p-text-editor-toolbar>
                <p-text-editor-content />
                <p-text-editor-context-toolbar>
                    <p-editor-context-toolbar-ui />
                </p-text-editor-context-toolbar>
            </p-text-editor-root>
        </div>
        <app-code></app-code>
    `
})
export class ContextToolbarDoc {
    content = signal('<p>Select any portion of this text to trigger the floating <b>Context Toolbar</b> right above your selection.</p>');
}
