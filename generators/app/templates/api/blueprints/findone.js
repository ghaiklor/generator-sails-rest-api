var _ = require('lodash');
var actionUtil = require('sails/lib/hooks/blueprints/actionUtil');

/**
 * Find One Record
 * GET /:model/:id
 *
 * An API call to find and return a single model instance from the data adapter using the specified id.
 */
module.exports = function (req, res) {
  _.set(req.options, 'criteria.blacklist', ['limit', 'skip', 'sort', 'populate', 'fields']);

  var fields = req.param('fields') ? req.param('fields').split(',') : false;
  var Model = actionUtil.parseModel(req);
  var PK = actionUtil.requirePk(req);
  var findQuery = actionUtil.populateEach(Model.findOne(PK), req);

  findQuery
    .then(function (_record) {
      var record = fields ? _.pick(_record, fields) : _record;
      return record ? res.ok(record) : res.notFound();
    })
    .catch(res.serverError);
};
