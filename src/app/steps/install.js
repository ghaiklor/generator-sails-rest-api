/**
 * Step 7
 * Where installation are run (npm, bower)
 */

export default function () {

  let server = this.answers['web-engine'];

  // Adding server dependency
  this.npmInstall('trailpack-' + server, {
    save: true
  });

  // Installing all deps in project
  this.npmInstall(null, {
    silent: true,
    loglevel: 'silent'
  });
};
