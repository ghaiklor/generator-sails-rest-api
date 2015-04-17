/**
 * Step 2
 * Where you prompt users for options (where you'd call this.prompt()).
 *
 * Questions is required from ../questions folder.
 * Each of answers is mixin to this.answers attribute and available in templates as answers variable.
 */

var chalk = require('chalk');
var assign = require('../util').assign;
var questions = require('../questions');

/**
 * Triggers when user finishes answering to questions from section
 * @param {Function} done
 * @param {Object} answers
 * @private
 */
function _onSectionDone(done, answers) {
  this.answers = assign(this.answers, answers);
  done();
}

module.exports = {
  /**
   * Ask database questions
   */
  askDatabaseQuestions: function () {
    this.log(chalk.yellow('\nDatabase questions:'));
    this.prompt(questions.database, _onSectionDone.bind(this, this.async()));
  },

  /**
   * Ask application questions
   */
  askApplicationQuestions: function () {
    this.log(chalk.yellow('\nApplication questions:'));
    this.prompt(questions.application, _onSectionDone.bind(this, this.async()));
  },

  // TODO: uncomment when will be done
  ///**
  // * Ask services questions
  // */
  //askServiceQuestions: function () {
  //  this.log(chalk.yellow('\nService questions:'));
  //  this.prompt(questions.services, _onSectionDone.bind(this, this.async()));
  //},

  /**
   * Print generated answers object if in verbose mode
   */
  printAnswersObject: function () {
    if (this.options.verbose) {
      this.log(chalk.yellow('\nAnswers to your questions:'));
      this.log(this.answers);
    }
  }
};
