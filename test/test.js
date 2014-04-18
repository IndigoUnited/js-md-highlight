/*global describe, it*/

define([
    'expect',
    'lib/highlighter',
    './files/index'
], function (expect, highlighter, files) {

    'use strict';

    describe('files', function () {
        files.forEach(function (file) {
            it('should have the expected result for "' + file.name + '"', function () {
                expect(highlighter.highlight(file.md)).to.equal(file.hg);
                expect(highlighter.unhighlight(file.hg)).to.equal(file.md);
            });
        });
    });
});
