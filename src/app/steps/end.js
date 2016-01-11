/**
 * Step 8
 * Called last, cleanup, say good bye, etc
 */

import chalk from 'chalk'
import printMessage from 'print-message'

export default function () {
  printMessage([
    `Your ${chalk.green('Trails')} Application has been created!`,
    `---`,
    `To start your application, run: ${chalk.red('npm start')}`
  ], {
    printFn: this.log
  })
}
