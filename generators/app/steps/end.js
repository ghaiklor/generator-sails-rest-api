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
    if (!(this.options['skip-install'] || this.options['skip-all'])) {
      var done = this.async();

      recursive(this.destinationPath(), ['node_modules'], function (error, files) {
        files = files.filter(function (file) {
          return file.split('.').pop() === 'js';
        }).map(function (file) {
          return path.relative(process.cwd(), file);
        });

        checkDependencies({
          path: this.destinationPath('package.json'),
          entries: files
        }, function (error, data) {
          var npmInstall = spawn('npm', ['install', '--save', '--color', 'always'].concat(checkDependencies.missing(data.package, data.used)));
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
