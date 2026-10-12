import { AppCode } from '@/components/doc/app.code';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorBlockControlsUI, EditorToolbarUI, TextEditorBlockControls, TextEditorBlockMenu, TextEditorContent, TextEditorRoot, TextEditorSlashMenu, TextEditorToolbar } from '@bdspark/sparkng/editor';

@Component({
    selector: 'blockmode-doc',
    standalone: true,
    imports: [FormsModule, TextEditorRoot, TextEditorToolbar, TextEditorContent, TextEditorBlockControls, TextEditorBlockMenu, TextEditorSlashMenu, EditorToolbarUI, EditorBlockControlsUI, AppCode, AppDocSectionText],
    template: `
        <app-docsectiontext>
            <p>
                In <b>Block Mode</b> (<code>mode="block"</code>), the document is modeled as an array of independent HTML blocks. Each block features a hover bar with an add-block button and drag handle, a per-block options menu, and a slash-command
                palette (<code>/</code>).
            </p>
        </app-docsectiontext>
        <div class="card">
            <p-text-editor-root [(value)]="blocks" mode="block">
                <p-text-editor-toolbar>
                    <p-editor-toolbar-ui />
                </p-text-editor-toolbar>
                <p-text-editor-content />
                <p-text-editor-block-controls>
                    <p-editor-block-controls-ui />
                </p-text-editor-block-controls>
                <p-text-editor-block-menu />
                <p-text-editor-slash-menu />
            </p-text-editor-root>
        </div>
        <app-code></app-code>
    `
})
export class BlockModeDoc {
    blocks = signal<string[]>([
        '<h1>Notion-style Block Editor</h1>',
        '<p>Hover over this block to see the block controls on the left, or click the drag handle for options.</p>',
        '<blockquote>"Content is modular, draggable, and convertible into different blocks."</blockquote>'
    ]);
}
