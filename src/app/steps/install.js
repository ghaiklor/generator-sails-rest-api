/**
 * Step 7
 * Where installation are run (npm, bower)
 */

import path from 'path';
import { spawn } from 'child_process';
import checkDependencies from 'dependency-check';
import recursive from 'recursive-readdir';

export default {
  /**
   * Parse AST and install missing dependencies
   */
  installDependencies: function () {
    if (!this.options['skip-install']) {
      let done = this.async();

      recursive(this.destinationPath(), ['node_modules'], function (error, _files) {
        let files = _files.filter(function (file) {
          return file.split('.').pop() === 'js';
        }).map(function (file) {
          return path.relative(process.cwd(), file);
        });

        checkDependencies({
          path: this.destinationPath('package.json'),
          entries: files
        }, function (error, data) {
          // FIXME: database:adapter answer
          //let missingAdapters = ['sails-' + this.answers['database:adapter'].toLowerCase(), 'sails-disk'];
          let missingAdapters = ['sails-mongo', 'sails-disk'];
          let missingDependencies = checkDependencies.missing(data.package, data.used).concat(missingAdapters);
          let npmInstall = spawn('npm', ['install', '--save', '--color', 'always'].concat(missingDependencies));

          npmInstall.stdout.pipe(process.stdout);
          npmInstall.stderr.pipe(process.stderr);
          npmInstall.on('close', done);
        }.bind(this));
      }.bind(this));
    }
  },

  /**
   * Install other dev dependencies
   */
  installDevDependencies: function () {
    if (!this.options['skip-install']) {
      let done = this.async();
      let npmInstall = spawn('npm', ['install', '--save', '--color', 'always']);
      npmInstall.stdout.pipe(process.stdout);
      npmInstall.stderr.pipe(process.stderr);
      npmInstall.on('close', done);
    }
  }
};
