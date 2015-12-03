/**
 * Step 2
 * Where you prompt users for options (where you'd call this.prompt()).
 */

import chalk from 'chalk';
import questions from '../questions';

function askQuestions(title, questions, done) {
  this.log(chalk.yellow(`\n${title} questions:`));

  this.prompt(questions, answers => {
    this.answers = Object.assign(this.answers || {}, answers);
    done();
  });
}

export default {
  /*
  askApp: function () {
    askQuestions.call(this, 'Application', questions.app, this.async());
  }
  */
};
