/**
 * Step 8
 * Called last, cleanup, say good bye, etc
 */

module.exports = {
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

    this.composeWith('sails-rest-api:services', {}, {
      local: require.resolve('../../services')
    });
  }
};
