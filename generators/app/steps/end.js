/**
 * Step 8
 * Called last, cleanup, say good bye, etc
 */

var chalk = require('chalk');
var printMessage = require('print-message');

module.exports = {
  /**
   * Say warning that this generator is under development
   */
  sayUnderDevelopmentWarning: function () {
    // TODO: remove when will be stable version
    printMessage([
      'This generator under heavy development!',
      'Services may be not working, but everything else is working :)',
      'If you found any bugs or have proposals, feel free to create issue',
      chalk.red(this.pkg.bugs.url),
      'Or you can write me the letter',
      chalk.red(this.pkg.bugs.email)
    ]);
  }
};
