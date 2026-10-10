import { AppDocPtViewer, getPTOptions } from '@/components/doc/app.docptviewer';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ImageCompareModule } from '@bdspark/sparkng/imagecompare';

@Component({
    selector: 'imagecompare-pt-viewer',
    standalone: true,
    imports: [CommonModule, AppDocPtViewer, ImageCompareModule],
    template: `
        <app-docptviewer [docs]="docs">
            <p-imagecompare>
                <ng-template #left>
                    <img src="https://sparkng.bdspark.com/demo/compare/island1.jpg" />
                </ng-template>
                <ng-template #right>
                    <img src="https://sparkng.bdspark.com/demo/compare/island2.jpg" />
                </ng-template>
            </p-imagecompare>
        </app-docptviewer>
    `
})
export class PTViewer {
    docs = [
        {
            data: getPTOptions('ImageCompare'),
            key: 'ImageCompare'
        }
    ];
}
