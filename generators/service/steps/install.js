"use strict";

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

module.exports = function () {
  const name = this.options['service-name'].replace(/Service/, '').toLowerCase();
  const isNew = this.options['new'];
  const isAll = !name || this.options['all'];

  if (isNew) return;

  if (isAll) {
    return this.npmInstall(Object.keys(DEPENDENCIES).reduce((dependencies, service) => dependencies.concat(DEPENDENCIES[service]), []), {save: true});
  } else {
    return DEPENDENCIES[name] ? this.npmInstall(DEPENDENCIES[name], {save: true}) : true;
  }
};
