"use strict";

/**
 * Step 7
 * Where installation are run (npm, bower)
 */

const DEPENDENCIES = {
  count: ['lodash', 'pluralize'],
  pluralize: ['lodash']
};

module.exports = function () {
  const name = this['hook-name'].replace(/Hook/, '').toLowerCase();

  if (DEPENDENCIES[name]) {
    this.npmInstall(DEPENDENCIES[name], {save: true});
  }
};
