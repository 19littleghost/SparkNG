import { AppDoc } from '@/components/doc/app.doc';
import { OverviewDoc } from '@/doc/colors/overview-doc';
import { PaletteDoc } from '@/doc/colors/palette-doc';
import { SurfacesDoc } from '@/doc/colors/surfaces-doc';
import { Component } from '@angular/core';

@Component({
    standalone: true,
    imports: [AppDoc],
    template: ` <app-doc docTitle="Colors - SparkNG" header="Colors" description="Colors are exported as CSS variables and used with the standard var syntax such as var(--text-color)." [docs]="docs" docType="page"></app-doc> `
})
export class ColorsDemo {
    docs = [
        {
            id: 'overview',
            label: 'Overview',
            component: OverviewDoc
        },
        {
            id: 'palette',
            label: 'Palette',
            component: PaletteDoc
        },
        {
            id: 'surfaces',
            label: 'Surfaces',
            component: SurfacesDoc
        }
    ];
}
