/**
 * Step 4
 * Default priority in run loop
 */

export default function () {
  this.composeWith('sails-rest-api:authentication', {
    options: {}
  });

  this.composeWith('sails-rest-api:blueprints', {
    options: {
      'use-default': this.answers['blueprints:use-default']
    }
  });

  this.composeWith('sails-rest-api:config', {
    options: {
      'database-adapter': this.answers['config:database-adapter'],
      'database-host': this.answers['config:database-host'],
      'database-name': this.answers['config:database-name'],
      'database-username': this.answers['config:database-username'],
      'database-password': this.answers['config:database-password'],
      'dynamo-access-key-id': this.answers['config:dynamo-access-key-id'],
      'dynamo-secret-access-key': this.answers['config:dynamo-secret-access-key'],
      'dynamo-region': this.answers['config:dynamo-region']
    }
  });

  this.composeWith('sails-rest-api:controller', {
    options: {}
  });

  this.composeWith('sails-rest-api:cron', {
    options: {}
  });

  this.composeWith('sails-rest-api:hook', {
    options: {}
  });

  this.composeWith('sails-rest-api:logger', {
    options: {}
  });

  this.composeWith('sails-rest-api:model', {
    options: {}
  });

  this.composeWith('sails-rest-api:policy', {
    options: {}
  });

  this.composeWith('sails-rest-api:response', {
    options: {}
  });

  this.composeWith('sails-rest-api:service', {
    options: {
      'services': this.answers['services:chosen'].join(','),
      'cipher-secret-key': this.answers['application:secret'],
      'image-provider': this.answers['services:image:provider'],
      'location-provider': this.answers['services:location:provider'],
      'mailer-provider': this.answers['services:mailer:provider'],
      'payment-provider': this.answers['services:payment:provider'],
      'sms-provider': this.answers['services:sms:provider'],
      'storage-provider': this.answers['services:storage:provider']
    }
  });
};
