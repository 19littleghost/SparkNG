import { AppCode } from '@/components/doc/app.code';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { Component } from '@angular/core';

@Component({
    selector: 'import-doc',
    standalone: true,
    imports: [AppDocSectionText, AppCode],
    template: `
        <app-docsectiontext>
            <p>
                TextEditor is available under the <code>@bdspark/sparkng/texteditor</code> entry point. Import <code>TextEditorModule</code> for every part, or import the standalone parts you mount. ProseMirror packages
                (<code>prosemirror-model</code>, <code>prosemirror-state</code>, <code>prosemirror-view</code>, …) are peer dependencies of the library and must be installed once per application.
            </p>
        </app-docsectiontext>
        <app-code [code]="code" [hideToggleCode]="true"></app-code>
    `
})
export class ImportDoc {
    code = {
        typescript: `// ng-modules
import { TextEditorModule } from '@bdspark/sparkng/texteditor';

// standalone, per part
import { TextEditorRoot } from '@bdspark/sparkng/texteditor';
import { TextEditorContent } from '@bdspark/sparkng/texteditor';
import { TextEditorToolbar } from '@bdspark/sparkng/texteditor';

// types
import type { TextEditorCommands, TextEditorFormatState } from '@bdspark/sparkng/types/texteditor';`
    };
}
