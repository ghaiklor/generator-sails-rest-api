/**
 * Step 7
 * Where installation are run (npm, bower)
 */

const DEPENDENCIES = [
  'lodash'
];

export default function () {
  this.npmInstall(DEPENDENCIES, {save: true});
};
