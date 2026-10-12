import { AppCode } from '@/components/doc/app.code';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorToolbarUI, TextEditorContent, TextEditorRoot, TextEditorToolbar } from '@bdspark/sparkng/editor';

@Component({
    selector: 'markdown-doc',
    standalone: true,
    imports: [FormsModule, TextEditorRoot, TextEditorToolbar, TextEditorContent, EditorToolbarUI, AppCode, AppDocSectionText],
    template: `
        <app-docsectiontext>
            <p>With <code>[markdown]="true"</code> (enabled by default), typing markdown shortcuts converts in real time:</p>
            <ul>
                <li><code># </code>, <code>## </code>, <code>### </code> &rarr; Headings</li>
                <li><code>- </code>, <code>* </code> &rarr; Bullet List</li>
                <li><code>1. </code> &rarr; Numbered List</li>
                <li><code>&gt; </code> &rarr; Blockquote</li>
                <li><code>---</code> &rarr; Divider</li>
                <li><code>[] </code> &rarr; Checklist</li>
            </ul>
        </app-docsectiontext>
        <div class="card">
            <p-text-editor-root [(value)]="content" [markdown]="true">
                <p-text-editor-toolbar>
                    <p-editor-toolbar-ui />
                </p-text-editor-toolbar>
                <p-text-editor-content />
            </p-text-editor-root>
        </div>
        <app-code></app-code>
    `
})
export class MarkdownDoc {
    content = signal('<p>Try creating a new line and typing <code># Heading</code> or <code>- Bullet point</code> to see real-time markdown rules in action!</p>');
}
