'use strict'

/**
 * Step 8
 * Called last, cleanup, say good bye, etc
 */
const chalk = require('chalk')
const printMessage = require('print-message')
module.exports = function () {
  printMessage([
    `Your ${chalk.green('Trails')} Application has been created!`,
    `---`,
    `To start your application, run: ${chalk.red('npm start')}`
  ], {
    printFn: this.log
  })
}


