var _ = require('lodash');
var actionUtil = require('sails/lib/hooks/blueprints/actionUtil');

/**
 * Update One Record
 * PUT /:model/:id
 *
 * An API call to update a model instance with the specified `id`, treating the other unbound parameters as attributes.
 */
module.exports = function (req, res) {
  var Model = actionUtil.parseModel(req);
  var PK = actionUtil.requirePk(req);
  var values = actionUtil.parseValues(req);

  Model
    .update(PK, _.omit(values, 'id'))
    .then(function (records) {
      return records[0] ? res.ok(records[0]) : res.serverError();
    })
    .catch(res.serverError);
};
