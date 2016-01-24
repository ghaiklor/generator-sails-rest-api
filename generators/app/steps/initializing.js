"use strict";

/**
 * Step 1
 * Your initialization methods (checking current project state, getting configs, etc)
 */

const chalk = require('chalk');
const updateNotifier = require('update-notifier');
const printMessage = require('print-message');
const yosay = require('yosay');

function _onUpdateNotifier(done, error, update) {
  if (update && update.type !== 'latest') {
    printMessage([
      'Update available: ' + chalk.green.bold(update.latest) + chalk.dim(' (current: ' + update.current + ')'),
      'Run ' + chalk.blue('npm update -g ' + update.name) + ' to update.'
    ], {
      printFn: this.log
    });
  }

  done();
}

module.exports = {
  loadPackageInfo: function () {
    this.pkg = require('../../../package.json');
  },

  sayHello: function () {
    this.log(yosay('Welcome to the laudable ' + chalk.red('Sails REST API') + ' generator!'));
  },

  checkUpdates: function () {
    if (!this.options['skip-update']) {
      this.log(chalk.yellow('Checking for updates...'));
      updateNotifier({
        pkg: this.pkg,
        callback: _onUpdateNotifier.bind(this, this.async())
      });
    }
  }
}
