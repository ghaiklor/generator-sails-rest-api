"use strict";

/**
 * Step 7
 * Where installation are run (npm, bower)
 */

const DEPENDENCIES = [
  'sails-disk',
  'sails-memory'
];

module.exports = function () {
  const adapter = `sails-${this.options['database-adapter'].toLowerCase()}`;

  this.npmInstall(DEPENDENCIES.concat([adapter]), {save: true});
};
