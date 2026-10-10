import { AppCode } from '@/components/doc/app.code';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { Code } from '@/domain/code';
import { Component, OnInit } from '@angular/core';
import { MenuItem, OpenngIcons } from '@bdspark/sparkng/api';
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
                icon: OpenngIcons.PLUS
            },
            {
                label: 'Delete',
                icon: OpenngIcons.TRASH
            }
        ];
    }

    code: Code = {
        typescript: `
import { Component } from '@angular/core';
import { OpenngIcons, MenuItem } from '@bdspark/sparkng/api';

@Component({
    selector: 'openng-icons-constants-demo',
    templateUrl: './openng-icons-constants-demo.html'
})
export class OpenngIconsConstantsDemo {
    items: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'New',
                icon: OpenngIcons.PLUS,
            },
            {
                label: 'Delete',
                icon: OpenngIcons.TRASH
            }
        ];
    }
}`
    };
}
