/**
 * Step 7
 * Where installation are run (npm, bower)
 */

var chalk = require('chalk');

module.exports = {
    /**
     * Install npm dependencies
     */
    installNpmDependencies: function () {
        if (!(this.options['skip-project-install'] || this.options['skip-all'])) {
            this.log(chalk.yellow('Start installing npm dependencies, please wait...'));
            this.npmInstall([], {
                color: 'always',
                verbose: this.options.verbose
            });
        }
    }
};
