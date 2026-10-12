import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { Component } from '@angular/core';

@Component({
    selector: 'accessibility-doc',
    standalone: true,
    imports: [AppDocSectionText],
    template: `
        <app-docsectiontext>
            <h3>Screen Reader</h3>
            <p>
                Scheduler incorporates the <code>role="application"</code> ARIA pattern with accessible landmark titles and labels. Day headers, calendar cells, and event cards are annotated with <code>aria-label</code> providing spoken date
                intervals and event titles for screen readers.
            </p>
            <h3>Keyboard Support</h3>
            <div class="doc-tablewrapper">
                <table class="doc-table">
                    <thead>
                        <tr>
                            <th>Key</th>
                            <th>Function</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><i>Tab</i></td>
                            <td>Moves focus through navigation controls, view switcher buttons, date cells, and scheduled event items.</td>
                        </tr>
                        <tr>
                            <td><i>Arrow Keys</i></td>
                            <td>Navigates between adjacent calendar days and time slots in active view grids.</td>
                        </tr>
                        <tr>
                            <td><i>Enter / Space</i></td>
                            <td>Selects the focused date cell or opens the quick info dialog for the focused event card.</td>
                        </tr>
                        <tr>
                            <td><i>Escape</i></td>
                            <td>Dismisses open popovers, context menus, and quick info modals.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </app-docsectiontext>
    `
})
export class AccessibilityDoc {}
