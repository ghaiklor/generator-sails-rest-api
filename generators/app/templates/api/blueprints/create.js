var actionUtil = require('sails/lib/hooks/blueprints/actionUtil');

/**
 * Create Record
 * POST /:model
 *
 * An API call to create and return a single model instance using the specified parameters.
 */
module.exports = function (req, res) {
  var Model = actionUtil.parseModel(req);
  var data = actionUtil.parseValues(req);

  Model
    .create(data)
    .exec(function (error, record) {
      if (error) return res.serverError(error);

      return res.created(record);
    });
};
