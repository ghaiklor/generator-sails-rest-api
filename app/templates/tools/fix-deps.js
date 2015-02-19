#!/usr/bin/env node

var path = require('path'),
    spawn = require('child_process').spawn,
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
            console.error(error);
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
            printMessage([chalk.yellow("Unused dependencies"), chalk.yellow("---")].concat(unusedDependencies).concat([chalk.yellow("---"), chalk.yellow("Starting cleaning up...")]), {
                borderColor: 'red',
                marginTop: 0,
                marginBottom: 0
            });
            // TODO: cleaning up in package.json
        }

        if (missingDependencies.length !== 0) {
            printMessage([chalk.yellow("Missing dependencies"), chalk.yellow("---")].concat(missingDependencies).concat([chalk.yellow("---"), chalk.yellow("Starting installing...")]), {
                borderColor: 'red',
                marginTop: 0,
                marginBottom: 0
            });

            var npmInstall = spawn('npm', ['install', '--save'].concat(missingDependencies));
            npmInstall.stdout.pipe(process.stdout);
            npmInstall.stderr.pipe(process.stderr);
            npmInstall.on('close', process.exit);
        }
    });
});
