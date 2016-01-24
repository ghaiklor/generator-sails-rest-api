"use strict";

/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

const SOURCE_CRON = `cron.template`;

const DESTINATION_CRON = `config/cron.js`;

module.exports = function () {
  const jobs = this['cron-jobs'];

  this.template(SOURCE_CRON, DESTINATION_CRON, {jobs});
};
