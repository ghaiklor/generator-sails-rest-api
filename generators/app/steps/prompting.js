/**
 * Step 2
 * Where you prompt users for options (where you'd call this.prompt())
 */

var path = require('path'),
    chalk = require('chalk'),
    assign = require('../util').assign,
    questions = require('../questions');

module.exports = {
    /**
     * Ask database questions
     */
    askDatabaseQuestions: function () {
        var done = this.async();

        this.log(chalk.yellow("\nDatabase questions:"));

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

        this.log(chalk.yellow("\nApplication questions:"));

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

        this.log(chalk.yellow("\nService questions:"));

        this.prompt(questions.services, function (answers) {
            this.answers = assign(this.answers, answers);
            done();
        }.bind(this));
    },

    /**
     * Ask miscellaneous questions
     */
    askMiscellaneousSections: function () {
        var done = this.async();

        this.log(chalk.yellow("\nMiscellaneous questions:"));

        this.prompt(questions.miscellaneous, function (answers) {
            this.answers = assign(this.answers, answers);
            done();
        }.bind(this));
    }
};
