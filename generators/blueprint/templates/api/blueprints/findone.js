"use strict";

const _ = require('lodash');
const actionUtil = require('sails/lib/hooks/blueprints/actionUtil');

const takeAliases = _.partial(_.map, _, item => item.alias);
const populateAliases = (model, alias) => model.populate(alias);

/**
 * Find One Record
 * GET /:model/:id
 *
 * An API call to find and return a single model instance from the data adapter using the specified id.
 */
module.exports = (req, res) => {
  _.set(req.options, 'criteria.blacklist', ['fields', 'populate', 'limit', 'skip', 'page', 'sort']);

  const fields = req.param('fields') ? req.param('fields').replace(/ /g, '').split(',') : [];
  const populate = req.param('populate') ? req.param('populate').replace(/ /g, '').split(',') : [];
  const Model = actionUtil.parseModel(req);
  const pk = actionUtil.requirePk(req);
  const query = Model.find(pk, fields.length > 0 ? {select: fields} : null);
  const findQuery = _.reduce(_.intersection(populate, takeAliases(Model.associations)), populateAliases, query);

  findQuery
    .then(record => record[0] ? res.ok(record[0]) : res.notFound())
    .catch(res.negotiate);
};
