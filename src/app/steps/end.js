/**
 * Step 8
 * Called last, cleanup, say good bye, etc
 */

import chalk from 'chalk';
import printMessage from 'print-message';

export default function () {
  printMessage([
    `Enjoy your ${chalk.green('Trails')} project!`,
    `---`,
    `To start your application, run: ${chalk.blue('npm start')}`
  ], {
    printFn: this.log
  });
};
