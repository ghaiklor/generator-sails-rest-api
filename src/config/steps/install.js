/**
 * Step 7
 * Where installation are run (npm, bower)
 */

const DEPENDENCIES = [
  'sails-disk',
  'sails-memory'
];

export default function () {
  this.npmInstall(DEPENDENCIES.concat([`sails-${this.options['database-adapter'].toLowerCase()}`]), {save: true});
};
