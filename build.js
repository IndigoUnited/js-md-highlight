/*jshint node:true*/

'use strict';

var nodefy = require('nodefy');

nodefy.batchConvert('lib/**/*.js', 'lib', function (err) {
    if (err) {
        throw err;
    }

    console.log('Conversion to CommonJS done!');
});
