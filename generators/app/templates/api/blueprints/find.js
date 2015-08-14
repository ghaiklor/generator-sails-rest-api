var _ = require('lodash');
var Promise = require('bluebird');
var actionUtil = require('sails/lib/hooks/blueprints/actionUtil');

var takeAliases = _.partial(_.pluck, _, 'alias');
var populateAliases = function (model, alias) {
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
  _.set(req.options, 'criteria.blacklist', ['limit', 'skip', 'sort', 'populate', 'fields']);

  var fields = req.param('fields') ? req.param('fields').replace(/ /g, '').split(',') : [];
  var populate = req.param('populate') ? req.param('populate').replace(/ /g, '').split(',') : [];
  var Model = actionUtil.parseModel(req);
  var where = actionUtil.parseCriteria(req);
  var limit = actionUtil.parseLimit(req);
  var skip = actionUtil.parseSkip(req);
  var sort = actionUtil.parseSort(req);
  var findQuery = _.reduce(_.intersection(populate, takeAliases(Model.associations)), populateAliases, Model.find().where(where).limit(limit).skip(skip).sort(sort));
  var countQuery = Model.count(where);

  Promise.all([findQuery, countQuery])
    .spread(function (_records, _count) {
      var records = fields.length > 0 ? _.map(_records, _.partial(_.pick, _, fields)) : _records;
      return [records, null, null, {
        criteria: where,
        limit: limit,
        start: skip,
        end: skip + limit,
        total: _count
      }];
    })
    .spread(res.ok)
    .catch(res.serverError);
};
