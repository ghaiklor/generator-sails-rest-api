"use strict";

/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

const SOURCE_CONFIG = name => `${name}Config.js`;

const DESTINATION_CONFIG = `config/log.js`;

module.exports = function () {
  const logger = this.options['logger-name'].toLowerCase();

  this.fs.copyTpl(this.templatePath(SOURCE_CONFIG(logger)), this.destinationPath(DESTINATION_CONFIG), {logger});
};
