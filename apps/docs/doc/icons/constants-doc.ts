import { AppCode } from '@/components/doc/app.code';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { Code } from '@/domain/code';
import { Component, OnInit } from '@angular/core';
import { MenuItem, BdsparkIcons } from '@bdspark/sparkng/api';
import { MenuModule } from '@bdspark/sparkng/menu';

@Component({
    selector: 'constants-doc',
    standalone: true,
    imports: [AppDocSectionText, AppCode, MenuModule],
    template: `
        <app-docsectiontext>
            <p>Constants API is available to reference icons easily when used programmatically.</p>
        </app-docsectiontext>
        <div class="card flex justify-center">
            <p-menu [model]="items"></p-menu>
        </div>
        <app-code [code]="code" [hideToggleCode]="true"></app-code>
    `
})
export class ConstantsDoc implements OnInit {
    items: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'New',
                icon: BdsparkIcons.PLUS
            },
            {
                label: 'Delete',
                icon: BdsparkIcons.TRASH
            }
        ];
    }

    code: Code = {
        typescript: `
import { Component } from '@angular/core';
import { BdsparkIcons, MenuItem } from '@bdspark/sparkng/api';

@Component({
    selector: 'bdspark-icons-constants-demo',
    templateUrl: './bdspark-icons-constants-demo.html'
})
export class BdsparkIconsConstantsDemo {
    items: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'New',
                icon: BdsparkIcons.PLUS,
            },
            {
                label: 'Delete',
                icon: BdsparkIcons.TRASH
            }
        ];
    }
}`
    };
}
