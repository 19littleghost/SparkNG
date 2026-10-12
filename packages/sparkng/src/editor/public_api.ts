/**
 * Public API Surface of @bdspark/sparkng/editor
 */

// Types & Contracts
export * from '@bdspark/sparkng/types/editor';

// Context Tokens & Injection Functions
export * from './context/editor.context';

// Engine Utilities
export * from './engine/editor-engine';
export * from './engine/markdown-rules';
export * from './engine/block-parser';

// Plugin System
export * from './plugins/editor-plugin';

// Compound Components
export * from './components/root/editor-root';
export * from './components/toolbar/editor-toolbar';
export * from './components/toolbar/editor-context-toolbar';
export * from './components/content/editor-content';
export * from './components/block/editor-block-controls';
export * from './components/block/editor-block-menu';
export * from './components/block/editor-slash-menu';
export * from './components/overlays/editor-mention-menu';
export * from './components/overlays/editor-table-controls';
export * from './components/overlays/editor-navigator';
export * from './components/overlays/editor-upload';
export * from './components/definitions/editor-definitions';
export * from './components/ui/editor-ui';

// Modules
export * from './modules/editor.module';
export * from './modules/editor-ui.module';

// Styling
export * from './style/editorstyle';

// Legacy Component
export * from './editor';
