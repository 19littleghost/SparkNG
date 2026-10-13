import { TextEditorDemo } from './';

export default [
    {
        path: '',
        component: TextEditorDemo
    },
    // Toolbar
    { path: 'toolbar/static', component: TextEditorDemo },
    { path: 'toolbar/context', component: TextEditorDemo },
    // Formats
    { path: 'formats/bold', component: TextEditorDemo },
    { path: 'formats/italic', component: TextEditorDemo },
    { path: 'formats/underline', component: TextEditorDemo },
    { path: 'formats/strikethrough', component: TextEditorDemo },
    { path: 'formats/subscript', component: TextEditorDemo },
    { path: 'formats/superscript', component: TextEditorDemo },
    { path: 'formats/code', component: TextEditorDemo },
    { path: 'formats/font', component: TextEditorDemo },
    { path: 'formats/colors', component: TextEditorDemo },
    // Structure
    { path: 'structure/heading', component: TextEditorDemo },
    { path: 'structure/blockquote', component: TextEditorDemo },
    { path: 'structure/list', component: TextEditorDemo },
    { path: 'structure/code-block', component: TextEditorDemo },
    { path: 'structure/horizontal-rule', component: TextEditorDemo },
    { path: 'structure/text-align', component: TextEditorDemo },
    // Content
    { path: 'content/link', component: TextEditorDemo },
    { path: 'content/image', component: TextEditorDemo },
    { path: 'content/document', component: TextEditorDemo },
    { path: 'content/table', component: TextEditorDemo },
    { path: 'content/mention', component: TextEditorDemo },
    // Utilities
    { path: 'utilities/history', component: TextEditorDemo },
    { path: 'utilities/navigator', component: TextEditorDemo },
    { path: 'utilities/print', component: TextEditorDemo },
    { path: 'utilities/events', component: TextEditorDemo },
    // Block mode
    { path: 'block', component: TextEditorDemo },
    { path: 'block/block-menu', component: TextEditorDemo },
    { path: 'block/slash-commands', component: TextEditorDemo },
    { path: 'block/complete', component: TextEditorDemo },
    // Plugins
    { path: 'plugins/architecture', component: TextEditorDemo },
    { path: 'plugins/uppercase', component: TextEditorDemo },
    { path: 'plugins/character-count', component: TextEditorDemo },
    // Reference
    { path: 'reference/api', component: TextEditorDemo },
    { path: 'reference/theming', component: TextEditorDemo },
    { path: 'reference/accessibility', component: TextEditorDemo }
];
