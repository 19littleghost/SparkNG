import { AppCode } from '@/components/doc/app.code';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem, MessageService } from '@bdspark/sparkng/api';
import { SpeedDialModule } from '@bdspark/sparkng/speeddial';
import { ToastModule } from '@bdspark/sparkng/toast';

@Component({
    selector: 'circle-doc',
    standalone: true,
    imports: [AppDocSectionText, AppCode, SpeedDialModule, ToastModule, RouterModule],
    template: `
        <app-docsectiontext>
            <p>Items can be displayed around the button when <i>type</i> is set to <i>circle</i>. Additional <i>radius</i> property defines the radius of the circle.</p>
        </app-docsectiontext>
        <div class="card">
            <div style="position:relative; height: 500px;" class="flex items-center justify-center">
                <p-toast />
                <p-speeddial [model]="items" [radius]="80" type="circle" [style]="{ position: 'absolute' }" [buttonProps]="{ severity: 'warn', rounded: true }" />
            </div>
        </div>
        <app-code></app-code>
    `,
    providers: [MessageService]
})
export class CircleDoc implements OnInit {
    items: MenuItem[] | undefined;

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.items = [
            {
                icon: 'pi pi-pencil',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                }
            },
            {
                icon: 'pi pi-refresh',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                icon: 'pi pi-trash',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                icon: 'pi pi-upload',
                routerLink: ['/fileupload']
            },
            {
                icon: 'pi pi-external-link',
                target: '_blank',
                url: 'https://angular.dev'
            }
        ];
    }
}
