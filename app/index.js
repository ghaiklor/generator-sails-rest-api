var yeoman = require('yeoman-generator'),
    chalk = require('chalk'),
    yosay = require('yosay'),
    crypto = require('crypto');

/**
 * List of questions
 * @type {Array}
 * @private
 */
var QUESTIONS_LIST = [{
    type: 'input',
    name: 'project:name',
    message: 'Type your project name',
    default: 'sails-rest-api'
}, {
    type: 'list',
    name: 'database:adapter',
    message: 'Choose database adapter',
    choices: [
        'MySQL',
        'Mongo',
        'PostgreSQL',
        'Redis'
    ],
    default: 1
}, {
    type: 'input',
    name: 'database:user',
    message: 'Type database username (if need)',
    default: ''
}, {
    type: 'password',
    name: 'database:password',
    message: 'Type database password (if need)',
    default: ''
}, {
    type: 'input',
    name: 'database:host',
    message: 'Type your database host',
    default: 'localhost'
}, {
    type: 'input',
    name: 'database:name',
    message: 'Type your database name',
    default: 'sails-rest-api'
}, {
    type: 'input',
    name: 'application:app-secret-token',
    message: 'Type application token (checking for isOurApp policy)',
    default: crypto.randomBytes(32).toString('hex')
}, {
    type: 'input',
    name: 'application:jwt-secret-token',
    message: 'Type JWT secret (overrides)',
    default: crypto.randomBytes(32).toString('hex')
}];

module.exports = yeoman.generators.Base.extend({
    initializing: function () {
        this.pkg = require('../package.json');
    },

    prompting: function () {
        var done = this.async();

        this.log(yosay('Welcome to the laudable ' + chalk.red('Sails REST API') + ' generator!'));

        this.prompt(QUESTIONS_LIST, function (answers) {
            this.answers = answers;
            done();
        }.bind(this));
    },

    configuring: function () {
        // TODO: maybe implement
    },

    writing: function () {
        this.directory(
            this.sourceRoot(),
            this.destinationRoot()
        )
    },

    conflicts: function () {
        // TODO: maybe implement
    },

    install: function () {
        // TODO: implement npm install
    },

    end: function () {
        this.log(
            '\n\n' +
            chalk.red("1) ") +
            chalk.yellow("Install dependencies via") +
            chalk.red(" npm install") +
            '\n'
        );

        this.log(
            chalk.red("2) ") +
            chalk.yellow("Configure you app in") +
            chalk.red(" config/**/*.js ") +
            chalk.yellow("and") +
            chalk.red(" api/services/*.js") +
            '\n\n'
        );
    }
});
