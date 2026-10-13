import { AppCode } from '@/components/doc/app.code';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { Component, signal } from '@angular/core';
import { TextEditorContent, TextEditorRoot, TextEditorToolbar, TextEditorToolbarDef } from '@bdspark/sparkng/texteditor';

@Component({
    selector: 'basic-doc',
    standalone: true,
    imports: [AppDocSectionText, TextEditorRoot, TextEditorToolbar, TextEditorContent, AppCode, TextEditorToolbarDef],
    template: `
        <app-docsectiontext>
            <p>
                TextEditor is a ProseMirror based rich text editor built from headless parts. The root owns the document, commands and state; mount a <code>p-texteditor-toolbar</code> and a <code>p-texteditor-content</code> inside it and bind the
                value with <code>[(value)]</code>. The value is an HTML string in <code>classic</code> mode and an array of block HTML strings in <code>block</code> mode.
            </p>
        </app-docsectiontext>
        <div class="card">
            <p-texteditor-root [(value)]="value" placeholder="Tell a story…">
                <p-texteditor-toolbar>
                    <ng-template pTexteditorToolbarDef let-commands="commands" let-state="state">
                        <button type="button" (click)="commands.bold()" [attr.aria-pressed]="state.bold" aria-label="Bold"><strong>B</strong></button>
                        <button type="button" (click)="commands.italic()" [attr.aria-pressed]="state.italic" aria-label="Italic"><em>I</em></button>
                        <button type="button" (click)="commands.underline()" [attr.aria-pressed]="state.underline" aria-label="Underline"><u>U</u></button>
                    </ng-template>
                </p-texteditor-toolbar>
                <p-texteditor-content />
            </p-texteditor-root>
        </div>
        <app-code [code]="code"></app-code>
    `
})
export class BasicDoc {
    readonly value = signal<string | undefined>('<h2>Hello TextEditor</h2><p>This is a <strong>ProseMirror</strong> based editor with headless parts — each part turns its feature on when it is present in the tree.</p>');

    code = {
        typescript: `import { Component, signal } from '@angular/core';
import { TextEditorContent, TextEditorRoot, TextEditorToolbar } from '@bdspark/sparkng/texteditor';

@Component({
    selector: 'my-editor',
    standalone: true,
    imports: [TextEditorRoot, TextEditorToolbar, TextEditorContent, TextEditorToolbarDef],
    template: \`
        <p-texteditor-root [(value)]="value" placeholder="Tell a story…">
            <p-texteditor-toolbar>
                <ng-template pTexteditorToolbarDef let-commands="commands" let-state="state">
                    <button (click)="commands.bold()" [attr.aria-pressed]="state.bold">B</button>
                    <button (click)="commands.italic()" [attr.aria-pressed]="state.italic">I</button>
                    <button (click)="commands.underline()" [attr.aria-pressed]="state.underline">U</button>
                </ng-template>
            </p-texteditor-toolbar>
            <p-texteditor-content />
        </p-texteditor-root>
    \`
})
export class MyEditor {
    value = signal('<h2>Hello TextEditor</h2><p>Start writing…</p>');
}`
    };
}
