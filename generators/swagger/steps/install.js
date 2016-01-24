"use strict";

/**
 * Step 7
 * Where installation are run (npm, bower)
 */

const DEPENDENCIES = [
  'hoek',
  'lodash',
  'pluralize'
];

module.exports = function () {
  this.npmInstall(DEPENDENCIES, {save: true});
};
