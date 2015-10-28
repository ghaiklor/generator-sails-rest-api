/**
 * Step 7
 * Where installation are run (npm, bower)
 */

const DEPENDENCIES = {
  search: ['lodash', 'bluebird']
};

export default function () {
  let name = this['controller-name'].replace(/Controller/, '').toLowerCase();

  if (DEPENDENCIES[name]) {
    this.npmInstall(DEPENDENCIES[name], {save: true});
  }
};
