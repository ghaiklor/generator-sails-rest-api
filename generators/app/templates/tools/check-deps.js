#!/usr/bin/env node

var path = require('path');
var spawn = require('child_process').spawn;
var printMessage = require('print-message');
var checkDependencies = require('dependency-check');
var recursive = require('recursive-readdir');

console.log("Start fixing package.json, please wait...");

recursive('./', ['node_modules'], function (error, files) {
  if (error) {
    console.error(error.stack || error);
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
      console.error(error.stack || error);
      return process.exit(1);
    }

    var pkg = data.package;
    var dependencies = data.used;
    var unusedDependencies = checkDependencies.extra(pkg, dependencies, {excludeDev: true});
    var missingDependencies = checkDependencies.missing(pkg, dependencies);

    if (unusedDependencies.length === 0 && missingDependencies.length === 0) {
      printMessage([
        "Checking dependencies successfully done",
        "---",
        "Unused dependencies - " + "Not Found",
        "Missing dependencies - " + "Not Found"
      ], {
        borderColor: 'green',
        marginTop: 0,
        marginBottom: 0
      });

      process.exit(0);
    }

    if (unusedDependencies.length !== 0) {
      printMessage(["Unused dependencies", "---"].concat(unusedDependencies).concat(["---", "Starting cleaning up..."]), {
        borderColor: 'red',
        marginTop: 0,
        marginBottom: 0
      });

      // TODO: cleaning up in package.json

    }

    if (missingDependencies.length !== 0) {
      printMessage(["Missing dependencies", "---"].concat(missingDependencies).concat(["---", "Start installing, please wait..."]), {
        borderColor: 'red',
        marginTop: 0,
        marginBottom: 0
      });

      var npmInstall = spawn('npm', ['install', '--save', '--color', 'always'].concat(missingDependencies));
      npmInstall.stdout.pipe(process.stdout);
      npmInstall.stderr.pipe(process.stderr);
      npmInstall.on('close', process.exit);
    }
  });
});
