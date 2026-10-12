import { TextEditorPlugin, TextEditorPluginContext } from '@bdspark/sparkng/types/editor';

/**
 * Creates a reusable, framework-agnostic TextEditor plugin.
 * @param name Unique plugin namespace
 * @param install Function executed when editor mounts
 * @param options Optional plugin configuration
 */
export function defineTextEditorPlugin<TOptions = any>(
    name: string,
    install: (ctx: TextEditorPluginContext) => {
        commands?: Record<string, (...args: any[]) => any>;
    },
    options?: TOptions
): TextEditorPlugin<TOptions> {
    return {
        name,
        install,
        options
    };
}

/**
 * Built-in Uppercase Plugin
 * Transforms text case (upper, lower, title case).
 */
export const uppercasePlugin = defineTextEditorPlugin('uppercase', (ctx) => ({
    commands: {
        toUpper: () => {
            const text = ctx.getSelectedText();
            if (text) {
                ctx.replaceSelection(text.toUpperCase());
            }
        },
        toLower: () => {
            const text = ctx.getSelectedText();
            if (text) {
                ctx.replaceSelection(text.toLowerCase());
            }
        },
        toTitle: () => {
            const text = ctx.getSelectedText();
            if (text) {
                const title = text.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase());
                ctx.replaceSelection(title);
            }
        }
    }
}));

/**
 * Built-in Typography Plugin
 * Replaces arrows, dashes, smart quotes, ellipsis, and symbol shortcuts.
 */
export const typographyPlugin = defineTextEditorPlugin('typography', (ctx) => ({
    commands: {
        formatQuotes: () => {
            const text = ctx.getSelectedText();
            if (text) {
                const formatted = text
                    .replace(/"([^"]*)"/g, '“$1”')
                    .replace(/'([^']*)'/g, '‘$1’')
                    .replace(/--/g, '—')
                    .replace(/->/g, '→')
                    .replace(/<-/g, '←')
                    .replace(/\(c\)/gi, '©')
                    .replace(/\(r\)/gi, '®')
                    .replace(/\(tm\)/gi, '™')
                    .replace(/\.\.\./g, '…');
                ctx.replaceSelection(formatted);
            }
        }
    }
}));

/**
 * Built-in Character Count Plugin
 * Provides live counts of characters and words with optional limit check.
 */
export const characterCountPlugin = defineTextEditorPlugin<{ maxChars?: number }>('characterCount', (ctx) => {
    return {
        commands: {
            getCount: () => {
                const el = ctx.getEditorElement();
                const text = el ? el.innerText || '' : '';
                const trimmed = text.trim();
                const words = trimmed ? trimmed.split(/\s+/).length : 0;
                const characters = text.length;
                const maxChars = ctx.options?.maxChars;
                return {
                    characters,
                    words,
                    maxChars,
                    isOverLimit: maxChars ? characters > maxChars : false
                };
            }
        }
    };
});

/**
 * Built-in Emoji Plugin
 * Converts common shortcodes into emojis or inserts emojis.
 */
export const emojiPlugin = defineTextEditorPlugin('emoji', (ctx) => {
    const emojiMap: Record<string, string> = {
        ':smile:': '😄',
        ':heart:': '❤️',
        ':fire:': '🔥',
        ':thumbsup:': '👍',
        ':check:': '✅',
        ':star:': '⭐',
        ':rocket:': '🚀',
        ':sparkles:': '✨',
        ':eyes:': '👀',
        ':tada:': '🎉'
    };

    return {
        commands: {
            insertEmoji: (emoji: string) => {
                ctx.replaceSelection(emoji);
            },
            convertShortcodes: () => {
                const el = ctx.getEditorElement();
                if (!el) return;
                let html = el.innerHTML;
                for (const [code, emoji] of Object.entries(emojiMap)) {
                    html = html.split(code).join(emoji);
                }
                el.innerHTML = html;
            }
        }
    };
});

/**
 * Built-in Focus Plugin
 * Distraction-free focus mode that dims background elements.
 */
export const focusPlugin = defineTextEditorPlugin('focus', (ctx) => ({
    commands: {
        toggleFocus: () => {
            const el = ctx.getEditorElement()?.closest('.p-text-editor-root');
            if (el) {
                el.classList.toggle('p-text-editor-focus-mode');
            }
        },
        setFocus: (enabled: boolean) => {
            const el = ctx.getEditorElement()?.closest('.p-text-editor-root');
            if (el) {
                if (enabled) el.classList.add('p-text-editor-focus-mode');
                else el.classList.remove('p-text-editor-focus-mode');
            }
        }
    }
}));

/**
 * Built-in Invisible Characters Plugin
 * Highlights spaces, non-breaking spaces, and paragraph endings.
 */
export const invisibleCharactersPlugin = defineTextEditorPlugin('invisibleCharacters', (ctx) => ({
    commands: {
        toggleInvisibles: () => {
            const el = ctx.getEditorElement();
            if (el) {
                el.classList.toggle('p-text-editor-show-invisibles');
            }
        }
    }
}));

/**
 * Built-in Details Collapsible Block Plugin
 */
export const detailsPlugin = defineTextEditorPlugin('details', (ctx) => ({
    commands: {
        insertDetails: (summary = 'Toggle heading', content = 'Hidden content') => {
            const html = `<details class="p-text-editor-details"><summary>${summary}</summary><p>${content}</p></details><p><br></p>`;
            ctx.replaceSelection(html, true);
        }
    }
}));

/**
 * Built-in Code Highlight Plugin
 * Injects syntax highlighting classes or triggers Prism.js if available.
 */
export const codeHighlightPlugin = defineTextEditorPlugin<{ highlighter?: (code: string, lang: string) => string }>('codeHighlight', (ctx) => ({
    commands: {
        highlightAll: () => {
            const el = ctx.getEditorElement();
            if (!el || typeof window === 'undefined') return;
            const codeBlocks = el.querySelectorAll('pre code');
            codeBlocks.forEach((block) => {
                const globalPrism = (window as any).Prism;
                if (globalPrism && typeof globalPrism.highlightElement === 'function') {
                    globalPrism.highlightElement(block);
                }
            });
        }
    }
}));

/**
 * Built-in Translate Plugin
 * Provides an extensible hook for machine translation.
 */
export const translatePlugin = defineTextEditorPlugin<{
    translateFn?: (text: string, targetLang: string) => Promise<string>;
}>('translate', (ctx) => ({
    commands: {
        translateSelection: async (targetLang = 'es') => {
            const text = ctx.getSelectedText();
            if (!text) return;
            if (ctx.options?.translateFn) {
                const translated = await ctx.options.translateFn(text, targetLang);
                ctx.replaceSelection(translated);
            } else {
                const sampleDictionary: Record<string, string> = {
                    hello: 'hola',
                    world: 'mundo',
                    'good morning': 'buenos días',
                    welcome: 'bienvenido'
                };
                const lower = text.trim().toLowerCase();
                const translated = sampleDictionary[lower] || `[${targetLang.toUpperCase()}]: ${text}`;
                ctx.replaceSelection(translated);
            }
        }
    }
}));
