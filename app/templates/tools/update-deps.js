#!/usr/bin/env node

var npmCheck = require('npm-check'),
    update = require('npm-check/lib/update');

console.log(chalk.yellow("\nStart checking package.json for updates, please wait...\n"));

npmCheck({
    update: true
}).then(function (data) {
    // TODO: expand with more params to update()
    update(data, {});
}).done();
