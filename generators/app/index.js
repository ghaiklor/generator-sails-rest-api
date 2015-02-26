var chalk = require('chalk'),
    printMessage = require('print-message'),
    updateNotifier = require('update-notifier'),
    yeoman = require('yeoman-generator'),
    yosay = require('yosay');

/**
 * Questions for application section
 * @type {Array}
 * @private
 */
var APPLICATION_QUESTIONS = require('./questions/application.js');

/**
 * Questions for database section
 * @type {Array}
 * @private
 */
var DATABASE_QUESTIONS = require('./questions/database.js');

/**
 * Questions for miscellaneous section
 * @type {Array}
 * @private
 */
var MISCELLANEOUS_QUESTIONS = require('./questions/miscellaneous');

/**
 * Questions for services section
 * @type {Array}
 * @private
 */
var SERVICES_QUESTIONS = require('./questions/services.js');

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

module.exports = yeoman.generators.Base.extend({
    /**
     * Special methods may do things like set up important state controls and may not function outside of the constructor
     * @type {Function}
     */
    constructor: function () {
        yeoman.generators.Base.apply(this, arguments);

        this.option("skip-generator-update", {
            desc: "Skip checking for generator updates on running",
            type: Boolean,
            defaults: false,
            hide: false
        });

        this.option("skip-generator-welcome", {
            desc: "Skip saying welcome when generator is running",
            type: Boolean,
            defaults: false,
            hide: false
        });

        this.option("skip-project-install", {
            desc: "Skip installing npm dependencies in project",
            type: Boolean,
            defaults: false,
            hide: false
        });

        this.option("skip-project-diagnostic", {
            desc: "Skip running diagnostic tools in project",
            type: Boolean,
            defaults: false,
            hide: false
        });

        this.option("skip-all", {
            desc: "Skip everything, just project scaffolding",
            type: Boolean,
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
        /**
         * Load package.json
         */
        loadPackageInfo: function () {
            this.pkg = require('../../package.json');
        },

        /**
         * Notify about updates of generator-sails-rest-api
         */
        notifyAboutGeneratorUpdate: function () {
            if (!(this.options['skip-generator-update'] || this.options['skip-all'])) {
                var done = this.async();

                this.log(chalk.yellow("Checking for updates..."));

                updateNotifier({
                    pkg: this.pkg,
                    callback: function (error, update) {
                        if (update && update.type && update.type !== 'latest') {
                            printMessage([
                                "Update available: " + chalk.green.bold(update.latest) + chalk.dim(" (current: " + update.current + ")"),
                                "Run " + chalk.blue("npm update -g " + update.name) + " to update."
                            ], {
                                marginTop: 0,
                                marginBottom: 0,
                                printFn: this.log
                            });

                            process.exit(0);
                        } else {
                            this.log(chalk.yellow("OK... You're using the latest version " + chalk.green.bold(update.current)));
                            done();
                        }
                    }.bind(this)
                });
            }
        },

        /**
         * Say yeoman hello
         */
        sayHello: function () {
            if (!(this.options["skip-generator-welcome"] || this.options["skip-all"])) {
                this.log(yosay('Welcome to the laudable ' + chalk.red('Sails REST API') + ' generator!'));
            }
        }
    },

    /**
     * Step 2
     * Where you prompt users for options (where you'd call this.prompt())
     */
    prompting: {
        /**
         * Ask database questions
         */
        askDatabaseQuestions: function () {
            var done = this.async();

            this.log(chalk.yellow("\nDatabase questions:"));

            this.prompt(DATABASE_QUESTIONS, function (answers) {
                this.answers = _extend(this.answers, answers);
                done();
            });
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
            });
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
            });
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
            });
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
        /**
         * Copy template directory to source root
         */
        copyDirectory: function () {
            // TODO: split into separate functions
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
        /**
         * Install npm dependencies
         */
        installNpmDependencies: function () {
            if (!(this.options['skip-project-install'] || this.options["skip-all"])) {
                this.log(chalk.yellow("Start installing npm dependencies, please wait..."));
                this.npmInstall();
            }
        }
    },

    /**
     * Step 8
     * Called last, cleanup, say good bye, etc
     */
    end: {
        /**
         * Run diagnostic tools
         */
        runDiagnostic: function () {
            if (!(this.options["skip-project-diagnostic"] || this.options["skip-all"])) {
                var done = this.async();

                this.log(chalk.yellow("Starting diagnostic, please wait..."));

                this.spawnCommand('node', ['tools/fix-deps.js']).on('close', function () {
                    this.spawnCommand('node', ['tools/update-deps.js']).on('close', done);
                }.bind(this));
            }
        },

        /**
         * Say warning that this generator is under development
         */
        sayUnderDevelopmentWarning: function () {
            printMessage([
                "This generator under heavy development",
                "If you found any bugs or have proposals, feel free to create issue",
                chalk.red(this.pkg.bugs.url),
                "Or you can write me the letter",
                chalk.red(this.pkg.bugs.email)
            ], {
                marginTop: 0,
                marginBottom: 0,
                printFn: this.log
            });
        },

        /**
         * Warn user if he skip installing dependencies
         */
        sayNotInstalledNpmDepsWarning: function () {
            if (this.options['skip-project-install'] || this.options["skip-all"]) {
                printMessage([
                    "You have skipped installing npm modules",
                    "Install them manually via " + chalk.blue("npm install")
                ], {
                    marginTop: 0,
                    marginBottom: 0,
                    printFn: this.log
                });
            }
        }
    }
});
