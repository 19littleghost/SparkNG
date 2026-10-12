import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChild, inject, ViewEncapsulation } from '@angular/core';
import { TEXT_EDITOR_CONTEXT } from '../../context/editor.context';
import { TextEditorToolbarDef } from '../definitions/editor-definitions';

@Component({
    selector: 'p-text-editor-toolbar',
    standalone: true,
    imports: [CommonModule],
    template: `
        @if (toolbarDef) {
            <ng-container
                *ngTemplateOutlet="
                    toolbarDef.template;
                    context: {
                        $implicit: rootContext,
                        commands: rootContext.commands(),
                        state: rootContext.state(),
                        plugins: rootContext.pluginCommands()
                    }
                "
            ></ng-container>
        } @else {
            <ng-content></ng-content>
        }
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'p-text-editor-toolbar',
        '[attr.data-scope]': '"texteditor"',
        '[attr.data-part]': '"toolbar"',
        role: 'toolbar'
    }
})
export class TextEditorToolbar {
    public rootContext = inject(TEXT_EDITOR_CONTEXT);

    @ContentChild(TextEditorToolbarDef)
    public toolbarDef?: TextEditorToolbarDef;
}
