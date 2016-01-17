/**
 * Step 1
 * Your initialization methods (checking current project state, getting configs, etc)
 */

import chalk from 'chalk'
import updateNotifier from 'update-notifier'
import printMessage from 'print-message'
import yosay from 'yosay'

function _onUpdateNotifier(done, error, update) {
  if (update && update.type !== 'latest') {
    printMessage([
      'Update available: ' + chalk.green.bold(update.latest) + chalk.dim(' (current: ' + update.current + ')'),
      'Run ' + chalk.blue('npm update -g ' + update.name) + ' to update.'
    ], {
      printFn: this.log
    })
  }

  done()
}

export default {
  loadPackageInfo: function () {
    this.pkg = require('../../../package.json')
  },

  sayHello: function () {
    this.log()
    this.log('Get ready to blaze a new ' + chalk.green('Trails Application') + '!')
    this.log()
  },

  checkUpdates: function () {
    if (!this.options['skip-update']) {
      this.log(chalk.yellow('Checking for updates...'))
      updateNotifier({
        pkg: this.pkg,
        callback: _onUpdateNotifier.bind(this, this.async())
      })
    }
  }
}
