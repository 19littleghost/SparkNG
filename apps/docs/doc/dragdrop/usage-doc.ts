import { AppCode } from '@/components/doc/app.code';
import { Code } from '@/domain/code';
import { Component } from '@angular/core';

@Component({
    selector: 'dragdrop-usage-doc',
    standalone: true,
    imports: [AppCode],
    template: `
        <app-code [code]="importCode" [hideToggleCode]="true"></app-code>
        <br />
        <app-code [code]="usageCode" [hideToggleCode]="true"></app-code>
    `
})
export class UsageDoc {
    importCode: Code = {
        typescript: `import { DragDropModule } from '@bdspark/sparkng/dragdrop';`
    };

    usageCode: Code = {
        html: `<div pDraggable>Draggable</div>
<div pDroppable>Droppable</div>`
    };
}
