"use strict";

/**
 * SearchController
 * @description :: Server-side logic for searching within records in database
 */

const _ = require('lodash');
const Promise = require('bluebird');

const toLowerCase = _.partial(_.result, _, 'toLowerCase');
const parseModels = _.flow(toLowerCase, _.method('split', ','));

module.exports = {
  index(req, res) {
    const q = req.param('q');
    if (!q) return res.badRequest(null, {message: 'You should specify a "q" parameter!'});

    const models = parseModels(req.param('models')) || _.keys(sails.models);

    Promise.reduce(models, (res, modelName) => {
        const model = sails.models[modelName];

        if (!model) return res;

        const where = _.transform(model.definition, (result, val, key) => result.or.push(_.set({}, key, {contains: q})), {or: []});

        return Promise.join(modelName, model.find(where), _.partial(_.set, res));
      }, {})
      .then(res.ok)
      .catch(res.negotiate);
  }
};
