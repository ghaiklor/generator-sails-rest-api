/**
 * Step 7
 * Where installation are run (npm, bower)
 */

export default function () {
  this.npmInstall(
    this.options['services'].split(',').map(service => `sails-service-${service.replace(/Service/g, '').toLowerCase()}`),
    {save: true}
  )
};
