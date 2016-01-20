/**
 * Step 7
 * Where installation are run (npm, bower)
 */

const DEPENDENCIES = {
  bunyan: ['sails-hook-bunyan'],
  winston: ['sails-hook-winston']
};

module.exports = function () {
  const logger = this['logger-name'];

  if (DEPENDENCIES[logger]) {
    this.npmInstall(DEPENDENCIES[logger], {save: true});
  }
};
