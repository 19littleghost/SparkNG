import { AppDocPtViewer } from '@/components/doc/app.docptviewer';
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TextEditorContent, TextEditorRoot, TextEditorToolbar } from '@bdspark/sparkng/texteditor';

@Component({
    selector: 'texteditor-pt-viewer',
    standalone: true,
    imports: [CommonModule, AppDocPtViewer, TextEditorRoot, TextEditorToolbar, TextEditorContent],
    template: `
        <app-docptviewer [docs]="docs">
            <p-texteditor-root [(value)]="value" placeholder="Inspect the DOM…">
                <p-texteditor-toolbar>
                    <ng-template pTexteditorToolbarDef let-commands="commands" let-state="state">
                        <button type="button" (click)="commands.bold()" [attr.aria-pressed]="state.bold">B</button>
                        <button type="button" (click)="commands.italic()" [attr.aria-pressed]="state.italic">I</button>
                    </ng-template>
                </p-texteditor-toolbar>
                <p-texteditor-content />
            </p-texteditor-root>
        </app-docptviewer>
    `
})
export class PTViewer {
    readonly value = signal<string | undefined>('<p>Hover the rendered elements to inspect their <code>data-scope</code> and <code>data-part</code> attributes.</p>');

    docs = [
        {
            id: 'pt.root',
            label: 'root',
            description: 'Root container. Data attributes: data-scope="texteditor", data-part="root", data-mode, data-disabled, data-readonly.'
        },
        {
            id: 'pt.toolbar',
            label: 'toolbar',
            description: 'Static toolbar surface. Data attributes: data-scope="texteditor", data-part="toolbar".'
        },
        {
            id: 'pt.content',
            label: 'content',
            description: 'Editable region mounting the ProseMirror view. Data attributes: data-scope="texteditor", data-part="content".'
        }
    ];
}
