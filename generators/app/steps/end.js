/**
 * Step 8
 * Called last, cleanup, say good bye, etc
 */

var chalk = require('chalk'),
    printMessage = require('print-message');

/**
 * Triggers when check-deps tools is finished
 * @param {Function} done
 * @private
 */
function _onCheckDepsClose(done) {
    this.spawnCommand('npm', ['run', 'check-updates', this.options.verbose ? '--verbose' : '']).on('close', done);
}

module.exports = {
    /**
     * Run diagnostic tools
     */
    runDiagnostic: function () {
        if (!(this.options['skip-project-diagnostic'] || this.options['skip-all'])) {
            this.log(chalk.yellow('Starting diagnostic, please wait...'));
            this.spawnCommand('npm', ['run', 'check-deps', this.options.verbose ? '--verbose' : '']).on('close', _onCheckDepsClose.bind(this, this.async()));
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
        ]);
    }
};
