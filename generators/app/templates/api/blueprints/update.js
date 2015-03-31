var actionUtil = require('sails/lib/hooks/blueprints/actionUtil');

/**
 * Update One Record
 * PUT /:model/:id
 *
 * An API call to update a model instance with the specified `id`, treating the other unbound parameters as attributes.
 */
module.exports = function (req, res) {
  actionUtil.parseModel(req)
    .update(actionUtil.requirePk(req), _.omit(actionUtil.parseValues(req), 'id'))
    .then(function (records) {
      return records[0];
    })
    .then(res.ok)
    .catch(res.serverError);
};
