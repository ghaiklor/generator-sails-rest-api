/**
 * Step 8
 * Called last, cleanup, say good bye, etc
 */

var path = require('path');
var spawn = require('child_process').spawn;
var checkDependencies = require('dependency-check');
var recursive = require('recursive-readdir');

module.exports = {
  /**
   * Parse AST and install missing dependencies
   */
  installDependencies: function () {
    if (!this.options['skip-install']) {
      var done = this.async();

      recursive(this.destinationPath(), ['node_modules'], function (error, _files) {
        var files = _files.filter(function (file) {
          return file.split('.').pop() === 'js';
        }).map(function (file) {
          return path.relative(process.cwd(), file);
        });

        checkDependencies({
          path: this.destinationPath('package.json'),
          entries: files
        }, function (error, data) {
          var missingAdapters = ['sails-' + this.answers['database:adapter'].toLowerCase(), 'sails-disk'];
          var missingDependencies = checkDependencies.missing(data.package, data.used).concat(missingAdapters);
          var npmInstall = spawn('npm', ['install', '--save', '--color', 'always'].concat(missingDependencies));

          npmInstall.stdout.pipe(process.stdout);
          npmInstall.stderr.pipe(process.stderr);
          npmInstall.on('close', done);
        }.bind(this));
      }.bind(this));
    }
  }
};
