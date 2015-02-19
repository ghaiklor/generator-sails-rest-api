#!/usr/bin/env node

var npmCheck = require('npm-check'),
    update = require('npm-check/lib/update');

npmCheck({
    update: true
}).then(function (data) {
    update(data, {});
}).done();
