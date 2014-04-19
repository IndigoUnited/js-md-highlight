define(['../util/replaceRegExp'], function (replace) {

    'use strict';

    var grammar,
        inside,
        href;

    grammar = {
        escape: /^\\([\\`*{}\[\]()#+\-.!_>~|])/,
        autolink: /^<(?:[^ >]+(?:@|:\/)[^ >]+)>/,
        url: /^https?:\/\/[^\s<]+[^<.,:;"')\]\s]/,
        tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
        link: /^(!?\[)(inside)(\]\(href\))/,
        reflink: /^(!?\[)(inside)(\]\s*\[[^\]]*\])/,
        nolink: /^!?\[(?:\[[^\]]*\]|[^\[\]])*\]/,
        strong: /^(__)(?=\S)([\s\S]*?\S)(__)(?!_)|^(\*\*)(?=\S)([\s\S]*?\S)(\*\*)(?!\*)/,
        em: /^(_)(?=\S)([\s\S]*?\S)(_)(?!_)|^(\*)(?=\S)([\s\S]*?\S)(\*)(?!\*)/,
        code: /^(`+)\s*[\s\S]*?[^`]\s*\1(?!`)/,
        br: /^ {2,}\n(?!\s*$)/,
        del: /^(~~)(?=\S)([\s\S]*?\S)(~~)/,
        text: /^[\s\S]+?(?=[\\<!\[_*`~]|https?:\/\/| {2,}\n|$)/
    };

    inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;
    href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;

    grammar.link = replace(grammar.link)
        ('inside', inside)
        ('href', href)
        ();

    grammar.reflink = replace(grammar.reflink)
        ('inside', inside)
        ();

    return [
        {
            name: 'escape',
            regExp: grammar.escape,
            replacer: function (match) {
                return this.escape(match);
            }
        },
        {
            name: 'autolink',
            regExp: grammar.autolink,
            replacer: function (match) {
                return '<span class="md-autolink">' +
                         this.escape(match) +
                       '</span>';
            }
        },
        {
            name: 'url',
            regExp: grammar.url,
            replacer: function (match) {
                return '<span class="md-url">' +
                         this.escape(match) +
                       '</span>';
            }
        },
        {
            name: 'tag',
            regExp: grammar.tag,
            replacer: function (match) {
                return this.escape(match);
            }
        },
        {
            name: 'link',
            regExp: grammar.link,
            replacer: function (match, start, text, end) {
                return '<span class="md-link">' +
                         start + this.inline(text) + end +
                       '</span>';
            }
        },
        {
            name: 'reflink',
            regExp: grammar.reflink,
            replacer: function (match, start, text, end) {
                return '<span class="md-reflink">' +
                         start + this.inline(text) + end +
                       '</span>';
            }
        },
        {
            name: 'nolink',
            regExp: grammar.nolink,
            replacer: '<span class="md-nolink">$&</span>'
        },
        {
            name: 'strong',
            regExp: grammar.strong,
            replacer: function (match, lsymbol, text, tsymbol, lsymbol2, text2, tsymbol2) {
                return '<span class="md-strong">' +
                         (lsymbol2 || lsymbol) +
                         this.inline(text2 || text) +
                         (tsymbol2 || tsymbol) +
                       '</span>';
            }
        },
        {
            name: 'em',
            regExp: grammar.em,
            replacer: function (match, lsymbol, text, tsymbol, lsymbol2, text2, tsymbol2) {
                return '<span class="md-em">' +
                         (lsymbol2 || lsymbol) +
                         this.inline(text2 || text) +
                         (tsymbol2 || tsymbol) +
                       '</span>';
            }
        },
        {
            name: 'code',
            regExp: grammar.code,
            replacer: function (match) {
                return '<span class="md-icode">' +
                         this.escape(match) +
                       '</span>';
            }
        },
        {
            name: 'br',
            regExp: grammar.br,
            replacer: '$&'
        },
        {
            name: 'del',
            regExp: grammar.del,
            replacer: function (match, lsymbol, text, tsymbol) {
                return '<span class="md-del">' +
                         lsymbol + this.inline(text) + tsymbol +
                       '</span>';
            }
        },
        {
            name: 'text',
            regExp: grammar.text,
            replacer: function (match) {
                return this.escape(match);
            }
        }
    ];
});
