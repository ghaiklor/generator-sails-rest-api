/**
 * Step 7
 * Where installation are run (npm, bower)
 */

export default function () {
  if (!this.options['use-default']) {
    this.npmInstall(['lodash', 'bluebird'], {save: true});
  }
};
