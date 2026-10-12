import { EditorHeadingItem, TextEditorCommands, TextEditorState } from '@bdspark/sparkng/types/editor';

/**
 * Creates default formatting state
 */
export function createDefaultEditorState(): TextEditorState {
    return {
        bold: false,
        italic: false,
        underline: false,
        strikethrough: false,
        subscript: false,
        superscript: false,
        code: false,
        heading: null,
        blockquote: false,
        bulletList: false,
        orderedList: false,
        taskList: false,
        codeBlock: false,
        align: 'left',
        color: null,
        background: null,
        font: null,
        fontSize: null,
        link: null,
        inTable: false,
        canUndo: false,
        canRedo: false,
        invisibleCharacters: false,
        focusMode: false,
        selectionEmpty: true,
        selectedText: ''
    };
}

/**
 * Extracts headings from an HTML string to generate navigator outline
 */
export function extractHeadingsFromHTML(html: string): EditorHeadingItem[] {
    if (!html || typeof html !== 'string') return [];
    const headings: EditorHeadingItem[] = [];
    const regex = /<h([1-6])[^>]*>(.*?)<\/h\1>/gi;
    let match;
    let index = 0;
    while ((match = regex.exec(html)) !== null) {
        const level = parseInt(match[1], 10);
        const text = match[2].replace(/<[^>]+>/g, '').trim();
        if (text) {
            headings.push({
                id: `heading-${index++}`,
                text,
                level
            });
        }
    }
    return headings;
}

/**
 * Pure TypeScript execution engine for TextEditor commands.
 * Handles DOM selection, document manipulation, and state computation.
 */
export class TextEditorEngine {
    private undoStack: string[] = [];
    private redoStack: string[] = [];
    private maxHistory = 50;

    constructor(private getContainer: () => HTMLElement | null) {}

    public saveSnapshot(html: string): void {
        if (this.undoStack.length === 0 || this.undoStack[this.undoStack.length - 1] !== html) {
            this.undoStack.push(html);
            if (this.undoStack.length > this.maxHistory) {
                this.undoStack.shift();
            }
            this.redoStack = [];
        }
    }

    public canUndo(): boolean {
        return this.undoStack.length > 1;
    }

    public canRedo(): boolean {
        return this.redoStack.length > 0;
    }

    public undo(): string | null {
        if (!this.canUndo()) return null;
        const current = this.undoStack.pop();
        if (current) {
            this.redoStack.push(current);
            return this.undoStack[this.undoStack.length - 1];
        }
        return null;
    }

    public redo(): string | null {
        if (!this.canRedo()) return null;
        const next = this.redoStack.pop();
        if (next) {
            this.undoStack.push(next);
            return next;
        }
        return null;
    }

    public executeCommand(command: string, value: any = null): boolean {
        const el = this.getContainer();
        if (!el || typeof document === 'undefined') return false;

        el.focus();

        try {
            switch (command) {
                case 'bold':
                case 'italic':
                case 'underline':
                case 'strikeThrough':
                case 'subscript':
                case 'superscript':
                case 'removeFormat':
                case 'insertUnorderedList':
                case 'insertOrderedList':
                case 'justifyLeft':
                case 'justifyCenter':
                case 'justifyRight':
                case 'justifyFull':
                case 'foreColor':
                case 'hiliteColor':
                case 'fontName':
                case 'insertHorizontalRule':
                    return document.execCommand(command, false, value);

                case 'formatBlock':
                    return document.execCommand('formatBlock', false, value);

                case 'createLink':
                    if (value) {
                        return document.execCommand('createLink', false, value);
                    } else {
                        return document.execCommand('unlink', false);
                    }

                case 'insertImage':
                    return document.execCommand('insertImage', false, value);

                case 'insertHTML':
                    return document.execCommand('insertHTML', false, value);

                default:
                    return false;
            }
        } catch {
            return false;
        }
    }

    public queryState(): TextEditorState {
        const state = createDefaultEditorState();
        if (typeof document === 'undefined') return state;

        const selection = window.getSelection();
        if (selection && !selection.isCollapsed) {
            state.selectionEmpty = false;
            state.selectedText = selection.toString();
        } else {
            state.selectionEmpty = true;
            state.selectedText = '';
        }

        try {
            state.bold = document.queryCommandState('bold');
            state.italic = document.queryCommandState('italic');
            state.underline = document.queryCommandState('underline');
            state.strikethrough = document.queryCommandState('strikeThrough');
            state.subscript = document.queryCommandState('subscript');
            state.superscript = document.queryCommandState('superscript');
            state.bulletList = document.queryCommandState('insertUnorderedList');
            state.orderedList = document.queryCommandState('insertOrderedList');

            if (document.queryCommandState('justifyLeft')) state.align = 'left';
            else if (document.queryCommandState('justifyCenter')) state.align = 'center';
            else if (document.queryCommandState('justifyRight')) state.align = 'right';
            else if (document.queryCommandState('justifyFull')) state.align = 'justify';

            const block = (document.queryCommandValue('formatBlock') || '').toLowerCase();
            if (block.startsWith('h')) {
                state.heading = parseInt(block.substring(1), 10) || null;
            } else if (block === 'blockquote') {
                state.blockquote = true;
            } else if (block === 'pre') {
                state.codeBlock = true;
            }

            state.canUndo = this.canUndo();
            state.canRedo = this.canRedo();
            state.inTable = this.getSelectedTableCell() !== null;
        } catch {
            // Document query commands fallback safely in non-browser/SSR environments
        }

        return state;
    }

    public insertTable(rows = 3, cols = 3): void {
        let html = '<table class="p-text-editor-table"><tbody>';
        for (let r = 0; r < rows; r++) {
            html += '<tr>';
            for (let c = 0; c < cols; c++) {
                html += r === 0 ? '<th>Header</th>' : '<td>Cell</td>';
            }
            html += '</tr>';
        }
        html += '</tbody></table><p><br></p>';
        this.executeCommand('insertHTML', html);
    }

    public lastSelectedTableCell: HTMLTableCellElement | null = null;

    public getSelectedTableCell(): HTMLTableCellElement | null {
        if (typeof window === 'undefined') return this.lastSelectedTableCell;
        const sel = window.getSelection();
        if (sel && sel.rangeCount > 0) {
            let node: Node | null = sel.anchorNode;
            const container = this.getContainer();
            let found = false;
            while (node && node !== container) {
                if (node.nodeName === 'TD' || node.nodeName === 'TH') {
                    this.lastSelectedTableCell = node as HTMLTableCellElement;
                    found = true;
                    return this.lastSelectedTableCell;
                }
                node = node.parentNode;
            }
            if (!found && node === container) {
                // Focused in editor content outside table
                this.lastSelectedTableCell = null;
            }
        }
        return this.lastSelectedTableCell;
    }

    public addTableRow(before = false): void {
        const cell = this.getSelectedTableCell();
        if (!cell) return;
        const row = cell.parentElement as HTMLTableRowElement;
        const table = row?.closest('table');
        if (!table || !row) return;

        const newRow = table.insertRow(before ? row.rowIndex : row.rowIndex + 1);
        const colCount = row.cells.length;
        for (let i = 0; i < colCount; i++) {
            const newCell = newRow.insertCell(i);
            newCell.innerHTML = '<br>';
        }
    }

    public addTableColumn(before = false): void {
        const cell = this.getSelectedTableCell();
        if (!cell) return;
        const colIndex = cell.cellIndex;
        const table = cell.closest('table');
        if (!table) return;

        for (let r = 0; r < table.rows.length; r++) {
            const row = table.rows[r];
            const isHeader = row.cells[0]?.nodeName === 'TH';
            const newCell = document.createElement(isHeader ? 'th' : 'td');
            newCell.innerHTML = isHeader ? 'Header' : '<br>';
            if (before) {
                row.insertBefore(newCell, row.cells[colIndex]);
            } else {
                if (colIndex + 1 < row.cells.length) {
                    row.insertBefore(newCell, row.cells[colIndex + 1]);
                } else {
                    row.appendChild(newCell);
                }
            }
        }
    }

    public deleteTableRow(): void {
        const cell = this.getSelectedTableCell();
        if (!cell) return;
        const row = cell.parentElement as HTMLTableRowElement;
        const table = row?.closest('table');
        if (!table || !row) return;

        if (table.rows.length <= 1) {
            table.remove();
        } else {
            row.remove();
        }
    }

    public deleteTableColumn(): void {
        const cell = this.getSelectedTableCell();
        if (!cell) return;
        const colIndex = cell.cellIndex;
        const table = cell.closest('table');
        if (!table) return;

        if (table.rows[0]?.cells.length <= 1) {
            table.remove();
            return;
        }

        for (let r = 0; r < table.rows.length; r++) {
            table.rows[r].deleteCell(colIndex);
        }
    }

    public deleteTable(): void {
        const cell = this.getSelectedTableCell();
        const table = cell?.closest('table');
        table?.remove();
    }

    public setFontSize(size: string): void {
        if (typeof window === 'undefined') return;
        const sel = window.getSelection();
        if (!sel || sel.rangeCount === 0 || sel.isCollapsed) return;
        const range = sel.getRangeAt(0);
        const span = document.createElement('span');
        span.style.fontSize = size;
        span.appendChild(range.extractContents());
        range.insertNode(span);
        sel.removeAllRanges();
        const newRange = document.createRange();
        newRange.selectNodeContents(span);
        sel.addRange(newRange);
    }

    public print(): void {
        const el = this.getContainer();
        if (!el || typeof document === 'undefined') return;
        const iframe = document.createElement('iframe');
        iframe.style.position = 'fixed';
        iframe.style.right = '0';
        iframe.style.bottom = '0';
        iframe.style.width = '0';
        iframe.style.height = '0';
        iframe.style.border = '0';
        document.body.appendChild(iframe);
        const doc = iframe.contentWindow?.document;
        if (doc) {
            doc.open();
            doc.write(`<!DOCTYPE html><html><head><title>Print Document</title><style>body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; color: #1f2937; line-height: 1.6; padding: 2rem; margin: 0; } table { border-collapse: collapse; width: 100%; margin: 1rem 0; } th, td { border: 1px solid #d1d5db; padding: 0.5rem 0.75rem; text-align: left; } th { background: #f3f4f6; font-weight: 600; } blockquote { border-left: 4px solid #3b82f6; margin: 1rem 0; padding-left: 1rem; color: #4b5563; } pre { background: #f3f4f6; padding: 1rem; border-radius: 6px; overflow-x: auto; font-family: monospace; } img { max-width: 100%; height: auto; } @media print { @page { margin: 1in; } }</style></head><body>${el.innerHTML}</body></html>`);
            doc.close();
            setTimeout(() => {
                iframe.contentWindow?.focus();
                iframe.contentWindow?.print();
                document.body.removeChild(iframe);
            }, 250);
        } else {
            document.body.removeChild(iframe);
        }
    }
}
