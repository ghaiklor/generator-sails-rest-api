/**
 * Adds support for count blueprint and binds :model/count route for each RESTful model.
 */

import _ from 'lodash';
import actionUtil from 'sails/lib/hooks/blueprints/actionUtil';
import pluralize from 'pluralize';

let defaultCountBlueprint = (req, res) => {
  let Model = actionUtil.parseModel(req);
  let countQuery = Model.count();

  countQuery
    .then(count => {
      res.ok(null, {count});
    });
};

export default function (sails) {
  var config = sails.config.blueprints;
  let countFn = _.get(sails.middleware, 'blueprints.count') || defaultCountBlueprint;

  return {
    initialize: cb => {
      sails.on('router:before', () => {
        _.forEach(sails.models, model => {
          var controller = sails.middleware.controllers[model.identity];
          if (!controller) return;

          let baseRoute = [config.prefix, model.identity].join('/');
          if (config.pluralize && _.get(controller, '_config.pluralize', true)) {
            baseRoute = pluralize(baseRoute);
          }
          let route = baseRoute + '/count';
          sails.router.bind(route, countFn, null, { controller: model.identity });
        });

      });

      cb();
    }
  }
};
