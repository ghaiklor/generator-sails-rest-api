/**
 * Step 4
 * Default priority in run loop
 */

export default {
  compose: function () {
    this.composeWith('sails-rest-api:adapters', {}, {
      local: require.resolve('../../adapters')
    });

    this.composeWith('sails-rest-api:blueprints', {}, {
      local: require.resolve('../../blueprints')
    });

    this.composeWith('sails-rest-api:config', {}, {
      local: require.resolve('../../config')
    });

    this.composeWith('sails-rest-api:controllers', {}, {
      local: require.resolve('../../controllers')
    });

    this.composeWith('sails-rest-api:hooks', {}, {
      local: require.resolve('../../hooks')
    });

    this.composeWith('sails-rest-api:models', {}, {
      local: require.resolve('../../models')
    });

    this.composeWith('sails-rest-api:policies', {}, {
      local: require.resolve('../../policies')
    });

    this.composeWith('sails-rest-api:responses', {}, {
      local: require.resolve('../../responses')
    });

    this.composeWith('sails-rest-api:services', {
      'services': this.answers['services:chosen'].join(','),
      'image-provider': this.answers['services:image:provider'],
      'location-provider': this.answers['services:location:provider'],
      'mailer-provider': this.answers['services:mailer:provider'],
      'payment-provider': this.answers['services:payment:provider'],
      'sms-provider': this.answers['services:sms:provider'],
      'storage-provider': this.answers['services:storage:provider']
    }, {
      local: require.resolve('../../services')
    });
  }
};
