import { AppCode } from '@/components/doc/app.code';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorToolbarUI, TextEditorContent, TextEditorRoot, TextEditorToolbar } from '@bdspark/sparkng/editor';

@Component({
    selector: 'formats-doc',
    standalone: true,
    imports: [FormsModule, TextEditorRoot, TextEditorToolbar, TextEditorContent, EditorToolbarUI, AppCode, AppDocSectionText],
    template: `
        <app-docsectiontext>
            <p>
                <b>TextEditor</b> provides comprehensive character-level and inline formatting controls including <b>Bold</b>, <i>Italic</i>,
                <u>Underline</u>, <s>Strikethrough</s>, <sub>Subscript</sub>, <sup>Superscript</sup>, <code>Inline Code</code>, Font Family, Font Size, and text/background colors.
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
export class FormatsDoc {
    content = signal(
        '<p>Try out <b>bold</b>, <i>italic</i>, <u>underline</u>, <s>strikethrough</s>, and <code>inline code</code> formatting. Use the font family and font size selectors or color pickers to customize typography.</p>'
    );
}
