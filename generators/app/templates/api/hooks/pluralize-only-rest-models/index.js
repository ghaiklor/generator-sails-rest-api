var _ = require('lodash');

module.exports = function (sails) {
  return {
    initialize: function (cb) {
      sails.on('router:before', function () {
        if (!_.get(sails.config, 'blueprints.pluralize')) {
          return;
        }

        _.forEach(sails.middleware.controllers, function (controller, name) {
          if (!_.get(sails.models, name, false) && !_.get(controller, '_config.pluralize', false))
            _.set(controller, '_config.pluralize', false);
        });
      });

      cb();
    }
  }
};
