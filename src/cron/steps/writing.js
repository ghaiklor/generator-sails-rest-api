/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

const CRON_TEMPLATE = 'config/cron.template';

export default function () {
  let jobs = this.options['jobs'].split(',');

  this.template(CRON_TEMPLATE, 'config/cron.js', {jobs});
};
