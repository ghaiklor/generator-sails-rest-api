"use strict";

/**
 * Step 7
 * Where installation are run (npm, bower)
 */

const DEPENDENCIES = [
  'sails-hook-cron'
];

module.exports = function () {
  this.npmInstall(DEPENDENCIES, {save: true});
};
