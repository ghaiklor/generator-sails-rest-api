"use strict";

const _ = require('lodash');
const actionUtil = require('sails/lib/hooks/blueprints/actionUtil');

const takeAlias = _.partial(_.map, _, item => item.alias);
const populateAlias = (model, alias) => model.populate(alias);

/**
 * Find Records
 * GET /:model
 *
 * An API call to find and return model instances from the data adapter using the specified criteria.
 * If an id was specified, just the instance with that unique id will be returned.
 */
module.exports = (req, res) => {
  _.set(req.options, 'criteria.blacklist', ['fields', 'populate', 'limit', 'skip', 'page', 'sort']);

  const fields = req.param('fields') ? req.param('fields').replace(/ /g, '').split(',') : [];
  const populate = req.param('populate') ? req.param('populate').replace(/ /g, '').split(',') : [];
  const Model = actionUtil.parseModel(req);
  const where = actionUtil.parseCriteria(req);
  const limit = actionUtil.parseLimit(req);
  const skip = req.param('page') * limit || actionUtil.parseSkip(req);
  const sort = actionUtil.parseSort(req);
  const query = Model.find(null, fields.length > 0 ? {select: fields} : null).where(where).limit(limit).skip(skip).sort(sort);
  const findQuery = _.reduce(_.intersection(populate, takeAlias(Model.associations)), populateAlias, query);

  findQuery
    .then(records => [records, {
      root: {
        criteria: where,
        limit: limit,
        start: skip,
        end: skip + limit,
        page: Math.floor(skip / limit)
      }
    }])
    .spread(res.ok)
    .catch(res.negotiate);
};
