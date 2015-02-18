var yeoman = require('yeoman-generator'),
    updateNotifier = require('update-notifier'),
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
    message: 'Type database username',
    default: ''
}, {
    type: 'password',
    name: 'database:password',
    message: 'Type database password',
    default: ''
}, {
    type: 'input',
    name: 'database:host',
    message: 'Type database host',
    default: 'localhost'
}, {
    type: 'input',
    name: 'database:name',
    message: 'Type database name',
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
}, {
    type: 'input',
    name: 'application:facebook-client-id',
    message: 'Type Facebook Client ID',
    default: '-'
}, {
    type: 'input',
    name: 'application:facebook-client-secret',
    message: 'Type Facebook Client Secret',
    default: '-'
}, {
    type: 'input',
    name: 'application:twitter-consumer-key',
    message: 'Type Twitter Consumer Key',
    default: '-'
}, {
    type: 'input',
    name: 'application:twitter-consumer-secret',
    message: 'Type Twitter Consumer Secret',
    default: '-'
}];

module.exports = yeoman.generators.Base.extend({
    /**
     * Special methods may do things like set up important state controls and may not function outside of the constructor
     * @type {Function}
     */
    constructor: function () {
        yeoman.generators.Base.apply(this, arguments);

        this.option("skip-install", {
            desc: "Skip installing npm dependencies in project",
            type: "Boolean",
            defaults: false,
            hide: false
        });

        this.option("skip-update", {
            desc: "Skip checking for generator and project updates",
            type: "Boolean",
            defaults: false,
            hide: false
        });

        this.config.save();
    },

    /**
     * Step 1
     * Your initialization methods (checking current project state, getting configs, etc)
     * @type {Object}
     */
    initializing: {
        sayHello: function () {
            this.log(yosay('Welcome to the laudable ' + chalk.red('Sails REST API') + ' generator!'));
        },

        loadPackageInfo: function () {
            this.pkg = require('../package.json');
        },

        checkForGeneratorUpdate: function () {
            if (!this.options['skip-update']) {
                var self = this,
                    done = this.async();

                this.log(chalk.yellow("Checking for updates..."));

                updateNotifier({
                    pkg: this.pkg,
                    callback: function (error, update) {
                        if (update.type && update.type !== 'latest') {
                            var line1 = 'Update available: ' + chalk.green.bold(update.latest) + chalk.dim(' (current: ' + update.current + ')'),
                                line2 = 'Run ' + chalk.blue('npm update -g ' + update.name) + ' to update.';

                            self.log('\n\n' + line1 + '\n' + line2 + '\n');
                        } else {
                            self.log("You're using latest version of generator-sails-rest-api");
                        }

                        done();
                    }
                });
            }
        }
    },

    /**
     * Step 2
     * Where you prompt users for options (where you'd call this.prompt())
     */
    prompting: {
        askBaseQuestions: function () {
            var done = this.async();

            this.prompt(QUESTIONS_LIST, function (answers) {
                this.answers = answers;
                done();
            }.bind(this));
        }
    },

    /**
     * Step 3
     * Saving configurations and configure the project (creating .editorconfig files and other metadata files)
     */
    configuring: {},

    /**
     * Step 4
     * Default priority
     */

    /**
     * Step 5
     * Where you write the generator specific files (routes, controllers, etc)
     */
    writing: {
        copyDirectory: function () {
            this.directory(
                this.sourceRoot(),
                this.destinationRoot()
            );
        }
    },

    /**
     * Step 6
     * Where conflicts are handled (used internally)
     */
    conflicts: {},

    /**
     * Step 7
     * Where installation are run (npm, bower)
     */
    install: {
        installNpmDeps: function () {
            if (!this.options['skip-install']) {
                this.npmInstall();
            }
        }
    },

    /**
     * Step 8
     * Called last, cleanup, say good bye, etc
     */
    end: {
        sayUnderDevelopmentWarning: function () {
            this.log(
                '\n\n' +
                chalk.red(" This generator under heavy development \n\n") +
                chalk.red(" If you found any bugs or have proposals, feel free to create issue \n") +
                chalk.red(" " + this.pkg.bugs.url + " ") +
                '\n\n' +
                chalk.red(" Or you can write me the letter \n") +
                chalk.red(" " + this.pkg.bugs.email + " ") +
                '\n\n' +
                chalk.red(" Join to us :) ") +
                '\n\n'
            );
        },

        sayNotInstalledNpmDepsWarning: function () {
            if (this.options['skip-install']) {
                this.log(
                    chalk.yellow(" NOTE: You have skipped installing npm modules \n") +
                    chalk.yellow(" Install them manually via ") +
                    chalk.red.bgWhite(" npm install ")
                );
            }
        }
    }
});
