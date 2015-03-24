#!/usr/bin/env node

var chalk = require('chalk');
var npmCheck = require('npm-check');
var update = require('npm-check/lib/update');

console.log(chalk.yellow("Start checking package.json for updates, please wait..."));

npmCheck({
  global: false,
  update: true,
  skipUnused: false,
  ignoreDev: false,
  path: process.cwd(),
  debug: true
}).then(function (data) {
  update(data, {debug: false});
}).catch(function (error) {
  console.error(error.stack || error);
  process.exit(1);
}).done();
