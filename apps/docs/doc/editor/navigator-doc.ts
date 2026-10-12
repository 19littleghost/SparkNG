import { AppCode } from '@/components/doc/app.code';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorToolbarUI, TextEditorContent, TextEditorNavigator, TextEditorRoot, TextEditorToolbar } from '@bdspark/sparkng/editor';

@Component({
    selector: 'navigator-doc',
    standalone: true,
    imports: [FormsModule, TextEditorRoot, TextEditorToolbar, TextEditorContent, TextEditorNavigator, EditorToolbarUI, AppCode, AppDocSectionText],
    template: `
        <app-docsectiontext>
            <p>The <b>Navigator</b> (<code>p-text-editor-navigator</code>) inspects headings across the document to render an interactive outline minimap, complete with scroll-spy synchronization.</p>
        </app-docsectiontext>
        <div class="card">
            <p-text-editor-root [(value)]="content">
                <p-text-editor-toolbar>
                    <p-editor-toolbar-ui />
                </p-text-editor-toolbar>
                <p-text-editor-content />
                <p-text-editor-navigator />
            </p-text-editor-root>
        </div>
        <app-code></app-code>
    `
})
export class NavigatorDoc {
    content = signal('<h1>1. Introduction</h1><p>Welcome to the comprehensive editor documentation.</p><h2>1.1 Core Architecture</h2><p>Overview of compound primitives.</p><h1>2. Advanced Features</h1><p>Details about plugins and custom tools.</p>');
}
