import { AppCode } from '@/components/doc/app.code';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { Code } from '@/domain/code';
import { Component } from '@angular/core';

@Component({
    selector: 'definepreset-doc',
    standalone: true,
    imports: [AppCode, AppDocSectionText],
    template: `
        <app-docsectiontext>
            <p>The <i>definePreset</i> utility is used to customize an existing preset during the SparkNG setup. The first parameter is the preset to customize and the second is the design tokens to override.</p>
        </app-docsectiontext>
        <app-code [code]="code1" [hideToggleCode]="true" class="block mb-4"></app-code>
        <app-code [code]="code2" [hideToggleCode]="true"></app-code>
    `
})
export class DefinePresetDoc {
    code1: Code = {
        typescript: `//mypreset.ts
import { definePreset } from '@bdspark/sparkng-themes';
import Aura from '@bdspark/sparkng-themes/aura';

const MyPreset = definePreset(Aura, {
    //Your customizations, see the following sections for examples
});

export MyPreset;`
    };

    code2: Code = {
        typescript: `import { ApplicationConfig } from '@angular/core';
import { provideOptimus } from '@bdspark/sparkng/config';
import MyPreset from './mypreset';

export const appConfig: ApplicationConfig = {
    providers: [
        provideOptimus({
            theme: {
                preset: MyPreset
            }
        })
    ]
};`
    };
}
