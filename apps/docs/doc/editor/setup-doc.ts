import { AppCode } from '@/components/doc/app.code';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorToolbarUI, TextEditorContent, TextEditorRoot, TextEditorToolbar } from '@bdspark/sparkng/editor';

@Component({
    selector: 'setup-doc',
    standalone: true,
    imports: [FormsModule, TextEditorRoot, TextEditorToolbar, TextEditorContent, EditorToolbarUI, AppCode, AppDocSectionText],
    template: `
        <app-docsectiontext>
            <p>
                <b>Setup & Quickstart</b>: SparkNG TextEditor can be imported as individual standalone components or as a complete module via <code>TextEditorModule</code>.
            </p>
            <div class="my-3">
                <p><b>1. Standalone Import:</b></p>
                <pre class="bg-surface-50 dark:bg-surface-900 p-3 rounded-md text-sm"><code>import &#123; TextEditorRoot, TextEditorToolbar, TextEditorContent, EditorToolbarUI &#125; from '&#64;bdspark/sparkng/editor';</code></pre>
            </div>
            <div class="my-3">
                <p><b>2. Module Import:</b></p>
                <pre class="bg-surface-50 dark:bg-surface-900 p-3 rounded-md text-sm"><code>import &#123; TextEditorModule &#125; from '&#64;bdspark/sparkng/editor';</code></pre>
            </div>
            <p>
                Styles are automatically injected when importing components, or pre-bundled from <code>&#64;bdspark/sparkng-styles/editor</code>.
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
export class SetupDoc {
    content = signal('<p>TextEditor is ready! Type text or use toolbar controls to format content.</p>');
}
