import { AppDoc } from '@/components/doc/app.doc';
import { AccessibilityDoc } from '@/doc/editor/accessibility-doc';
import { ArchitectureDoc } from '@/doc/editor/architecture-doc';
import { BasicDoc } from '@/doc/editor/basic-doc';
import { BlockModeDoc } from '@/doc/editor/blockmode-doc';
import { CompoundDoc } from '@/doc/editor/compound-doc';
import { ContentDoc } from '@/doc/editor/content-doc';
import { ContextToolbarDoc } from '@/doc/editor/contexttoolbar-doc';
import { CustomToolbarDoc } from '@/doc/editor/customtoolbar-doc';
import { FormatsDoc } from '@/doc/editor/formats-doc';
import { MarkdownDoc } from '@/doc/editor/markdown-doc';
import { MentionDoc } from '@/doc/editor/mention-doc';
import { NavigatorDoc } from '@/doc/editor/navigator-doc';
import { PluginsDoc } from '@/doc/editor/plugins-doc';
import { PTComponent } from '@/doc/editor/pt/PTComponent';
import { QuillDoc } from '@/doc/editor/quill-doc';
import { ReactiveFormsDoc } from '@/doc/editor/reactiveforms-doc';
import { ReadOnlyDoc } from '@/doc/editor/readonly-doc';
import { ReferenceDoc } from '@/doc/editor/reference-doc';
import { SetupDoc } from '@/doc/editor/setup-doc';
import { StaticToolbarDoc } from '@/doc/editor/statictoolbar-doc';
import { StructureDoc } from '@/doc/editor/structure-doc';
import { TemplateDrivenFormsDoc } from '@/doc/editor/templatedrivenforms-doc';
import { UsageDoc } from '@/doc/editor/usage-doc';
import { UtilitiesDoc } from '@/doc/editor/utilities-doc';
import { Component } from '@angular/core';

@Component({
    standalone: true,
    imports: [AppDoc],
    template: `
        <app-doc
            docTitle="Angular Editor Component - SparkNG"
            header="Editor"
            description="Editor is a versatile rich text editing library for Angular offering compound architecture, Notion-style block mode, extensible plugins, table controls, and Quill integration."
            [docs]="docs"
            [apiDocs]="['Editor', 'TextEditorRoot']"
            [ptDocs]="ptComponent"
            themeDocs="editor"
        ></app-doc>
    `
})
export class EditorDemo {
    ptComponent = PTComponent;
    docs = [
        {
            id: 'usage',
            label: 'Usage',
            component: UsageDoc
        },
        {
            id: 'gettingstarted',
            label: 'Getting Started',
            children: [
                { id: 'architecture', label: 'Architecture', component: ArchitectureDoc },
                { id: 'setup', label: 'Setup', component: SetupDoc }
            ]
        },
        {
            id: 'toolbar',
            label: 'Toolbar',
            children: [
                { id: 'statictoolbar', label: 'Static Toolbar', component: StaticToolbarDoc },
                { id: 'contexttoolbar', label: 'Context Toolbar', component: ContextToolbarDoc }
            ]
        },
        {
            id: 'compound',
            label: 'Compound Architecture',
            component: CompoundDoc
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
            id: 'content',
            label: 'Content & Tables',
            component: ContentDoc
        },
        {
            id: 'utilities',
            label: 'Utilities',
            component: UtilitiesDoc
        },
        {
            id: 'blockmode',
            label: 'Block Mode',
            component: BlockModeDoc
        },
        {
            id: 'markdown',
            label: 'Markdown Rules',
            component: MarkdownDoc
        },
        {
            id: 'mention',
            label: 'Mentions',
            component: MentionDoc
        },
        {
            id: 'navigator',
            label: 'Navigator Minimap',
            component: NavigatorDoc
        },
        {
            id: 'plugins',
            label: 'Plugins',
            component: PluginsDoc
        },
        {
            id: 'reference',
            label: 'Reference',
            component: ReferenceDoc
        },
        {
            id: 'quill',
            label: 'Quill Mode',
            component: QuillDoc
        },
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDoc
        },
        {
            id: 'readonly',
            label: 'ReadOnly',
            component: ReadOnlyDoc
        },
        {
            id: 'template',
            label: 'Custom Toolbar',
            component: CustomToolbarDoc
        },
        {
            id: 'forms',
            label: 'Forms',
            children: [
                { id: 'templatedriven', label: 'Template Driven', component: TemplateDrivenFormsDoc },
                { id: 'reactive', label: 'Reactive Forms', component: ReactiveFormsDoc }
            ]
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        }
    ];
}
