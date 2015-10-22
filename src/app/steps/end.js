/**
 * Step 8
 * Called last, cleanup, say good bye, etc
 */

import chalk from 'chalk';
import printMessage from 'print-message';

export default function () {
  printMessage([
    'Enjoy your Sails REST API project!',
    '---',
    'Start developing with creating models',
    chalk.blue('yo sails-rest-api:model')
  ]);
};
