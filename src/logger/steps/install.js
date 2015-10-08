/**
 * Step 7
 * Where installation are run (npm, bower)
 */

const DEPENDENCIES = [
  'winston',
  'mkdirp'
];

export default function () {
  this.npmInstall(DEPENDENCIES, {save: true});
};
