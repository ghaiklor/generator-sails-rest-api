/**
 * Step 2
 * Where you prompt users for options (where you'd call this.prompt())
 */

var chalk = require('chalk'),
    APPLICATION_QUESTIONS = require('../yo-questions/application.js'),
    DATABASE_QUESTIONS = require('../yo-questions/database.js'),
    MISCELLANEOUS_QUESTIONS = require('../yo-questions/miscellaneous'),
    SERVICES_QUESTIONS = require('../yo-questions/services.js');

/**
 * Extend target object with source object
 * @param {Object} _target Target object
 * @param {Object} _source Source object
 * @returns {Object}
 * @private
 */
function _extend(_target, _source) {
    var target = _target || {},
        source = _source || {},
        keys = Object.keys(source);

    for (var i = 0; i < keys.length; i++) {
        target[keys[i]] = source[keys[i]];
    }

    return target;
}

module.exports = {
    /**
     * Ask database questions
     */
    askDatabaseQuestions: function () {
        var done = this.async();

        this.log(chalk.yellow("\nDatabase questions:"));

        this.prompt(DATABASE_QUESTIONS, function (answers) {
            this.answers = _extend(this.answers, answers);
            done();
        }.bind(this));
    },

    /**
     * Ask application questions
     */
    askApplicationQuestions: function () {
        var done = this.async();

        this.log(chalk.yellow("\nApplication questions:"));

        this.prompt(APPLICATION_QUESTIONS, function (answers) {
            this.answers = _extend(this.answers, answers);
            done();
        }.bind(this));
    },

    /**
     * Ask services questions
     */
    askServiceQuestions: function () {
        var done = this.async();

        this.log(chalk.yellow("\nService questions:"));

        this.prompt(SERVICES_QUESTIONS, function (answers) {
            this.answers = _extend(this.answers, answers);
            done();
        }.bind(this));
    },

    /**
     * Ask miscellaneous questions
     */
    askMiscellaneousSections: function () {
        var done = this.async();

        this.log(chalk.yellow("\nMiscellaneous questions:"));

        this.prompt(MISCELLANEOUS_QUESTIONS, function (answers) {
            this.answers = _extend(this.answers, answers);
            done();
        }.bind(this));
    }
};
