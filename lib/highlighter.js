define([
    './grammar/block',
    './grammar/inline',
    './util/escapeHtml',
    './util/unescapeHtml'
], function (block, inline, escapeHtml, unescapeHtml) {

    'use strict';

    function replaceGrammarEntry(entry, cap, context) {
        var replacer = entry.replacer;

        if (typeof replacer === 'function') {
            return replacer.apply(context, cap);
        }

        return cap[0].replace(entry.regExp, replacer);
    }

    function processGrammar(src, grammar, context) {
        var cap,
            out = '',
            x = 0,
            length = grammar.length,
            current,
            ok;

        // Process src until its empty
        do {
            ok = false;

            // Cycle through each grammar block
            for (x = 0; x < length; x += 1) {
                current = grammar[x];
                cap = current.regExp.exec(src);

                // If it matched, generate the output based on the replacer
                if (cap) {
                    src = src.substring(cap[0].length);
                    out += replaceGrammarEntry(current, cap, context);
                    ok = true;

                    break;
                }
            }

            // If no grammar was matched, there's something wrong
            // because all grammar fall-backs to the "text" one
            if (!ok) {
                throw new Error('Unable to find a suitable grammar entry');
            }
        } while (src);

        return out;
    }

    // ---------------------------------------------------------------

    function highlight(src, options) {
        var context;

        // Parse options
        options = options || {};
        options.inline = options.inline || inline;
        options.block = options.block || block;

        // Ensure context
        context = {
            inline: function (src) { return processGrammar(src, options.inline, context); },
            escape: escapeHtml
        };

        // Process block's grammar
        return processGrammar(src, options.block || block, context);
    }

    function unhighlight(src) {
        var regExp = /(<span class="md-[^"]+">|<\/span>)/gi;

        // Remove spans
        src = src.replace(regExp, '');

        // Return the unescaped source
        return unescapeHtml(src);
    }

    return {
        highlight: highlight,
        unhighlight: unhighlight,
        grammar: {
            block: block,
            inline: inline
        }
    };
});
