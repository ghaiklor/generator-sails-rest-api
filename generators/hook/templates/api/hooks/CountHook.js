"use strict";

/**
 * Adds support for count blueprint and binds :model/count route for each RESTful model.
 */

const _ = require('lodash');
const actionUtil = require('sails/lib/hooks/blueprints/actionUtil');
const pluralize = require('pluralize');

const defaultCountBlueprint = (req, res) => {
  const Model = actionUtil.parseModel(req);
  const countQuery = Model.count();

  countQuery.then(count => res.ok({count}));
};

module.exports = sails => {
  return {
    initialize: cb => {
      const config = sails.config.blueprints;
      const countFn = _.get(sails.middleware, 'blueprints.count') || defaultCountBlueprint;

      sails.on('router:before', () => {
        _.forEach(sails.models, model => {
          const controller = sails.middleware.controllers[model.identity];

          if (!controller) return;

          let baseRoute = [config.prefix, model.identity].join('/');

          if (config.pluralize && _.get(controller, '_config.pluralize', true)) {
            baseRoute = pluralize(baseRoute);
          }

          const route = baseRoute + '/count';

          sails.router.bind(route, countFn, null, {controller: model.identity});
        });

      });

      cb();
    }
  }
};
