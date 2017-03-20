"use strict";

/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

module.exports = function () {
  this.fs.copyTpl(this.templatePath('api/**/*'), this.destinationPath('api'), {options: this.options});
  this.fs.copyTpl(this.templatePath('config/**/*'), this.destinationPath('config'), {options: this.options});
  this.fs.copyTpl(this.templatePath('test/**/*'), this.destinationPath('test'), {options: this.options});
};
