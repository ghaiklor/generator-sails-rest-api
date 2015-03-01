/**
 * Step 1
 * Your initialization methods (checking current project state, getting configs, etc)
 */

var chalk = require('chalk'),
    updateNotifier = require('update-notifier'),
    printMessage = require('print-message'),
    yosay = require('yosay');

module.exports = {
    /**
     * Load package.json
     */
    loadPackageInfo: function () {
        this.pkg = require('../../../package.json');
    },

    /**
     * Say yeoman hello
     */
    sayHello: function () {
        if (!(this.options['skip-generator-welcome'] || this.options['skip-all'])) {
            this.log(yosay('Welcome to the laudable ' + chalk.red('Sails REST API') + ' generator!'));
        }
    },

    /**
     * Notify about updates of generator-sails-rest-api
     */
    notifyAboutGeneratorUpdate: function () {
        if (!(this.options['skip-generator-update'] || this.options['skip-all'])) {
            var done = this.async();

            this.log(chalk.yellow('Checking for updates...'));

            updateNotifier({
                pkg: this.pkg,
                callback: function (error, update) {
                    if (error) {
                        console.error(error.stack || error);
                        return process.exit(1);
                    }

                    if (update && update.type !== 'latest') {
                        printMessage([
                            'Update available: ' + chalk.green.bold(update.latest) + chalk.dim(' (current: ' + update.current + ')'),
                            'Run ' + chalk.blue('npm update -g ' + update.name) + ' to update.'
                        ], {
                            marginTop: 0,
                            marginBottom: 0,
                            printFn: this.log
                        });

                        process.exit(0);
                    } else {
                        this.log(chalk.yellow('OK... You are using the latest version ' + chalk.green.bold(update.current)));
                        done();
                    }
                }.bind(this)
            });
        }
    }
};
