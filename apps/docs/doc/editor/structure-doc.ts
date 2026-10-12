import { AppCode } from '@/components/doc/app.code';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorToolbarUI, TextEditorContent, TextEditorRoot, TextEditorToolbar } from '@bdspark/sparkng/editor';

@Component({
    selector: 'structure-doc',
    standalone: true,
    imports: [FormsModule, TextEditorRoot, TextEditorToolbar, TextEditorContent, EditorToolbarUI, AppCode, AppDocSectionText],
    template: `
        <app-docsectiontext>
            <p>
                Document structure primitives encompass structural hierarchy: <b>Headings (H1–H6)</b>, <b>Blockquotes</b>, <b>Bullet & Numbered Lists</b>,
                <b>Checklists (Task Lists)</b>, <b>Code Blocks</b>, <b>Dividers (Horizontal Rules)</b>, and <b>Text Alignment</b>.
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
export class StructureDoc {
    content = signal(`
        <h1>Project Overview</h1>
        <p>This section outlines the architectural goals and key structural blocks.</p>
        <blockquote>"Good design is obvious. Great design is transparent." — Joe Sparano</blockquote>
        <ul class="p-text-editor-task-list" data-p-checked-list="true">
            <li data-p-checked="false"><label><input type="checkbox"/> Design token mapping</label></li>
            <li data-p-checked="false"><label><input type="checkbox"/> Compound slots integration</label></li>
        </ul>
        <hr/>
        <pre><code class="language-typescript">// Modular command execution
root.commands.heading(1);</code></pre>
    `);
}
