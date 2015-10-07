/**
 * Step 7
 * Where installation are run (npm, bower)
 */

export default function () {
  this.npmInstall(['sails-hook-cron'], {save: true});
};
