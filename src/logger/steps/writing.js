/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

const SOURCE_CONFIG = name => `${name}Config.js`;

const DESTINATION_CONFIG = `config/log.js`;

export default function () {
  let logger = this['logger-name'];

  this.template(SOURCE_CONFIG(logger), DESTINATION_CONFIG, {logger});
};
