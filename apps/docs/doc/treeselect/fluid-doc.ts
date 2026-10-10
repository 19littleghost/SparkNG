import { AppCode } from '@/components/doc/app.code';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { NodeService } from '@/service/nodeservice';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TreeSelectModule } from '@bdspark/sparkng/treeselect';

@Component({
    selector: 'fluid-doc',
    standalone: true,
    imports: [TreeSelectModule, FormsModule, RouterModule, AppCode, AppDocSectionText],
    template: `
        <app-docsectiontext>
            <p>The fluid prop makes the component take up the full width of its container when set to true.</p>
        </app-docsectiontext>
        <div class="card">
            <p-treeselect [(ngModel)]="selectedNodes" [options]="nodes" placeholder="Select Item" fluid />
        </div>
        <app-code></app-code>
    `
})
export class FluidDoc {
    nodes!: any[];

    selectedNodes: any;

    constructor(private nodeService: NodeService) {
        this.nodeService.getFiles().then((files) => (this.nodes = files));
    }
}
