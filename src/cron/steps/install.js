/**
 * Step 7
 * Where installation are run (npm, bower)
 */

const DEPENDENCIES = [
  'sails-hook-cron'
];

export default function () {
  this.npmInstall(DEPENDENCIES, {save: true});
};
