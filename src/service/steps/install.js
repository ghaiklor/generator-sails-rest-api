/**
 * Step 7
 * Where installation are run (npm, bower)
 */

const DEPENDENCIES = {
  cipher: ['sails-service-cipher'],
  hash: ['sails-service-hash'],
  image: ['sails-service-image'],
  location: ['sails-service-location'],
  mailer: ['sails-service-mailer'],
  payment: ['sails-service-payment'],
  pusher: ['sails-service-pusher'],
  sms: ['sails-service-sms'],
  social: ['sails-service-social'],
  storage: ['sails-service-storage']
};

export default function () {
  let name = this['service-name'].replace(/Service/, '').toLowerCase();
  let isNew = this.options['new'];
  let isAll = !name || this.options['all'];
  let deps = [];

  if (isNew) return;

  if (isAll) {
    deps = Object.keys(DEPENDENCIES).reduce((dependencies, service) => dependencies.concat(DEPENDENCIES[service]), []);
  } else {
    deps = DEPENDENCIES[name] ? DEPENDENCIES[name] : [];
  }

  this.npmInstall(deps, {save: true});
};
