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
        if (!(this.options["skip-project-diagnostic"] || this.options["skip-all"])) {
            var done = this.async();

            this.log(chalk.yellow("Starting diagnostic, please wait..."));

            this.spawnCommand('npm', ['run-script', 'fix-deps']).on('close', function () {
                this.spawnCommand('npm', ['run-script', 'check-updates']).on('close', done);
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
};
