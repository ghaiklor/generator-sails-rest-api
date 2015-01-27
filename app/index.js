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
    name: 'projectName',
    message: 'Type your project name',
    default: 'sails-rest-api'
}, {
    type: 'list',
    name: 'databaseAdapter',
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
    name: 'databaseHost',
    message: 'Type your database host',
    default: 'localhost'
}, {
    type: 'input',
    name: 'databaseName',
    message: 'Type your database name',
    default: 'sails-rest-api'
}, {
    type: 'input',
    name: 'databaseUser',
    message: 'Type database username (if need)',
    default: ''
}, {
    type: 'password',
    name: 'databasePassword',
    message: 'Type database password (if need)',
    default: ''
}, {
    type: 'input',
    name: 'applicationHeaderToken',
    message: 'Type application token (checking for isOurApp policy)',
    default: crypto.randomBytes(32).toString('hex')
}, {
    type: 'input',
    name: 'jwtSecret',
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
        this.spawnCommand('npm', ['install']).on('close', function () {
            this.spawnCommand('node', ['app.js']).on('close', function () {
                this.log(
                    '\n\n' +
                    chalk.yellow("NOTE: Don't forgot configure your app in") +
                    chalk.red(" config/**/*.js ") +
                    chalk.yellow("and") +
                    chalk.red(" api/services/*.js") +
                    '\n\n'
                );
            }.bind(this));
        }.bind(this));
    },

    end: function () {
        // TODO: maybe implement
    }
});
