define(function () {

    'use strict';

    function escapeHtml(str) {
        return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/'/g, '&#39;')
        .replace(/"/g, '&quot;');
    }

    return escapeHtml;
});
