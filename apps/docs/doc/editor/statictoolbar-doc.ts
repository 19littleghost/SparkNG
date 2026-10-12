import { AppCode } from '@/components/doc/app.code';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorToolbarUI, TextEditorContent, TextEditorRoot, TextEditorToolbar } from '@bdspark/sparkng/editor';

@Component({
    selector: 'static-toolbar-doc',
    standalone: true,
    imports: [FormsModule, TextEditorRoot, TextEditorToolbar, TextEditorContent, EditorToolbarUI, AppCode, AppDocSectionText],
    template: `
        <app-docsectiontext>
            <p>
                The <b>Static Toolbar</b> docks at the top of the editor content. It dynamically calculates and publishes its height as a CSS custom property
                (<code>--p-text-editor-toolbar-height</code>), ensuring that floating elements, sticky bars, and outline navigators maintain pixel-perfect vertical alignment.
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
export class StaticToolbarDoc {
    content = signal('<p>The static toolbar groups formatting controls, font styling, list actions, table actions, and history buttons.</p>');
}
