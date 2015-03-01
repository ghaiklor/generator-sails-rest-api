/**
 * Step 8
 * Called last, cleanup, say good bye, etc
 */

var chalk = require('chalk'),
    printMessage = require('print-message');

module.exports = {
    /**
     * Run diagnostic tools
     */
    runDiagnostic: function () {
        if (!(this.options['skip-project-diagnostic'] || this.options['skip-all'])) {
            var done = this.async();

            this.log(chalk.yellow('Starting diagnostic, please wait...'));

            this.spawnCommand('npm', ['run-script', 'fix-deps', this.options.verbose ? '--verbose' : '']).on('close', function (code) {
                if (code !== 0) {
                    printMessage(['Some error was occurred'], {
                        borderColor: 'red',
                        printFn: this.log
                    });

                    return process.exit(code);
                }

                this.spawnCommand('npm', ['run-script', 'check-updates', this.options.verbose ? '--verbose' : '']).on('close', function (code) {
                    if (code !== 0) {
                        printMessage(['Some error was occurred'], {
                            borderColor: 'red',
                            printFn: this.log
                        });

                        return process.exit(code);
                    }

                    done();
                }.bind(this));
            }.bind(this));
        }
    },

    /**
     * Say warning that this generator is under development
     */
    sayUnderDevelopmentWarning: function () {
        // TODO: remove when will be stable version
        printMessage([
            'This generator under heavy development',
            'If you found any bugs or have proposals, feel free to create issue',
            chalk.red(this.pkg.bugs.url),
            'Or you can write me the letter',
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
        // TODO: remove this message when installing step will be more stable
        if (this.options['skip-project-install'] || this.options['skip-all']) {
            printMessage([
                'You have skipped installing npm modules',
                'Install them manually via ' + chalk.blue('npm install')
            ], {
                marginTop: 0,
                marginBottom: 0,
                printFn: this.log
            });
        }
    }
};
