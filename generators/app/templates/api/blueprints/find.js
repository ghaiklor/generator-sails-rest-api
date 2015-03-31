var actionUtil = require('sails/lib/hooks/blueprints/actionUtil');

/**
 * Find Records
 * GET /:model
 * GET /:model/:id
 *
 * An API call to find and return model instances from the data adapter using the specified criteria.
 * If an id was specified, just the instance with that unique id will be returned.
 */
module.exports = function (req, res) {
  if (actionUtil.parsePk(req)) return require('./findOne')(req, res);

  var Model = actionUtil.parseModel(req);
  var where = actionUtil.parseCriteria(req);
  var limit = actionUtil.parseLimit(req);
  var skip = actionUtil.parseSkip(req);
  var sort = actionUtil.parseSort(req);
  var query = actionUtil.populateEach(Model.find().where(where).limit(limit).skip(skip).sort(sort), req);

  query
    .then(function (records) {
      return [records, Model.count(where)];
    })
    .spread(function (records, count) {
      return [records, null, null, {
        criteria: where,
        limit: limit,
        start: skip,
        end: skip + limit,
        sort: sort,
        total: count
      }];
    })
    .spread(res.ok)
    .catch(res.serverError);
};
