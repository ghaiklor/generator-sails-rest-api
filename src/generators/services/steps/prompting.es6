/**
 * Step 2
 * Where you prompt users for options (where you'd call this.prompt()).
 */

import chalk from 'chalk';
import questions from '../questions';

const _onSectionDone = (done, answers) => {
  this.answers = Object.assign(this.answers, answers);
  done();
};

export default {
  askServiceQuestions: function () {
    this.log(chalk.yellow('\nService questions:'));
    this.prompt(questions, _onSectionDone.bind(this, this.async()));
  }
};
