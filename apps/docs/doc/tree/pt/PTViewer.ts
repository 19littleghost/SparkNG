import { AppDocPtViewer, getPTOptions } from '@/components/doc/app.docptviewer';
import { NodeService } from '@/service/nodeservice';
import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { TreeNode } from '@bdspark/sparkng/api';
import { TreeModule } from '@bdspark/sparkng/tree';

@Component({
    selector: 'tree-pt-viewer',
    standalone: true,
    imports: [CommonModule, AppDocPtViewer, TreeModule],
    providers: [NodeService],
    template: `
        <app-docptviewer [docs]="docs">
            <p-tree [value]="nodes()" [(selection)]="selectedKey" filter selectionMode="checkbox" class="w-full md:w-[30rem]" />
        </app-docptviewer>
    `
})
export class PTViewer implements OnInit {
    nodes = signal<TreeNode[] | undefined>(undefined);

    selectedKey: any = null;

    docs = [
        {
            data: getPTOptions('Tree'),
            key: 'Tree'
        }
    ];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getTreeNodes().then((data) => this.nodes.set(data));
    }
}
