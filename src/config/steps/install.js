/**
 * Step 7
 * Where installation are run (npm, bower)
 */

export default function () {
  this.npmInstall(['sails-disk', 'sails-memory', `sails-${this.options['database-adapter'].toLowerCase()}`], {save: true});
};
