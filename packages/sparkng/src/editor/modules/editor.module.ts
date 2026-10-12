import { NgModule } from '@angular/core';
import { SharedModule } from '@bdspark/sparkng/api';
import { TextEditorBlockControls } from '../components/block/editor-block-controls';
import { TextEditorBlockMenu, TextEditorBlockSubmenu } from '../components/block/editor-block-menu';
import { TextEditorSlashMenu } from '../components/block/editor-slash-menu';
import { TextEditorContent } from '../components/content/editor-content';
import {
    TextEditorBlockControlsDef,
    TextEditorBlockMenuDef,
    TextEditorBlockSubmenuDef,
    TextEditorContextToolbarDef,
    TextEditorContextToolbarMoreDef,
    TextEditorDocumentUploadDef,
    TextEditorImageUploadDef,
    TextEditorMentionMenuDef,
    TextEditorNavigatorMenuDef,
    TextEditorNavigatorTriggerDef,
    TextEditorSlashMenuDef,
    TextEditorTableControlsDef,
    TextEditorToolbarDef
} from '../components/definitions/editor-definitions';
import { TextEditorMentionMenu } from '../components/overlays/editor-mention-menu';
import { TextEditorNavigator, TextEditorNavigatorMenu, TextEditorNavigatorTrigger } from '../components/overlays/editor-navigator';
import { TextEditorTableControls } from '../components/overlays/editor-table-controls';
import { TextEditorDocumentUpload, TextEditorImageUpload } from '../components/overlays/editor-upload';
import { TextEditorRoot } from '../components/root/editor-root';
import { TextEditorContextToolbar, TextEditorContextToolbarMore } from '../components/toolbar/editor-context-toolbar';
import { TextEditorToolbar } from '../components/toolbar/editor-toolbar';
import { EditorBlockControlsUI, EditorContextToolbarUI, EditorToolbarUI } from '../components/ui/editor-ui';
import { Editor } from '../editor';

const TEXT_EDITOR_COMPONENTS = [
    // Legacy Component
    Editor,

    // Compound Root & Content
    TextEditorRoot,
    TextEditorContent,

    // Toolbars
    TextEditorToolbar,
    TextEditorContextToolbar,
    TextEditorContextToolbarMore,

    // Block Mode
    TextEditorBlockControls,
    TextEditorBlockMenu,
    TextEditorBlockSubmenu,
    TextEditorSlashMenu,

    // Overlays
    TextEditorMentionMenu,
    TextEditorTableControls,
    TextEditorNavigator,
    TextEditorNavigatorTrigger,
    TextEditorNavigatorMenu,
    TextEditorImageUpload,
    TextEditorDocumentUpload,

    // Slot Directives (*Def)
    TextEditorToolbarDef,
    TextEditorContextToolbarDef,
    TextEditorContextToolbarMoreDef,
    TextEditorBlockControlsDef,
    TextEditorBlockMenuDef,
    TextEditorBlockSubmenuDef,
    TextEditorSlashMenuDef,
    TextEditorMentionMenuDef,
    TextEditorTableControlsDef,
    TextEditorNavigatorMenuDef,
    TextEditorNavigatorTriggerDef,
    TextEditorImageUploadDef,
    TextEditorDocumentUploadDef,

    // Default UI Components
    EditorToolbarUI,
    EditorContextToolbarUI,
    EditorBlockControlsUI
];

@NgModule({
    imports: [...TEXT_EDITOR_COMPONENTS, SharedModule],
    exports: [...TEXT_EDITOR_COMPONENTS, SharedModule]
})
export class EditorModule {}
