import { AppCode } from '@/components/doc/app.code';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from '@bdspark/sparkng/api';
import { BreadcrumbModule } from '@bdspark/sparkng/breadcrumb';

@Component({
    selector: 'template-doc',
    standalone: true,
    imports: [BreadcrumbModule, RouterModule, AppCode, AppDocSectionText],
    template: `
        <app-docsectiontext>
            <p>Custom content can be placed inside the items using the <i>item</i> template. The divider between the items has its own <i>separator</i> template.</p>
        </app-docsectiontext>
        <div class="card flex justify-center">
            <p-breadcrumb [model]="items" [home]="home">
                <ng-template #item let-item>
                    <a class="cursor-pointer" [routerLink]="item.url">
                        <i [class]="item.icon"></i>
                    </a>
                </ng-template>
                <ng-template #separator> / </ng-template>
            </p-breadcrumb>
        </div>
        <app-code></app-code>
    `
})
export class TemplateDoc implements OnInit {
    items: MenuItem[] | undefined;

    home: MenuItem | undefined;

    ngOnInit() {
        this.items = [{ icon: 'pi pi-sitemap' }, { icon: 'pi pi-book' }, { icon: 'pi pi-wallet' }, { icon: 'pi pi-shopping-bag' }, { icon: 'pi pi-calculator' }];

        this.home = { icon: 'pi pi-home' };
    }
}
