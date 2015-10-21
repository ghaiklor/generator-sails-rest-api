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

  if (DEPENDENCIES[name]) {
    this.npmInstall(DEPENDENCIES[name], {save: true});
  }
};
