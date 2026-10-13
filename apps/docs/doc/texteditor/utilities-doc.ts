import { AppCode } from '@/components/doc/app.code';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { Component, signal } from '@angular/core';
import { TextEditorContent, TextEditorRoot, TextEditorToolbar, TextEditorToolbarDef } from '@bdspark/sparkng/texteditor';

@Component({
    selector: 'utilities-doc',
    standalone: true,
    imports: [AppDocSectionText, TextEditorRoot, TextEditorToolbar, TextEditorContent, AppCode, TextEditorToolbarDef],
    template: `
        <app-docsectiontext>
            <h3>History</h3>
            <p>The runtime owns the history stack; widgets read <code>commands.undo()/redo()</code> and the availability flags <code>state.canUndo</code> / <code>state.canRedo</code>.</p>
            <h3>Print</h3>
            <p><code>commands.print()</code> prints the sanitized document content through a sandboxed iframe — always available, no state flag.</p>
        </app-docsectiontext>
        <div class="card">
            <p-texteditor-root [(value)]="value" placeholder="Type, then undo…">
                <p-texteditor-toolbar>
                    <ng-template pTexteditorToolbarDef let-commands="commands" let-state="state">
                        <button type="button" (click)="commands.undo()" [disabled]="!state.canUndo" aria-label="Undo">↶</button>
                        <button type="button" (click)="commands.redo()" [disabled]="!state.canRedo" aria-label="Redo">↷</button>
                        <button type="button" (click)="commands.print()" aria-label="Print">⎙ Print</button>
                    </ng-template>
                </p-texteditor-toolbar>
                <p-texteditor-content />
            </p-texteditor-root>
        </div>
        <app-code [code]="code"></app-code>
    `
})
export class UtilitiesDoc {
    readonly value = signal<string | undefined>('<p>Type a few words, then step back and forward through history. Print produces a clean copy of the sanitized HTML.</p>');

    code = {
        typescript: `<button (click)="commands.undo()" [disabled]="!state.canUndo" aria-label="Undo">↶</button>
<button (click)="commands.redo()" [disabled]="!state.canRedo" aria-label="Redo">↷</button>
<button (click)="commands.print()" aria-label="Print">Print</button>`
    };
}
