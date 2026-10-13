export const style = /*css*/ `
/* TextEditor: ProseMirror based rich text editor (headless parts) */
.p-texteditor {
    --p-texteditor-border-color: var(--p-content-border-color, #cbd5e1);
    --p-texteditor-background: var(--p-content-background, #ffffff);
    --p-texteditor-toolbar-bg: var(--p-content-background, #ffffff);
    --p-texteditor-color: var(--p-text-color, var(--p-content-color, #1e293b));
    --p-texteditor-muted-color: var(--p-text-muted-color, #64748b);
    --p-texteditor-hover-bg: var(--p-content-hover-background, #f1f5f9);
    --p-texteditor-active-bg: var(--p-content-background, #e2e8f0);
    --p-texteditor-primary: var(--p-primary-color, #3b82f6);
    --p-texteditor-primary-contrast: var(--p-primary-contrast-color, #ffffff);
    --p-texteditor-border-radius: var(--p-border-radius, 6px);
    --p-texteditor-focus-ring: var(--p-focus-ring-color, #3b82f6);
    --p-texteditor-overlay-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 3 / 0.1);
    --p-texteditor-selection-background: color-mix(in srgb, var(--p-primary-color, #3b82f6) 25%, transparent);
    --p-texteditor-code-bg: var(--p-content-background, #f1f5f9);
    --p-texteditor-font-size: 0.9375rem;

    position: relative;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    color: var(--p-texteditor-color);
    background: var(--p-texteditor-background);
    border: 1px solid var(--p-texteditor-border-color);
    border-radius: var(--p-texteditor-border-radius);
    overflow: visible;
    width: 100%;
    font-family: inherit;
}

.p-texteditor *,
.p-texteditor *::before,
.p-texteditor *::after {
    box-sizing: border-box;
}

.p-texteditor[data-disabled],
.p-texteditor[data-readonly] {
    opacity: 0.7;
}

.p-texteditor[data-disabled] .p-texteditor-content {
    pointer-events: none;
}

.p-texteditor[data-readonly] .p-texteditor-content {
    pointer-events: none;
}

/* Body (scroll container) */
.p-texteditor-body {
    position: relative;
    overflow: auto;
    flex: 1 1 auto;
    min-height: 80px;
    max-height: 640px;
    border-top: 1px solid var(--p-texteditor-border-color);
}

/* Toolbar surface */
.p-texteditor-toolbar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.25rem;
    padding: 0.5rem 0.75rem;
    background: var(--p-texteditor-toolbar-bg);
    border-bottom: 1px solid var(--p-texteditor-border-color);
}

.p-texteditor-body + .p-texteditor-toolbar {
    border-bottom: none;
    border-top: 1px solid var(--p-texteditor-border-color);
}

.p-texteditor-toolbar button,
.p-texteditor-toolbar select,
.p-texteditor-toolbar input {
    font: inherit;
    color: inherit;
    min-width: 2rem;
    height: 2rem;
    padding: 0 0.5rem;
    border: 1px solid transparent;
    border-radius: calc(var(--p-texteditor-border-radius) - 2px);
    background: transparent;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.375rem;
    transition: background-color 0.15s, border-color 0.15s;
}

.p-texteditor-toolbar select {
    min-width: 5.5rem;
    background: var(--p-texteditor-hover-bg);
}

.p-texteditor-toolbar button:hover:not(:disabled) {
    background: var(--p-texteditor-hover-bg);
}

.p-texteditor-toolbar button[aria-pressed='true'] {
    background: color-mix(in srgb, var(--p-texteditor-primary) 14%, transparent);
    color: var(--p-texteditor-primary);
}

.p-texteditor-toolbar button:disabled {
    opacity: 0.45;
    cursor: default;
}

.p-texteditor-toolbar button:focus-visible,
.p-texteditor-toolbar select:focus-visible {
    outline: 2px solid var(--p-texteditor-focus-ring);
    outline-offset: 1px;
}

/* Editable content */
.p-texteditor-content {
    min-height: 80px;
    padding: 0.75rem 1rem;
    outline: none;
    white-space: pre-wrap;
    word-wrap: break-word;
    font-size: var(--p-texteditor-font-size);
    line-height: 1.6;
}

.p-texteditor-content:focus-visible {
    outline: none;
}

.p-texteditor-content ::selection,
.p-texteditor-content::selection {
    background: rgba(59, 130, 246, 0.25);
    background: var(--p-texteditor-selection-background);
    color: var(--p-texteditor-color, inherit);
}

.p-texteditor-content > * + * {
    margin-top: 0.5rem;
}

.p-texteditor-content h1,
.p-texteditor-content h2,
.p-texteditor-content h3,
.p-texteditor-content h4,
.p-texteditor-content h5,
.p-texteditor-content h6 {
    margin: 1rem 0 0.5rem;
    line-height: 1.25;
    font-weight: 600;
}

.p-texteditor-content h1 {
    font-size: 1.75rem;
}
.p-texteditor-content h2 {
    font-size: 1.5rem;
}
.p-texteditor-content h3 {
    font-size: 1.25rem;
}
.p-texteditor-content h4 {
    font-size: 1.125rem;
}
.p-texteditor-content h5 {
    font-size: 1rem;
}
.p-texteditor-content h6 {
    font-size: 0.875rem;
}

.p-texteditor-content p {
    margin: 0;
}

.p-texteditor-content ul,
.p-texteditor-content ol {
    margin: 0.5rem 0;
    padding-inline-start: 1.5rem;
}

/* App-level resets (e.g. Tailwind preflight) strip list markers; restore them. */
.p-texteditor-content ul {
    list-style: disc;
}

.p-texteditor-content ol {
    list-style: decimal;
}

.p-texteditor-content li::marker {
    color: var(--p-texteditor-color);
}

.p-texteditor-content li > p {
    margin: 0;
}

.p-texteditor-content blockquote {
    margin: 0.5rem 0;
    padding: 0.25rem 0 0.25rem 0.75rem;
    border-inline-start: 3px solid var(--p-texteditor-primary);
    color: var(--p-texteditor-muted-color);
}

.p-texteditor-content code {
    padding: 0.125rem 0.375rem;
    border-radius: calc(var(--p-texteditor-border-radius) - 3px);
    background: var(--p-texteditor-code-bg);
    font-family: ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, monospace;
    font-size: 0.875em;
}

.p-texteditor-content pre {
    margin: 0.5rem 0;
    padding: 0.75rem 1rem;
    border-radius: calc(var(--p-texteditor-border-radius) - 2px);
    background: var(--p-texteditor-code-bg);
    overflow: auto;
}

.p-texteditor-content pre code {
    background: transparent;
    padding: 0;
}

.p-texteditor-content a {
    color: var(--p-texteditor-primary);
    text-decoration: underline;
}

.p-texteditor-content img {
    max-width: 100%;
    height: auto;
    border-radius: calc(var(--p-texteditor-border-radius) - 2px);
}

.p-texteditor-content hr {
    border: none;
    border-top: 1px solid var(--p-texteditor-border-color);
    margin: 1rem 0;
}

.p-texteditor-content table {
    border-collapse: collapse;
    margin: 0.5rem 0;
    table-layout: fixed;
    width: 100%;
    overflow: hidden;
}

.p-texteditor-content td,
.p-texteditor-content th {
    border: 1px solid var(--p-texteditor-border-color);
    padding: 0.375rem 0.625rem;
    vertical-align: top;
    position: relative;
    min-width: 40px;
}

.p-texteditor-content th {
    background: var(--p-texteditor-hover-bg);
    font-weight: 600;
    text-align: start;
}

.p-texteditor-content .column-resize-handle {
    position: absolute;
    inset-inline-end: -2px;
    top: 0;
    bottom: 0;
    width: 4px;
    background: var(--p-texteditor-primary);
}

.p-texteditor-content.resize-cursor {
    cursor: col-resize;
}

/* Placeholder (decoration-driven) */
.p-texteditor-content [data-placeholder] {
    position: relative;
}

.p-texteditor-content [data-placeholder]::before {
    content: attr(data-placeholder);
    position: absolute;
    inset-inline-start: 0;
    inset-block-start: 0;
    color: var(--p-texteditor-muted-color);
    pointer-events: none;
    float: left;
    height: 0;
}

/* Checklists */
.p-texteditor-content ul[data-p-checked-list] {
    list-style: none;
    padding-inline-start: 0.25rem;
}

.p-texteditor-content li[data-p-checked] {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
}

.p-texteditor-content li[data-p-checked] > .p-texteditor-check {
    flex: 0 0 auto;
    margin-top: 0.2rem;
    cursor: pointer;
}

.p-texteditor-content li[data-p-checked] > .p-texteditor-check input[type='checkbox'] {
    width: 1rem;
    height: 1rem;
    margin: 0;
    accent-color: var(--p-texteditor-primary);
    cursor: pointer;
}

.p-texteditor-content li[data-p-checked='true'] > .p-texteditor-check-content > p,
.p-texteditor-content li[data-p-checked='true'] > p {
    text-decoration: line-through;
    opacity: 0.6;
}

.p-texteditor-content li[data-p-checked] > .p-texteditor-check-content,
.p-texteditor-content li[data-p-checked] > p {
    flex: 1 1 auto;
    min-width: 0;
}

/* Mention chips */
.p-texteditor-content .p-texteditor-mention {
    display: inline-block;
    padding: 0.05rem 0.375rem;
    border-radius: 999px;
    background: color-mix(in srgb, var(--p-texteditor-primary) 14%, transparent);
    color: var(--p-texteditor-primary);
    font-weight: 500;
    white-space: nowrap;
}

.p-texteditor-content .p-texteditor-mention-typing,
.p-texteditor-content .p-texteditor-slash-typing {
    color: var(--p-texteditor-primary);
    background: color-mix(in srgb, var(--p-texteditor-primary) 10%, transparent);
    border-radius: 3px;
}

/* Floating surfaces */
.p-texteditor-context-toolbar,
.p-texteditor-popover-menu,
.p-texteditor-popover-submenu {
    position: absolute;
    z-index: 20;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 0.25rem;
    padding: 0.375rem 0.5rem;
    margin: 0;
    list-style: none;
    background: var(--p-texteditor-background);
    border: 1px solid var(--p-texteditor-border-color);
    border-radius: var(--p-texteditor-border-radius);
    box-shadow: var(--p-texteditor-overlay-shadow);
    flex-direction: column;
    animation: p-texteditor-overlay-in 0.12s ease-out;
}

.p-texteditor-context-toolbar {
    flex-direction: row;
    transform: translateY(-100%);
}

.p-texteditor-popover-menu button,
.p-texteditor-popover-menu [role='option'],
.p-texteditor-popover-submenu button,
.p-texteditor-context-toolbar button {
    all: unset;
    font: inherit;
    color: inherit;
    cursor: pointer;
    display: flex;
    align-items: center;
    width: 100%;
    min-height: 2rem;
    padding: 0.25rem 0.625rem;
    border-radius: calc(var(--p-texteditor-border-radius) - 3px);
    box-sizing: border-box;
}

.p-texteditor-context-toolbar button {
    width: auto;
    min-width: 2rem;
    justify-content: center;
}

.p-texteditor-popover-menu button:hover,
.p-texteditor-popover-menu [role='option']:hover,
.p-texteditor-popover-submenu button:hover,
.p-texteditor-context-toolbar button:hover {
    background: var(--p-texteditor-hover-bg);
}

.p-texteditor-popover-menu button:focus-visible,
.p-texteditor-popover-menu [role='option']:focus-visible,
.p-texteditor-popover-submenu button:focus-visible,
.p-texteditor-context-toolbar button:focus-visible {
    outline: 2px solid var(--p-texteditor-focus-ring);
    outline-offset: -2px;
}

.p-texteditor-context-toolbar-more {
    border-inline-start: 1px solid var(--p-texteditor-border-color);
    padding-inline-start: 0.375rem;
}

.p-texteditor-slash-menu,
.p-texteditor-mention-menu {
    min-width: 220px;
    max-height: 280px;
    overflow: auto;
}

.p-texteditor-popover-submenu {
    inset-inline-start: 100%;
    top: 0;
}

/* Table controls overlay */
.p-texteditor-table-overlay {
    position: absolute;
    z-index: 10;
    pointer-events: none;
}

.p-texteditor-table-trigger,
.p-texteditor-table-add {
    all: unset;
    position: absolute;
    pointer-events: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: var(--p-texteditor-primary);
    color: var(--p-texteditor-primary-contrast);
    font-size: 12px;
    line-height: 1;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.15s;
}

.p-texteditor-table-overlay:hover .p-texteditor-table-trigger,
.p-texteditor-table-overlay:hover .p-texteditor-table-add,
.p-texteditor-table-trigger:focus-visible,
.p-texteditor-table-add:focus-visible {
    opacity: 1;
}

.p-texteditor-table-trigger-col {
    top: -9px;
    left: calc(50% - 9px);
}

.p-texteditor-table-trigger-row {
    inset-inline-start: -9px;
    top: calc(50% - 9px);
}

.p-texteditor-table-add-col {
    inset-inline-end: -9px;
    top: calc(50% - 9px);
}

.p-texteditor-table-add-row {
    bottom: -9px;
    left: calc(50% - 9px);
}

.p-texteditor-table-selection-outline::after {
    content: '';
    position: absolute;
    inset: 0;
    border: 2px solid var(--p-texteditor-primary);
    pointer-events: none;
}

/* Block mode */
.p-texteditor[data-mode='block'] .p-texteditor-body > .p-texteditor-content > * {
    position: relative;
    padding: 0.125rem 3rem 0.125rem 0.5rem;
    border-radius: calc(var(--p-texteditor-border-radius) - 2px);
}

.p-texteditor-block-controls {
    position: absolute;
    z-index: 15;
    display: flex;
    align-items: center;
    gap: 2px;
    inset-inline-end: 0.5rem;
    transform: translateY(0);
}

.p-texteditor-block-controls button {
    all: unset;
    font: inherit;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: calc(var(--p-texteditor-border-radius) - 3px);
    color: var(--p-texteditor-muted-color);
    cursor: pointer;
}

.p-texteditor-block-controls button:hover {
    background: var(--p-texteditor-hover-bg);
    color: var(--p-texteditor-color);
}

.p-texteditor-block-drop-indicator {
    position: absolute;
    inset-inline: 0;
    height: 2px;
    background: var(--p-texteditor-primary);
    z-index: 15;
    pointer-events: none;
}

/* Navigator */
.p-texteditor-navigator {
    position: absolute;
    inset-inline-end: 0.25rem;
    top: 0.5rem;
    z-index: 15;
    display: flex;
    align-items: center;
    gap: 2px;
    padding: 0.25rem;
    border-radius: var(--p-texteditor-border-radius);
    background: var(--p-texteditor-background);
    border: 1px solid var(--p-texteditor-border-color);
    box-shadow: var(--p-texteditor-overlay-shadow);
    cursor: pointer;
}

.p-texteditor-navigator:focus-visible {
    outline: 2px solid var(--p-texteditor-focus-ring);
    outline-offset: 1px;
}

.p-texteditor-navigator-popover {
    min-width: 220px;
    max-height: 300px;
    overflow: auto;
}

.p-texteditor-navigator-bar {
    display: block;
    height: 2px;
    border-radius: 1px;
    background: var(--p-texteditor-border-color);
    margin-block: 0.375rem;
}

.p-texteditor-navigator-bar[data-level='1'] {
    width: 100%;
}
.p-texteditor-navigator-bar[data-level='2'] {
    width: 80%;
    margin-inline-start: 10%;
}
.p-texteditor-navigator-bar[data-level='3'] {
    width: 60%;
    margin-inline-start: 20%;
}

/* Upload surfaces */
.p-texteditor-upload {
    position: absolute;
    z-index: 25;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 260px;
    background: var(--p-texteditor-background);
    border: 1px solid var(--p-texteditor-border-color);
    border-radius: var(--p-texteditor-border-radius);
    box-shadow: var(--p-texteditor-overlay-shadow);
    padding: 1rem;
}

.p-texteditor-upload-dropzone {
    border: 1px dashed var(--p-texteditor-border-color);
    border-radius: calc(var(--p-texteditor-border-radius) - 2px);
    padding: 1.25rem;
    text-align: center;
    color: var(--p-texteditor-muted-color);
    cursor: pointer;
}

.p-texteditor-upload-dropzone:hover {
    background: var(--p-texteditor-hover-bg);
}

.p-texteditor-upload-progress {
    margin-top: 0.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
}

.p-texteditor-upload-progress-bar {
    height: 4px;
    border-radius: 2px;
    background: var(--p-texteditor-hover-bg);
    overflow: hidden;
}

.p-texteditor-upload-progress-bar > div {
    height: 100%;
    background: var(--p-texteditor-primary);
    transition: width 0.2s ease;
}

/* Helpers */
.p-texteditor-hidden-input {
    display: none;
}

@keyframes p-texteditor-overlay-in {
    from {
        opacity: 0;
        transform: translateY(-96%) scale(0.98);
    }
    to {
        opacity: 1;
    }
}

@media (prefers-reduced-motion: reduce) {
    .p-texteditor-context-toolbar,
    .p-texteditor-popover-menu,
    .p-texteditor-popover-submenu {
        animation: none;
    }
}
`;
