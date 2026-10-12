import { AppCode } from '@/components/doc/app.code';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorToolbarUI, TextEditorContent, TextEditorNavigator, TextEditorRoot, TextEditorToolbar } from '@bdspark/sparkng/editor';

@Component({
    selector: 'utilities-doc',
    standalone: true,
    imports: [FormsModule, TextEditorRoot, TextEditorToolbar, TextEditorContent, TextEditorNavigator, EditorToolbarUI, AppCode, AppDocSectionText],
    template: `
        <app-docsectiontext>
            <p>
                <b>Utilities</b> provide operational helpers including snapshot <b>History (Undo/Redo)</b>, interactive document <b>Navigator Minimap</b>,
                clean typography <b>Print preview</b>, and granular event tracking.
            </p>
        </app-docsectiontext>
        <div class="card">
            <p-text-editor-root #editor [(value)]="content">
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
export class UtilitiesDoc {
    content = signal(`
        <h1>1. Executive Summary</h1>
        <p>This document tests the navigation minimap and print capabilities.</p>
        <h2>1.1 Project Goals</h2>
        <p>Provide 1:1 functional parity with modern PrimeUI Pro specifications.</p>
        <h2>1.2 Scope & Boundaries</h2>
        <p>Compound components, Signals, and extensible plugins.</p>
        <h1>2. Architecture Design</h1>
        <p>Separation of headless runtime from visual presentation.</p>
    `);
}
