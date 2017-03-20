"use strict";

/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

const SOURCE_CRON = `cron.template`;

const DESTINATION_CRON = `config/cron.js`;

module.exports = function () {
  const jobs = this.options['cron-jobs'];

  this.fs.copyTpl(this.templatePath(SOURCE_CRON), this.destinationPath(DESTINATION_CRON), {jobs});
};
