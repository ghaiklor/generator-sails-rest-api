"use strict";

/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

module.exports = function () {
  this.fs.copyTpl(this.templatePath('api/**/*'), this.destinationPath('api'));
  this.fs.copyTpl(this.templatePath('config/**/*'), this.destinationPath('config'));
  this.fs.copy(this.templatePath('explorer/**/*'), this.destinationPath('explorer'));
};
