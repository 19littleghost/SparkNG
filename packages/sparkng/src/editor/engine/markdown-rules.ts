/**
 * Real-time Markdown Input Rules Engine.
 * Converts markdown triggers (e.g. "# ", "- ", "> ") on typing into rich elements.
 */
export interface MarkdownRuleMatch {
    type: 'heading' | 'bulletList' | 'orderedList' | 'blockquote' | 'codeBlock' | 'horizontalRule' | 'taskList';
    level?: number;
    replaceLength: number;
}

export function matchMarkdownTrigger(lineText: string): MarkdownRuleMatch | null {
    if (!lineText) return null;

    // Headings: "# ", "## ", "### ", etc.
    const headingMatch = lineText.match(/^(#{1,6})\s$/);
    if (headingMatch) {
        return {
            type: 'heading',
            level: headingMatch[1].length,
            replaceLength: headingMatch[0].length
        };
    }

    // Bullet List: "- ", "* ", "+ "
    if (/^[-*+]\s$/.test(lineText)) {
        return {
            type: 'bulletList',
            replaceLength: 2
        };
    }

    // Ordered List: "1. "
    if (/^\d+\.\s$/.test(lineText)) {
        return {
            type: 'orderedList',
            replaceLength: lineText.length
        };
    }

    // Task List / Checklist: "[] " or "[ ] "
    if (/^\[\s?\]\s$/.test(lineText)) {
        return {
            type: 'taskList',
            replaceLength: lineText.length
        };
    }

    // Blockquote: "> "
    if (/^>\s$/.test(lineText)) {
        return {
            type: 'blockquote',
            replaceLength: 2
        };
    }

    // Code Block: "```"
    if (/^```$/.test(lineText)) {
        return {
            type: 'codeBlock',
            replaceLength: 3
        };
    }

    // Horizontal Rule: "---"
    if (/^---$/.test(lineText)) {
        return {
            type: 'horizontalRule',
            replaceLength: 3
        };
    }

    return null;
}
