/**
 * Step 7
 * Where installation are run (npm, bower)
 */

const DEPENDENCIES = [
  'lodash',
  'bluebird'
];

export default function () {
  if (!this.options['use-default']) {
    this.npmInstall(DEPENDENCIES, {save: true});
  }
};
