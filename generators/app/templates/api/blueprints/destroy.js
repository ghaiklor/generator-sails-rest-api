var actionUtil = require('sails/lib/hooks/blueprints/actionUtil');

/**
 * Destroy One Record
 * DELETE /:model/:id
 *
 * Destroys the single model instance with the specified `id` from the data adapter for the given model if it exists.
 */
module.exports = function (req, res) {
  actionUtil.parseModel(req)
    .destroy(actionUtil.requirePk(req))
    .then(res.ok)
    .catch(res.serverError);
};
