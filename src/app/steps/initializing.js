/**
 * Step 1
 * Your initialization methods (checking current project state, getting configs, etc)
 */

import chalk from 'chalk';
import updateNotifier from 'update-notifier';
import printMessage from 'print-message';
import yosay from 'yosay';

function _onUpdateNotifier(done, error, update) {
  if (error) {
    console.error(error.stack || error);
    return process.exit(1);
  }

  if (update && update.type !== 'latest') {
    printMessage([
      'Update available: ' + chalk.green.bold(update.latest) + chalk.dim(' (current: ' + update.current + ')'),
      'Run ' + chalk.blue('npm update -g ' + update.name) + ' to update.'
    ]);

    process.exit(0);
  } else {
    this.log(chalk.yellow('OK... You are using the latest version ' + chalk.green.bold(update.current)));
    done();
  }
}

export default {
  /**
   * Load package.json
   */
  loadPackageInfo: function () {
    this.pkg = require('../../../package.json');
  },

  /**
   * Say yeoman hello
   */
  sayHello: function () {
    this.log(yosay('Welcome to the laudable ' + chalk.red('Sails REST API') + ' generator!'));
  },

  /**
   * Notify about updates of generator-sails-rest-api
   */
  notifyAboutGeneratorUpdate: function () {
    if (!this.options['skip-update']) {
      this.log(chalk.yellow('Checking for updates...'));
      updateNotifier({
        pkg: this.pkg,
        callback: _onUpdateNotifier.bind(this, this.async())
      });
    }
  }
};
