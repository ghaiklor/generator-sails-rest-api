/**
 * Step 7
 * Where installation are run (npm, bower)
 */

export default function () {
  this.npmInstall(null, {
    silent: true,
    loglevel: 'silent'
  });
};
