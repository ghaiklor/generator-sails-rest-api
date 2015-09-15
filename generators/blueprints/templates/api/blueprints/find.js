var _ = require('lodash');
var Promise = require('bluebird');
var actionUtil = require('sails/lib/hooks/blueprints/actionUtil');

var takeAlias = _.partial(_.pluck, _, 'alias');
var populateAlias = function (model, alias) {
  return model.populate(alias);
};

/**
 * Find Records
 * GET /:model
 *
 * An API call to find and return model instances from the data adapter using the specified criteria.
 * If an id was specified, just the instance with that unique id will be returned.
 */
module.exports = function (req, res) {
  _.set(req.options, 'criteria.blacklist', ['fields', 'populate', 'limit', 'skip', 'page', 'sort']);

  var fields = req.param('fields') ? req.param('fields').replace(/ /g, '').split(',') : [];
  var populate = req.param('populate') ? req.param('populate').replace(/ /g, '').split(',') : [];
  var Model = actionUtil.parseModel(req);
  var where = actionUtil.parseCriteria(req);
  var limit = actionUtil.parseLimit(req);
  var skip = req.param('page') * limit || actionUtil.parseSkip(req);
  var sort = actionUtil.parseSort(req);
  var query = Model.find(null, fields.length > 0 ? {select: fields} : null).where(where).limit(limit).skip(skip).sort(sort);
  var findQuery = _.reduce(_.intersection(populate, takeAlias(Model.associations)), populateAlias, query);
  var countQuery = Model.count(where);

  Promise.all([findQuery, countQuery])
    .spread(function (records, count) {
      return [records, {
        root: {
          criteria: where,
          limit: limit,
          start: skip,
          end: skip + limit,
          page: Math.floor(skip / limit),
          total: count
        }
      }];
    })
    .spread(res.ok)
    .catch(res.negotiate);
};
