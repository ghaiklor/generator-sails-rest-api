var actionUtil = require('sails/lib/hooks/blueprints/actionUtil');

/**
 * Triggers when Model.destroy
 * @param {Object} req
 * @param {Object} res
 * @param {Object} record
 * @param {Object} error
 * @returns {*}
 * @private
 */
function _onModelDestroy(req, res, record, error) {
  if (error) return res.serverError(error);

  return res.ok(record);
}

/**
 * Triggers when Model.findOne
 * @param {Object} req
 * @param {Object} res
 * @param {Object} pk
 * @param {Object} error
 * @param {Object} record
 * @returns {*}
 * @private
 */
function _onModelFindOne(req, res, pk, error, record) {
  if (error) return res.serverError(error);
  if (!record) return res.notFound();

  Model.destroy(pk).exec(_onModelDestroy.bind(req, res, record));
}

/**
 * Destroy One Record
 * DELETE /:model/:id
 *
 * Destroys the single model instance with the specified `id` from the data adapter for the given model if it exists.
 */
module.exports = function (req, res) {
  var Model = actionUtil.parseModel(req);
  var pk = actionUtil.requirePk(req);
  var query = actionUtil.populateEach(Model.findOne(pk), req);

  query.exec(_onModelFindOne.bind(req, res, pk));
};
