/**
 * Block Mode serialization and type extraction.
 */

export interface ParsedBlock {
    id: string;
    type: string;
    html: string;
}

/**
 * Extracts the block type from an individual HTML block string
 */
export function getBlockTypeFromHTML(html: string): string {
    if (!html) return 'paragraph';
    const tagMatch = html.match(/<([a-z0-9]+)/i);
    if (!tagMatch) return 'paragraph';

    const tag = tagMatch[1].toLowerCase();
    switch (tag) {
        case 'h1':
            return 'heading-1';
        case 'h2':
            return 'heading-2';
        case 'h3':
            return 'heading-3';
        case 'h4':
            return 'heading-4';
        case 'blockquote':
            return 'blockquote';
        case 'pre':
            return 'code-block';
        case 'ul':
            return html.includes('data-p-checked') ? 'task-list' : 'bullet-list';
        case 'ol':
            return 'ordered-list';
        case 'table':
            return 'table';
        case 'hr':
            return 'horizontal-rule';
        default:
            return 'paragraph';
    }
}

/**
 * Splits an HTML string into an array of block HTML strings
 */
export function htmlToBlocks(html: string): string[] {
    if (!html || typeof html !== 'string') return ['<p><br></p>'];

    // Split top-level block elements
    const blockRegex = /<(p|h[1-6]|blockquote|pre|ul|ol|table|hr)(?:[^>]*)>[\s\S]*?<\/\1>|<hr[^>]*\/?>/gi;
    const matches = html.match(blockRegex);
    if (matches && matches.length > 0) {
        return matches;
    }

    return [html.trim() ? `<p>${html}</p>` : '<p><br></p>'];
}

/**
 * Combines an array of blocks back into a single HTML string
 */
export function blocksToHTML(blocks: string[]): string {
    if (!blocks || !Array.isArray(blocks) || blocks.length === 0) {
        return '<p><br></p>';
    }
    return blocks.join('\n');
}
