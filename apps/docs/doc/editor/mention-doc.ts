import { AppCode } from '@/components/doc/app.code';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorToolbarUI, TextEditorContent, TextEditorMentionMenu, TextEditorRoot, TextEditorToolbar } from '@bdspark/sparkng/editor';

@Component({
    selector: 'mention-doc',
    standalone: true,
    imports: [FormsModule, TextEditorRoot, TextEditorToolbar, TextEditorContent, TextEditorMentionMenu, EditorToolbarUI, AppCode, AppDocSectionText],
    template: `
        <app-docsectiontext>
            <p>The <b>Mention Menu</b> (<code>p-text-editor-mention-menu</code>) enables interactive user mentions by typing <code>@</code>, presenting a filtered user list.</p>
        </app-docsectiontext>
        <div class="card">
            <p-text-editor-root [(value)]="content">
                <p-text-editor-toolbar>
                    <p-editor-toolbar-ui />
                </p-text-editor-toolbar>
                <p-text-editor-content />
                <p-text-editor-mention-menu [items]="users" />
            </p-text-editor-root>
        </div>
        <app-code></app-code>
    `
})
export class MentionDoc {
    content = signal('<p>Collaborate with team members! Mention <span class="p-text-editor-mention">@alex</span> to notify them.</p>');

    users = [
        { id: 1, name: 'Alex Johnson' },
        { id: 2, name: 'Sarah Miller' },
        { id: 3, name: 'David Smith' },
        { id: 4, name: 'Emma Wilson' }
    ];
}
