/**
 * Step 7
 * Where installation are run (npm, bower)
 */

export default function () {

  // Installing all deps in project
  this.npmInstall(null, {
    silent: true,
    loglevel: 'silent'
  });
};
