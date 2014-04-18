define(function () {

    'use strict';

    function replaceRegExp(regex, opt) {
        regex = regex.source;
        opt = opt || '';
        return function self(name, val) {
            if (!name) {
                return new RegExp(regex, opt);
            }

            val = val.source || val;
            val = val.replace(/(^|[^\[])\^/g, '$1');
            regex = regex.replace(name, val);

            return self;
        };
    }

    return replaceRegExp;
});
