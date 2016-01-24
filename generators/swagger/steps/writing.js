"use strict";

/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

module.exports = function () {
  this.directory('api', 'api');
  this.directory('config', 'config');
  this.directory('explorer', 'explorer');
};
