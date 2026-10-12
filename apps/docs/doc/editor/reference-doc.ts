import { AppCode } from '@/components/doc/app.code';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { Component } from '@angular/core';

@Component({
    selector: 'reference-doc',
    standalone: true,
    imports: [AppCode, AppDocSectionText],
    template: `
        <app-docsectiontext>
            <p>
                <b>Technical Reference & Specifications:</b>
            </p>
            <ul class="leading-relaxed my-3 pl-6 list-disc">
                <li>
                    <b>API & Signals:</b> <code>TextEditorRoot</code> exposes <code>commands</code>, <code>state</code>, <code>headings</code>, and <code>pluginCommands</code>
                    as reactive Signals via <code>TEXT_EDITOR_CONTEXT</code>.
                </li>
                <li>
                    <b>Theming & Design Tokens:</b> Driven by design tokens (<code>editor.content.*</code>, <code>editor.toolbar.*</code>, <code>editor.overlay.*</code>)
                    and CSS variables (<code>--p-text-editor-*</code>) supporting light and <code>.p-dark</code> modes.
                </li>
                <li>
                    <b>Controlled vs Uncontrolled Forms:</b> Supports two-way binding <code>[(value)]</code>, Reactive Forms (<code>[formControl]</code>, <code>formControlName</code>)
                    via built-in <code>ControlValueAccessor</code>, and one-way <code>[value]</code> with <code>(onValueChange)</code>.
                </li>
                <li>
                    <b>Security:</b> Built-in sanitization enabled by default (<code>[sanitize]="true"</code>) removes malicious script tags, inline javascript handlers,
                    and javascript pseudo-protocols.
                </li>
                <li>
                    <b>Accessibility:</b> Conforms to WAI-ARIA standards with <code>role="textbox"</code>, <code>aria-multiline="true"</code>, <code>role="toolbar"</code>,
                    roving focus, and keyboard shortcuts (Ctrl+B, Ctrl+I, Ctrl+U, Ctrl+Z, Ctrl+Y).
                </li>
                <li>
                    <b>Tree Shaking:</b> Modular standalone architecture allows developers to import only the plugins and compound controls needed for their application.
                </li>
            </ul>
        </app-docsectiontext>
        <app-code></app-code>
    `
})
export class ReferenceDoc {}
