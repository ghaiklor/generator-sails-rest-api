var actionUtil = require('sails/lib/hooks/blueprints/actionUtil');

/**
 * Destroy One Record
 * DELETE /:model/:id
 *
 * Destroys the single model instance with the specified `id` from the data adapter for the given model if it exists.
 */
module.exports = function (req, res) {
  var Model = actionUtil.parseModel(req);
  var PK = actionUtil.requirePk(req);

  Model
    .destroy(PK)
    .then(function (records) {
      return records[0] ? res.ok(records[0]) : res.notFound();
    })
    .catch(res.serverError);
};
