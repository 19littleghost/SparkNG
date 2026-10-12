import { Injectable } from '@angular/core';
import { style } from '@bdspark/sparkng-styles/editor';
import { BaseStyle } from '@bdspark/sparkng/base';

const classes = {
    root: ({ instance }: any) => [
        'p-editor p-component',
        {
            'p-invalid': instance?.invalid?.()
        }
    ],
    textEditorRoot: ({ instance }: any) => [
        'p-text-editor p-text-editor-root p-component',
        {
            'p-disabled': instance?.disabled?.(),
            'p-readonly': instance?.readonly?.()
        }
    ],
    toolbar: 'p-editor-toolbar p-text-editor-toolbar',
    content: 'p-editor-content p-text-editor-content',
    body: 'p-text-editor-body',
    contextToolbar: 'p-text-editor-context-toolbar',
    block: 'p-text-editor-block',
    blockContent: 'p-text-editor-block-content',
    blockControls: 'p-text-editor-block-controls',
    blockMenu: 'p-text-editor-popover-menu p-text-editor-block-menu',
    slashMenu: 'p-text-editor-popover-menu p-text-editor-slash-menu',
    mentionMenu: 'p-text-editor-popover-menu p-text-editor-mention-menu',
    navigator: 'p-text-editor-navigator'
};

@Injectable()
export class EditorStyle extends BaseStyle {
    name = 'editor';

    style = style;

    classes = classes;
}

/**
 * Editor groups a collection of contents in tabs and rich text editing surfaces.
 *
 * [Live Demo](https://sparkng.bdspark.com/editor/)
 *
 * @module editorstyle
 */
export enum EditorClasses {
    /**
     * Class name of the root element
     */
    root = 'p-editor',
    /**
     * Class name of the modern compound root
     */
    textEditorRoot = 'p-text-editor-root',
    /**
     * Class name of the toolbar element
     */
    toolbar = 'p-editor-toolbar',
    /**
     * Class name of the content element
     */
    content = 'p-editor-content',
    /**
     * Class name of the context toolbar
     */
    contextToolbar = 'p-text-editor-context-toolbar',
    /**
     * Class name of a block in block mode
     */
    block = 'p-text-editor-block',
    /**
     * Class name of the block controls hover bar
     */
    blockControls = 'p-text-editor-block-controls',
    /**
     * Class name of the slash command menu
     */
    slashMenu = 'p-text-editor-slash-menu',
    /**
     * Class name of the navigator outline
     */
    navigator = 'p-text-editor-navigator'
}

export interface EditorStyle extends BaseStyle {}
