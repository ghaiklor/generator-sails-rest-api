"use strict";

/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

const SOURCE_CONFIG = name => `${name}Config.js`;

const DESTINATION_CONFIG = `config/log.js`;

module.exports = function () {
  const logger = this['logger-name'].toLowerCase();

  this.template(SOURCE_CONFIG(logger), DESTINATION_CONFIG, {logger});
};
