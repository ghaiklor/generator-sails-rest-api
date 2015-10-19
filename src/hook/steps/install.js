/**
 * Step 7
 * Where installation are run (npm, bower)
 */

const DEPENDENCIES = {
  count: ['lodash', 'pluralize'],
  pluralize: ['lodash']
};

export default function () {
  let name = this['hook-name'].replace(/Hook/, '').toLowerCase();

  if (DEPENDENCIES[name]) {
    this.npmInstall(DEPENDENCIES[name], {save: true});
  }
};
