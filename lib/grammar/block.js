define(['../util/replaceRegExp'], function (replace) {

    'use strict';

    var grammar,
        tag;

    tag = '(?!.\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b';

    grammar = {
        newline: /^\n+/,
        code: /^(?: {4}[^\n]+\n*)+/,
        fences: /^ *(`{3,}|~{3,}) *(?:\S+)? *\n(?:[\s\S]+?)\s*\1 *(?:\n+|$)/,
        hr: /^((?: *[-*_]){3,} *)(\n+|$)/,
        heading: /^((#{1,6}) *[^\n]+ *#* *)(\n+|$)/,
        nptable: /^( *\S.*\|.*\n *[-:]+ *\|[-| :]*\n(?:.*\|.*(?:\n|$))*)(\n*)/,
        lheading: /^([^\n]+)(\n *(?:=|-){2,} *)(\n+|$)/,
        blockquote: /^( {0,3})(>+)([^\n]*)/,
        listitem: /^( *)([*+-]|\d+\.)( [\s\S]+?)(\n)/,
        html: /^( *(?:comment|closed|closing) *)(\n{2,}|\s*$)/,
        def: /^( *\[[^\]]+\]: *<?[^\s>]+>?(?: +["(][^\n]+[")])? *)(\n+|$)/,
        table: /^( *\|.+\n *\| *[-:]+[-| :]*\n(?: *\|.*(?:\n|$))*)(\n*)/,
        paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
        text: /^[^\n]+/
    };

    grammar.blockquote = replace(grammar.blockquote)
        ('def', grammar.def)
        ();

    grammar.html = replace(grammar.html)
        ('comment', /<!--[\s\S]*?-->/)
        ('closed', /<(tag)[\s\S]+?<\/\2>/)
        ('closing', /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)
        (/tag/g, tag)
        ('(?!',
            '(?!' +
            grammar.fences.source.replace('\\1', '\\3') + '|' +
            grammar.listitem.source + '|'
        )
        ();

    grammar.paragraph = replace(grammar.paragraph)
        ('hr', grammar.hr)
        ('heading', grammar.heading)
        ('lheading', grammar.lheading)
        ('blockquote', grammar.blockquote)
        ('tag', '<' + tag)
        ('def', grammar.def)
        ();

    return [
        {
            name: 'newline',
            regExp: grammar.newline,
            replacer: '$&'
        },
        {
            name: 'code',
            regExp: grammar.code,
            replacer: function (match) {
                var trailing = match.match(/\n+$/);

                if (!trailing) {
                    trailing = '';
                } else {
                    match = match.substring(0, trailing.index);
                    trailing = trailing[0];
                }

                return '<span class="md-bcode">' + this.escape(match) + '</span>' + trailing;
            }
        },
        {
            name: 'fences',
            regExp: grammar.fences,
            replacer: '<span class="md-code">$&</span>'
        },
        {
            name: 'heading',
            regExp: grammar.heading,
            replacer: function (match, text, symbols, ts) {
                return '<span class="md-heading md-heading-' + symbols.length + '">' +
                         this.inline(text) +
                       '</span>' +
                       (ts || '');
            }
        },
        {
            name: 'nptable',
            regExp: grammar.nptable,
            replacer: function (matched, table, ts) {
                return '<span class="md-table">' +
                  this.inline(table) +
                '</span>' +
                ts;
            }
        },
        {
            name: 'lheading',
            regExp: grammar.lheading,
            replacer: function (match, text, symbols, ts) {
                var level = symbols.charAt(0) === '=' ? 1 : 2;

                return '<span class="md-heading md-heading-' + level + '">' +
                         this.inline(text) + symbols +
                       '</span>' +
                       (ts || '');
            }
        },
        {
            name: 'hr',
            regExp: grammar.hr,
            replacer: '<span class="md-hr">$1</span>$2'
        },
        {
            name: 'blockquote',
            regExp: grammar.blockquote,
            replacer: function (match, ls, symbol, text) {
                return '<span class="md-blockquote">' +
                          ls +
                          '<span class="md-blockquote-symbol">' + symbol + '</span>' +
                          this.inline(text) +
                        '</span>';
            }
        },
        {
            name: 'listitem',
            regExp: grammar.listitem,
            replacer: function (match, ls, symbol, text, ts) {
                return '<span class="md-listitem">' +
                          ls +
                          '<span class="md-listitem-symbol">' + symbol + '</span>' +
                          this.inline(text) +
                        '</span>' +
                        ts;
            }
        },
        {
            name: 'html',
            regExp: grammar.html,
            replacer: function (match, html) {
                return '<span class="md-html">' +
                         this.escape(html) +
                       '</span>' +
                       (arguments[arguments.length - 1] || '');
            }
        },
        {
            name: 'def',
            regExp: grammar.def,
            replacer: '<span class="md-def">$1</span>$2'
        },
        {
            name: 'table',
            regExp: grammar.table,
            replacer: function (matched, table, ts) {
                return '<span class="md-table">' +
                  this.inline(table) +
                '</span>' +
                ts;
            }
        },
        {
            name: 'paragraph',
            regExp: grammar.paragraph,
            replacer: function (match) {
                return this.inline(match);
            }
        },
        {
            name: 'text',
            regExp: grammar.text,
            replacer: function (match) {
                return this.inline(match);
            }
        }
    ];
});
