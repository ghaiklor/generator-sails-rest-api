/**
 * Step 7
 * Where installation are run (npm, bower)
 */

export default function () {
  this.npmInstall(
    this.options['social-networks'].split(',').map(service => `passport-${service.toLowerCase()}-token`),
    {save: true}
  )
};
