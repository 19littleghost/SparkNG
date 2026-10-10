import { AppCodeModule } from '@/components/doc/app.code';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { Component } from '@angular/core';
import { ImageModule } from '@bdspark/sparkng/image';

@Component({
    selector: 'previewimagesource-doc',
    standalone: true,
    imports: [AppDocSectionText, AppCodeModule, ImageModule],
    template: `
        <app-docsectiontext>
            <p>In case that you want to show different image on preview, you can set <i>previewImageSrc</i> attribute. It could come handy when wanted to use smaller image version at first and bigger one on preview.</p>
        </app-docsectiontext>
        <div class="card flex justify-center">
            <p-image src="https://TODO-BDSPARK-DOMAIN/demo/galleria/galleria11.jpg" previewImageSrc="https://TODO-BDSPARK-DOMAIN/demo/galleria/galleria11.jpg" alt="Image" width="250" [preview]="true" />
        </div>
        <app-code></app-code>
    `
})
export class PreviewImageSourceDoc {}
