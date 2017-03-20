"use strict";

/**
 * Step 7
 * Where installation are run (npm, bower)
 */

const DEPENDENCIES = {
  search: ['lodash', 'bluebird']
};

module.exports = function () {
  const name = this.options['controller-name'].replace(/Controller/, '').toLowerCase();

  if (DEPENDENCIES[name]) {
    this.npmInstall(DEPENDENCIES[name], {save: true});
  }
};
