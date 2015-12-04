/**
 * Step 2
 * Where you prompt users for options (where you'd call this.prompt()).
 */

import chalk from 'chalk';
import questions from '../questions';

export default {
  askWebServer: function () {
    let done = this.async()
    this.prompt(questions, answers => {
      this.answers = Object.assign(this.answers || { }, answers);
      done();
    });
  }
};
