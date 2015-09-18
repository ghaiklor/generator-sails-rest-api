/**
 * Step 2
 * Where you prompt users for options (where you'd call this.prompt()).
 */

import chalk from 'chalk';
import questions from '../questions';

export default function () {
  let done = this.async();

  this.log(chalk.yellow('\nConfiguration questions:'));
  this.prompt(questions, answers => {
    this.answers = Object.assign(this.answers || {}, answers);
    done();
  });
};
