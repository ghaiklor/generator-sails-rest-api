var actionUtil = require('sails/lib/hooks/blueprints/actionUtil');

/**
 * Create Record
 * POST /:model
 *
 * An API call to create and return a single model instance using the specified parameters.
 */
module.exports = function (req, res) {
  actionUtil.parseModel(req)
    .create(actionUtil.parseValues(req))
    .then(res.created)
    .catch(res.serverError);
};
