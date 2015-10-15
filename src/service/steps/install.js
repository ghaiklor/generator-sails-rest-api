/**
 * Step 7
 * Where installation are run (npm, bower)
 */

export default function () {
  let name = this['service-name'].replace(/Service/, '').toLowerCase();

  this.npmInstall([`sails-service-${name}`], {save: true});
};
