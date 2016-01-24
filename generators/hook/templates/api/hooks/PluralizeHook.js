"use strict";

/**
 * Pluralize only routes that have controller and model pair.
 * If controller or model doesn't exist then applies default route.
 */

const _ = require('lodash');

module.exports = sails => {
  return {
    initialize: cb => {
      sails.on('router:before', () => {
        if (!_.get(sails, 'config.blueprints.pluralize')) return;

        _.forEach(sails.middleware.controllers, (controller, name) => {
          if (!_.get(sails.models, name, false) && !_.get(controller, '_config.pluralize', false)) {
            _.set(controller, '_config.pluralize', false);
          }
        });
      });

      cb();
    }
  }
};
