import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, ContentChild, inject, signal, ViewEncapsulation } from '@angular/core';
import { TEXT_EDITOR_CONTEXT, UPLOAD_CONTEXT } from '../../context/editor.context';
import { TextEditorDocumentUploadDef, TextEditorImageUploadDef } from '../definitions/editor-definitions';
import type { UploadContext } from '@bdspark/sparkng/types/editor';

@Component({
    selector: 'p-text-editor-image-upload',
    standalone: true,
    imports: [CommonModule],
    template: `
        @if (open()) {
            @if (imageUploadDef) {
                <ng-container
                    *ngTemplateOutlet="
                        imageUploadDef.template;
                        context: {
                            $implicit: uploadContext,
                            selectFiles: selectFiles,
                            uploads: uploads(),
                            dismiss: dismiss,
                            onDrop: onDrop
                        }
                    "
                ></ng-container>
            } @else {
                <div class="p-text-editor-upload-dropzone" (drop)="onDrop($event)" (dragover)="$event.preventDefault()">
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                            <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                            <circle cx="9" cy="9" r="2"/>
                            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                        </svg>
                        <span>Drop images here or click to upload</span>
                    </div>
                    <button type="button" class="p-text-editor-btn" (click)="selectFiles()">Browse</button>
                </div>
            }
        }
    `,
    providers: [
        {
            provide: UPLOAD_CONTEXT,
            useFactory: (comp: TextEditorImageUpload) => comp.uploadContext,
            deps: [TextEditorImageUpload]
        }
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'p-text-editor-upload-overlay p-text-editor-image-upload',
        '[attr.data-scope]': '"texteditor"',
        '[attr.data-part]': '"image-upload"',
        '[style.display]': 'open() ? "flex" : "none"'
    }
})
export class TextEditorImageUpload {
    public rootContext = inject(TEXT_EDITOR_CONTEXT);

    @ContentChild(TextEditorImageUploadDef)
    public imageUploadDef?: TextEditorImageUploadDef;

    public open = signal<boolean>(false);
    public uploads = signal<Array<{ id: string; name: string; progress: number }>>([]);

    public selectFiles = () => {
        if (typeof document === 'undefined') return;
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = (e: any) => {
            const file = e.target.files?.[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (ev) => {
                    const result = ev.target?.result as string;
                    if (result) {
                        this.rootContext.commands().image(result, file.name);
                        this.dismiss();
                    }
                };
                reader.readAsDataURL(file);
            }
        };
        input.click();
    };

    public onDrop = (event: DragEvent) => {
        event.preventDefault();
        const file = event.dataTransfer?.files?.[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (ev) => {
                const result = ev.target?.result as string;
                if (result) {
                    this.rootContext.commands().image(result, file.name);
                    this.dismiss();
                }
            };
            reader.readAsDataURL(file);
        }
    };

    public dismiss = () => {
        this.open.set(false);
    };

    public readonly uploadContext: UploadContext = {
        kind: signal<'image' | 'document'>('image').asReadonly(),
        uploads: computed(() => this.uploads()),
        selectFiles: this.selectFiles,
        onDrop: this.onDrop,
        dismiss: this.dismiss
    };
}

@Component({
    selector: 'p-text-editor-document-upload',
    standalone: true,
    imports: [CommonModule],
    template: `
        @if (open()) {
            @if (docUploadDef) {
                <ng-container
                    *ngTemplateOutlet="
                        docUploadDef.template;
                        context: {
                            $implicit: uploadContext,
                            selectFiles: selectFiles,
                            uploads: uploads(),
                            dismiss: dismiss,
                            onDrop: onDrop
                        }
                    "
                ></ng-container>
            } @else {
                <div class="p-text-editor-upload-dropzone" (drop)="onDrop($event)" (dragover)="$event.preventDefault()">
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
                            <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
                        </svg>
                        <span>Drop documents here or click to upload</span>
                    </div>
                    <button type="button" class="p-text-editor-btn" (click)="selectFiles()">Browse</button>
                </div>
            }
        }
    `,
    providers: [
        {
            provide: UPLOAD_CONTEXT,
            useFactory: (comp: TextEditorDocumentUpload) => comp.uploadContext,
            deps: [TextEditorDocumentUpload]
        }
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'p-text-editor-upload-overlay p-text-editor-document-upload',
        '[attr.data-scope]': '"texteditor"',
        '[attr.data-part]': '"document-upload"',
        '[style.display]': 'open() ? "flex" : "none"'
    }
})
export class TextEditorDocumentUpload {
    public rootContext = inject(TEXT_EDITOR_CONTEXT);

    @ContentChild(TextEditorDocumentUploadDef)
    public docUploadDef?: TextEditorDocumentUploadDef;

    public open = signal<boolean>(false);
    public uploads = signal<Array<{ id: string; name: string; progress: number }>>([]);

    public selectFiles = () => {
        if (typeof document === 'undefined') return;
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.pdf,.doc,.docx,.txt,.csv,.xlsx';
        input.onchange = (e: any) => {
            const file = e.target.files?.[0];
            if (file) {
                const url = URL.createObjectURL(file);
                this.rootContext.commands().document?.(url, file.name);
                this.dismiss();
            }
        };
        input.click();
    };

    public onDrop = (event: DragEvent) => {
        event.preventDefault();
        const file = event.dataTransfer?.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            this.rootContext.commands().document?.(url, file.name);
            this.dismiss();
        }
    };
    public dismiss = () => {
        this.open.set(false);
    };

    public readonly uploadContext: UploadContext = {
        kind: signal<'image' | 'document'>('document').asReadonly(),
        uploads: computed(() => this.uploads()),
        selectFiles: this.selectFiles,
        onDrop: this.onDrop,
        dismiss: this.dismiss
    };
}
