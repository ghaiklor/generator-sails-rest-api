/**
 * Step 2
 * Where you prompt users for options (where you'd call this.prompt()).
 *
 * Questions is required from ../questions folder.
 * Each of answers is mixin to this.answers attribute and available in templates as answers variable.
 */

var chalk = require('chalk'),
    assign = require('../util').assign,
    questions = require('../questions');

module.exports = {
    /**
     * Ask database questions
     */
    askDatabaseQuestions: function () {
        var done = this.async();

        this.log(chalk.yellow('\nDatabase questions:'));

        this.prompt(questions.database, function (answers) {
            this.answers = assign(this.answers, answers);
            done();
        }.bind(this));
    },

    /**
     * Ask application questions
     */
    askApplicationQuestions: function () {
        var done = this.async();

        this.log(chalk.yellow('\nApplication questions:'));

        this.prompt(questions.application, function (answers) {
            this.answers = assign(this.answers, answers);
            done();
        }.bind(this));
    },

    /**
     * Ask services questions
     */
    askServiceQuestions: function () {
        var done = this.async();

        this.log(chalk.yellow('\nService questions:'));

        this.prompt(questions.services, function (answers) {
            this.answers = assign(this.answers, answers);
            done();
        }.bind(this));
    },

    /**
     * Ask miscellaneous questions
     */
    askMiscellaneousQuestions: function () {
        var done = this.async();

        this.log(chalk.yellow('\nMiscellaneous questions:'));

        this.prompt(questions.miscellaneous, function (answers) {
            this.answers = assign(this.answers, answers);
            done();
        }.bind(this));
    },

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
