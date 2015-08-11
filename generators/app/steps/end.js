/**
 * Step 8
 * Called last, cleanup, say good bye, etc
 */

var path = require('path');
var spawn = require('child_process').spawn;
var chalk = require('chalk');
var printMessage = require('print-message');
var checkDependencies = require('dependency-check');
var recursive = require('recursive-readdir');

module.exports = {
  /**
   * Parse AST and install missing dependencies
   */
  installProjectDeps: function () {
    if (!this.options['skip-install']) {
      var done = this.async();

      // TODO: make more simple without deps
      // FIXME: test folder is also scanning for require and this cause issue with relative
      recursive(this.destinationPath(), ['node_modules', 'test'], function (error, files) {
        files = files.filter(function (file) {
          return file.split('.').pop() === 'js';
        }).map(function (file) {
          return path.relative(process.cwd(), file);
        });

        if (this.options.verbose) {
          this.log(chalk.yellow('Found this js files in your project:'));
          this.log(files);
        }

        checkDependencies({
          path: this.destinationPath('package.json'),
          entries: files
        }, function (error, data) {
          var selectedAdapter = this.answers['database:adapter'].toLowerCase();
          var adapters = ['sails-' + selectedAdapter];
          if (selectedAdapter !== 'disk')
            adapters.push('sails-disk');

          var npmInstall = spawn('npm', ['install', '--save', '--color', 'always'].concat(checkDependencies.missing(data.package, data.used)).concat(adapters));
          npmInstall.stdout.pipe(process.stdout);
          npmInstall.stderr.pipe(process.stderr);
          npmInstall.on('close', done);
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
      'This generator under heavy development!',
      'Services may be not working, but everything else is working :)',
      'If you found any bugs or have proposals, feel free to create issue',
      chalk.red(this.pkg.bugs.url),
      'Or you can write me the letter',
      chalk.red(this.pkg.bugs.email)
    ]);
  }
};
