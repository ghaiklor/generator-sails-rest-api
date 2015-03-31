var Promise = require('bluebird');
var actionUtil = require('sails/lib/hooks/blueprints/actionUtil');

/**
 * Find Records
 * GET /:model
 *
 * An API call to find and return model instances from the data adapter using the specified criteria.
 * If an id was specified, just the instance with that unique id will be returned.
 */
module.exports = function (req, res) {
  var Model = actionUtil.parseModel(req);
  var where = actionUtil.parseCriteria(req);
  var limit = actionUtil.parseLimit(req);
  var skip = actionUtil.parseSkip(req);
  var sort = actionUtil.parseSort(req);
  var findQuery = actionUtil.populateEach(Model.find().where(where).limit(limit).skip(skip).sort(sort), req);
  var countQuery = Model.count(where);

  Promise.all([findQuery, countQuery])
    .spread(function (records, count) {
      return [records, null, null, {
        criteria: where,
        limit: limit,
        start: skip,
        end: skip + limit,
        total: count
      }];
    })
    .spread(res.ok)
    .catch(res.serverError);
};
