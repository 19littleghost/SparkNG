import { AppCode } from '@/components/doc/app.code';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorToolbarUI, TextEditorContent, TextEditorRoot, TextEditorToolbar } from '@bdspark/sparkng/editor';

@Component({
    selector: 'architecture-doc',
    standalone: true,
    imports: [FormsModule, TextEditorRoot, TextEditorToolbar, TextEditorContent, EditorToolbarUI, AppCode, AppDocSectionText],
    template: `
        <app-docsectiontext>
            <p>
                <b>SparkNG TextEditor</b> is designed around a <b>two-layer architecture</b>:
            </p>
            <ol class="leading-relaxed my-3 pl-6 list-decimal">
                <li>
                    <b>Headless Runtime Layer</b> (<code>p-text-editor-root</code>): Manages document state, selection ranges, history snapshots, bi-directional DOM synchronization,
                    HTML sanitization, and plugin pipelines.
                </li>
                <li>
                    <b>Visual Presentation Layer</b> (<code>p-text-editor-toolbar</code>, <code>p-text-editor-content</code>, <code>p-text-editor-context-toolbar</code>):
                    Composable UI components communicating reactively via Angular Signals contexts (<code>TEXT_EDITOR_CONTEXT</code>) without prop-drilling.
                </li>
            </ol>
            <p>
                Consumers can use ready-made UI components like <code>p-editor-toolbar-ui</code> or project custom controls via structural slot directives.
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
export class ArchitectureDoc {
    content = signal(`
        <h2>Architecture Overview</h2>
        <p>TextEditor separates state management from visual rendering, offering high performance, reactive Signal contexts, and modular tree-shaking.</p>
    `);
}
