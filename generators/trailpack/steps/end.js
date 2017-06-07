const chalk = require('chalk')
const printMessage = require('print-message')

module.exports = {
  createNew () {
    if (!this.options['new']) return

    printMessage([
      `Your new Trailpack ${chalk.green(this.options.packName)} has been created!`,
      '---',
      'Documentation:',
      `   Trailpack Guide: ${chalk.cyan('https://trailsjs.io/doc/en/extend/trailpack')}`,
      `   API Reference: ${chalk.cyan('https://trailsjs.io/doc/en/ref/trailpack')}`
    ], { printFn: this.log })
  }
}
