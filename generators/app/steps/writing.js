"use strict";

/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

module.exports = function () {
  this.fs.copyTpl(this.templatePath('test/**/*'), this.destinationPath('test'), {answers: this.answers});
  this.fs.copyTpl(this.templatePath('app.js'), this.destinationPath('app.js'), {answers: this.answers});
  this.fs.copyTpl(this.templatePath('Dockerfile'), this.destinationPath('Dockerfile'), {answers: this.answers});
  this.fs.copyTpl(this.templatePath('editorconfig'), this.destinationPath('.editorconfig'), {answers: this.answers});
  this.fs.copyTpl(this.templatePath('esdoc.json'), this.destinationPath('esdoc.json'), {answers: this.answers});
  this.fs.copyTpl(this.templatePath('gitignore'), this.destinationPath('.gitignore'), {answers: this.answers});
  this.fs.copyTpl(this.templatePath('package.json'), this.destinationPath('package.json'), {answers: this.answers});
  this.fs.copyTpl(this.templatePath('README.md'), this.destinationPath('README.md'), {answers: this.answers});
  this.fs.copyTpl(this.templatePath('sailsrc'), this.destinationPath('.sailsrc'), {answers: this.answers});
};
