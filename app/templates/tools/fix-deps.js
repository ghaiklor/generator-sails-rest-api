#!/usr/bin/env node

var path = require('path'),
    chalk = require('chalk'),
    printMessage = require('print-message'),
    checkDependencies = require('dependency-check'),
    recursive = require('recursive-readdir');

recursive('./', ['node_modules'], function (error, files) {
    if (error) {
        console.error(error);
        return process.exit(1);
    }

    files = files.filter(function (file) {
        return file.split('.').pop() === 'js';
    });

    checkDependencies({
        path: path.resolve(__dirname, '../package.json'),
        entries: files
    }, function (error, data) {
        if (error) {
            console.error(error.message);
            return process.exit(1);
        }

        var pkg = data.package,
            dependencies = data.used,
            unusedDependencies = checkDependencies.extra(pkg, dependencies, {excludeDev: true}),
            missingDependencies = checkDependencies.missing(pkg, dependencies);

        if (unusedDependencies.length === 0 && missingDependencies.length === 0) {
            printMessage([
                "Checking dependencies successfully done",
                "Unused dependencies - " + chalk.green("Not Found"),
                "Missing dependencies - " + chalk.green("Not Found")
            ], {
                borderColor: 'green',
                marginTop: 0,
                marginBottom: 0
            });

            process.exit(0);
        }

        if (unusedDependencies.length !== 0) {
            printMessage([
                "Unused dependencies - " + unusedDependencies.join(', ')
            ], {
                borderColor: 'red',
                marginTop: 0,
                marginBottom: 0
            });
        }

        if (missingDependencies.length !== 0) {
            printMessage([
                "Missing dependencies - " + missingDependencies.join(', ')
            ], {
                borderColor: 'red',
                marginTop: 0,
                marginBottom: 0
            });
        }

        process.exit(1);
    });
});
