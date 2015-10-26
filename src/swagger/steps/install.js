/**
 * Step 7
 * Where installation are run (npm, bower)
 */

const DEPENDENCIES = [
  'hoek',
  'lodash',
  'pluralize'
];

export default function () {
  this.npmInstall(DEPENDENCIES, {save: true});
};
