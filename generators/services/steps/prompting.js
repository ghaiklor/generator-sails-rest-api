/**
 * Step 2
 * Where you prompt users for options (where you'd call this.prompt()).
 *
 * Questions is required from ../questions folder.
 * Each of answers is mixin to this.answers attribute and available in templates as answers variable.
 */

var chalk = require('chalk');
var assign = require('../../app/util/assign.js');
var questions = require('../questions');

function _onSectionDone(done, answers) {
  this.answers = assign(this.answers, answers);
  done();
}

module.exports = {
  askServiceQuestions: function () {
    this.log(chalk.yellow('\nService questions:'));
    this.prompt(questions, _onSectionDone.bind(this, this.async()));
  }
};
