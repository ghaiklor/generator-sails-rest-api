var actionUtil = require('sails/lib/hooks/blueprints/actionUtil');

/**
 * Update One Record
 * PUT /:model/:id
 *
 * An API call to update a model instance with the specified `id`, treating the other unbound parameters as attributes.
 */
module.exports = function (req, res) {
  var Model = actionUtil.parseModel(req);
  var values = actionUtil.parseValues(req);

  if (!((req.body && req.body.id) || req.query.id)) delete values.id;

  Model
    .update(actionUtil.requirePk(req), values)
    .then(function (records) {
      return actionUtil.populateEach(Model.findOne(records[0][Model.primaryKey]), req);
    })
    .then(res.ok)
    .catch(res.serverError);
};
