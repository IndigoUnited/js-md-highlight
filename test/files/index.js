define([
    'require',
    'text!./mou.md',
    'text!./mou.hg.md'
], function (require) {

    'use strict';

    return [
        {
            name: 'mou.md',
            md: require('text!./mou.md'),
            hg: require('text!./mou.hg.md')
        }
    ];
});
