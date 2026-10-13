import { AppCode } from '@/components/doc/app.code';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { Component, signal } from '@angular/core';
import { TextEditorContent, TextEditorRoot } from '@bdspark/sparkng/texteditor';
import { TextEditorDemoToolbar } from './demo/texteditor-demo-toolbar';

@Component({
    selector: 'toolbar-doc',
    standalone: true,
    imports: [AppDocSectionText, TextEditorRoot, TextEditorContent, TextEditorDemoToolbar, AppCode],
    template: `
        <app-docsectiontext>
            <p>
                The static toolbar is a headless <code>role="toolbar"</code> surface: the <code>pTexteditorToolbarDef</code> template hands over <code>commands</code> and <code>state</code> already unwrapped. Toggle buttons bind
                <code>[attr.aria-pressed]</code> to the matching state flag, selects bind <code>[value]</code> and dispatch on change, and value inputs such as font family report <code>null</code> when the selection mixes values.
            </p>
        </app-docsectiontext>
        <div class="card">
            <p-texteditor-root [(value)]="value" placeholder="Format away…" ariaLabel="Full toolbar demo">
                <texteditor-demo-toolbar pTexteditorToolbar />
                <p-texteditor-content />
            </p-texteditor-root>
        </div>
        <app-code [code]="code" [hideToggleCode]="true"></app-code>
    `
})
export class ToolbarDoc {
    readonly value = signal<string | undefined>(
        '<h2>Static toolbar</h2><p>Every formatting, structure and utility command in one bar: <strong>bold</strong>, <em>italic</em>, <u>underline</u>, <s>strikethrough</s>, x², x₂ and inline <code>code</code>.</p><blockquote><p>Blockquote, lists, alignment, links, tables and dividers live here too.</p></blockquote>'
    );

    code = {
        typescript: `import { Component } from '@angular/core';
import { TextEditorContent, TextEditorRoot, TextEditorToolbar } from '@bdspark/sparkng/texteditor';

@Component({
    selector: 'my-editor',
    standalone: true,
    imports: [TextEditorRoot, TextEditorToolbar, TextEditorContent, TextEditorToolbarDef],
    template: \`
        <p-texteditor-root [(value)]="value">
            <p-texteditor-toolbar>
                <ng-template pTexteditorToolbarDef let-commands="commands" let-state="state">
                    <select [value]="state.heading ?? ''" (change)="onChange($event, commands)">
                        <option value="">Paragraph</option>
                        <option value="1">Heading 1</option>
                        <option value="2">Heading 2</option>
                    </select>
                    <button (click)="commands.bold()" [attr.aria-pressed]="state.bold">B</button>
                    <button (click)="commands.italic()" [attr.aria-pressed]="state.italic">I</button>
                    <button (click)="commands.foregroundColor('#e11d48')"
                            [attr.aria-pressed]="state.foregroundColor === '#e11d48'">Red</button>
                    <button (click)="commands.bulletList()" [attr.aria-pressed]="state.bulletList">• List</button>
                    <button (click)="commands.textAlign('center')"
                            [attr.aria-pressed]="state.textAlign === 'center'">Center</button>
                    <button (click)="commands.insertHorizontalRule()">—</button>
                    <button (click)="commands.undo()" [disabled]="!state.canUndo">Undo</button>
                    <button (click)="commands.print()">Print</button>
                </ng-template>
            </p-texteditor-toolbar>
            <p-texteditor-content />
        </p-texteditor-root>
    \`
})
export class MyEditor {
    value = signal('<p>hello</p>');

    onChange(event: Event, commands: TextEditorCommands) {
        const level = Number((event.target as HTMLSelectElement).value) || null;
        level === null ? commands.paragraph() : commands.heading(level);
    }
}`
    };
}
