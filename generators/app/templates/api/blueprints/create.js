var actionUtil = require('sails/lib/hooks/blueprints/actionUtil');

/**
 * Triggers when Model is created
 * @param {Object} req
 * @param {Object} res
 * @param {Object} error
 * @param {Object} record
 * @returns {*}
 * @private
 */
function _onModelCreate(req, res, error, record) {
  if (error) return res.serverError(error);

  return res.created(record);
}

/**
 * Create Record
 * POST /:model
 *
 * An API call to create and return a single model instance using the specified parameters.
 */
module.exports = function (req, res) {
  var Model = actionUtil.parseModel(req);
  var data = actionUtil.parseValues(req);

  Model.create(data).exec(_onModelCreate.bind(req, res));
};
