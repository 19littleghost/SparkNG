import { AppCode } from '@/components/doc/app.code';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    characterCountPlugin,
    detailsPlugin,
    EditorToolbarUI,
    emojiPlugin,
    focusPlugin,
    invisibleCharactersPlugin,
    TextEditorContent,
    TextEditorRoot,
    TextEditorToolbar,
    typographyPlugin,
    uppercasePlugin
} from '@bdspark/sparkng/editor';

@Component({
    selector: 'plugins-doc',
    standalone: true,
    imports: [FormsModule, TextEditorRoot, TextEditorToolbar, TextEditorContent, EditorToolbarUI, AppCode, AppDocSectionText],
    template: `
        <app-docsectiontext>
            <p>
                The editor features a modular plugin architecture via <code>defineTextEditorPlugin</code>. Built-in plugins include <b>Uppercase</b> (case transformations),
                <b>Typography</b> (smart quotes, em-dashes, arrows), <b>Character Count</b>, <b>Emoji</b>, <b>Details</b> (collapsible blocks),
                <b>Focus</b> (distraction-free mode), and <b>Invisible Characters</b>.
            </p>
        </app-docsectiontext>
        <div class="card">
            <p-text-editor-root
                #editor
                [(value)]="content"
                [plugins]="[uppercasePlugin, typographyPlugin, emojiPlugin, characterCountPlugin, detailsPlugin, focusPlugin, invisibleCharactersPlugin]"
            >
                <p-text-editor-toolbar>
                    <p-editor-toolbar-ui />
                    <button type="button" class="p-text-editor-btn" (click)="runCommand(editor, 'uppercase', 'toUpper')" title="Uppercase">🔠 Upper</button>
                    <button type="button" class="p-text-editor-btn" (click)="runCommand(editor, 'uppercase', 'toTitle')" title="Title Case">🔤 Title</button>
                    <button type="button" class="p-text-editor-btn" (click)="runCommand(editor, 'typography', 'formatQuotes')" title="Format Quotes">✍ Quotes</button>
                    <button type="button" class="p-text-editor-btn" (click)="runCommand(editor, 'emoji', 'insertEmoji', '🚀')" title="Insert Rocket Emoji">🚀</button>
                    <button type="button" class="p-text-editor-btn" (click)="runCommand(editor, 'details', 'insertDetails', 'Architecture Specs', 'Hidden details text here...')" title="Insert Details">📑 Details</button>
                    <button type="button" class="p-text-editor-btn" (click)="runCommand(editor, 'invisibleCharacters', 'toggleInvisibles')" title="Toggle Invisibles">¶ Invisibles</button>
                    <button type="button" class="p-text-editor-btn" (click)="runCommand(editor, 'focus', 'toggleFocus')" title="Toggle Focus Mode">🎯 Focus</button>
                </p-text-editor-toolbar>
                <p-text-editor-content />
            </p-text-editor-root>
        </div>
        <app-code></app-code>
    `
})
export class PluginsDoc {
    content = signal(
        '<p>Try out the plugin toolbar buttons above: transform text case, convert straight quotes to smart curly quotes ("example" -- test -> next), insert emojis :sparkles:, toggle invisible pilcrow (¶) marks, or activate focus mode.</p>'
    );

    uppercasePlugin = uppercasePlugin;
    typographyPlugin = typographyPlugin;
    emojiPlugin = emojiPlugin;
    characterCountPlugin = characterCountPlugin;
    detailsPlugin = detailsPlugin;
    focusPlugin = focusPlugin;
    invisibleCharactersPlugin = invisibleCharactersPlugin;

    runCommand(editor: any, pluginName: string, commandName: string, ...args: any[]): void {
        const cmds = editor?.pluginCommandsSignal?.()?.[pluginName];
        if (cmds && typeof cmds[commandName] === 'function') {
            cmds[commandName](...args);
        }
    }
}
