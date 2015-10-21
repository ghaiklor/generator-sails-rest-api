/**
 * Step 7
 * Where installation are run (npm, bower)
 */

const DEPENDENCIES = [
  'express', 'marlinspike'
];

export default function () {
  this.npmInstall(DEPENDENCIES, {save: true});
};
