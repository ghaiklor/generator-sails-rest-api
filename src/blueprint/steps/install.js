/**
 * Step 7
 * Where installation are run (npm, bower)
 */

const DEPENDENCIES = [
  'lodash',
  'bluebird'
];

export default function () {
  let isDefault = this.options['default'];

  if (!isDefault) {
    this.npmInstall(DEPENDENCIES, {save: true});
  }
};
