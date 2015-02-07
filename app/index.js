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
    message: 'Type private application token',
    default: crypto.randomBytes(16).toString('hex')
}, {
    type: 'input',
    name: 'application:jwt-secret-token',
    message: 'Type private token for JSON Web Token',
    default: crypto.randomBytes(16).toString('hex')
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
    },

    writing: function () {
        this.directory(
            this.sourceRoot(),
            this.destinationRoot()
        )
    },

    conflicts: function () {
    },

    install: function () {
        // TODO: implement npm install
    },

    end: function () {
        this.log(
            '\n\n' +
            chalk.yellow("1) Install dependencies via ") +
            chalk.red.bgWhite(" npm install ") +
            '\n'
        );

        this.log(
            chalk.yellow("2) Configure you app in ") +
            chalk.red.bgWhite(" config/**/*.js ") +
            chalk.yellow(" and ") +
            chalk.red.bgWhite(" api/services/*.js ") +
            '\n\n'
        );
    }
});
