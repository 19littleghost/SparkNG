import { AppDoc } from '@/components/doc/app.doc';
import { AccessibilityDoc } from '@/doc/texteditor/accessibility-doc';
import { ApiDoc } from '@/doc/texteditor/api-doc';
import { BasicDoc } from '@/doc/texteditor/basic-doc';
import { BlockDoc } from '@/doc/texteditor/block-doc';
import { ContextToolbarDoc } from '@/doc/texteditor/contexttoolbar-doc';
import { DocumentDoc } from '@/doc/texteditor/document-doc';
import { EventsDoc } from '@/doc/texteditor/events-doc';
import { FormatsDoc } from '@/doc/texteditor/formats-doc';
import { ImageDoc } from '@/doc/texteditor/image-doc';
import { ImportDoc } from '@/doc/texteditor/import-doc';
import { LinkDoc } from '@/doc/texteditor/link-doc';
import { MentionDoc } from '@/doc/texteditor/mention-doc';
import { NavigatorDoc } from '@/doc/texteditor/navigator-doc';
import { PluginsDoc } from '@/doc/texteditor/plugins-doc';
import { StructureDoc } from '@/doc/texteditor/structure-doc';
import { TableDoc } from '@/doc/texteditor/table-doc';
import { ToolbarDoc } from '@/doc/texteditor/toolbar-doc';
import { UtilitiesDoc } from '@/doc/texteditor/utilities-doc';
import { PTComponent } from '@/doc/texteditor/pt/PTComponent';
import { Component } from '@angular/core';

@Component({
    template: `
        <app-doc
            docTitle="Angular Text Editor Component - SparkNG"
            header="Text Editor"
            description="TextEditor is a ProseMirror based rich text editor built from headless parts with commands, format state, sanitization, uploads, tables, mentions, block mode and a plugin system."
            [docs]="docs"
            [apiDocs]="['TextEditorRoot', 'TextEditorToolbar', 'TextEditorContextToolbar']"
            [apiSections]="apiSections"
            themeDocs="texteditor"
            [ptDocs]="ptComponent"
        ></app-doc>
    `,
    standalone: true,
    imports: [AppDoc],
    styleUrl: './texteditordemo.scss'
})
export class TextEditorDemo {
    ptComponent = PTComponent;
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDoc
        },
        {
            id: 'toolbar',
            label: 'Toolbar',
            component: ToolbarDoc
        },
        {
            id: 'context-toolbar',
            label: 'Context Toolbar',
            component: ContextToolbarDoc
        },
        {
            id: 'formats',
            label: 'Formats',
            component: FormatsDoc
        },
        {
            id: 'structure',
            label: 'Structure',
            component: StructureDoc
        },
        {
            id: 'link',
            label: 'Link',
            component: LinkDoc
        },
        {
            id: 'image',
            label: 'Image',
            component: ImageDoc
        },
        {
            id: 'document',
            label: 'Document',
            component: DocumentDoc
        },
        {
            id: 'table',
            label: 'Table',
            component: TableDoc
        },
        {
            id: 'mention',
            label: 'Mention',
            component: MentionDoc
        },
        {
            id: 'utilities',
            label: 'Utilities',
            component: UtilitiesDoc
        },
        {
            id: 'navigator',
            label: 'Navigator',
            component: NavigatorDoc
        },
        {
            id: 'events',
            label: 'Events',
            component: EventsDoc
        },
        {
            id: 'block',
            label: 'Block Mode',
            component: BlockDoc
        },
        {
            id: 'plugins',
            label: 'Plugins',
            component: PluginsDoc
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        }
    ];

    apiSections = [
        {
            id: 'api.overview',
            label: 'Overview',
            description: 'Curated reference for the Angular TextEditor module: imports, parts (API), context tokens, inputs, outputs, methods, interfaces, types and style classes as specified in the PrimeUI Pro / SparkNG API specification.',
            component: ApiDoc,
            children: [
                { id: 'api.import', label: 'Import' },
                { id: 'api.api', label: 'Parts' },
                { id: 'api.context-tokens', label: 'Context Tokens' },
                { id: 'api.inputs', label: 'Inputs' },
                { id: 'api.outputs', label: 'Outputs' },
                { id: 'api.methods', label: 'Methods' },
                { id: 'api.interfaces', label: 'Interfaces' },
                { id: 'api.types', label: 'Types' },
                { id: 'api.style-classes', label: 'Style Classes' }
            ]
        }
    ];
}
