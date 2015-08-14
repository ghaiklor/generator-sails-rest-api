var _ = require('lodash');
var actionUtil = require('sails/lib/hooks/blueprints/actionUtil');

var takeAliases = _.partial(_.pluck, _, 'alias');
var populateAliases = function (model, alias) {
  return model.populate(alias);
};

/**
 * Find One Record
 * GET /:model/:id
 *
 * An API call to find and return a single model instance from the data adapter using the specified id.
 */
module.exports = function (req, res) {
  _.set(req.options, 'criteria.blacklist', ['limit', 'skip', 'sort', 'populate', 'fields']);

  var fields = req.param('fields') ? req.param('fields').replace(/ /g, '').split(',') : [];
  var populate = req.param('populate') ? req.param('populate').replace(/ /g, '').split(',') : [];
  var Model = actionUtil.parseModel(req);
  var PK = actionUtil.requirePk(req);
  var findQuery = _.reduce(_.intersection(populate, takeAliases(Model.associations)), populateAliases, Model.findOne(PK));

  findQuery
    .then(function (_record) {
      var record = fields.length > 0 ? _.pick(_record, fields) : _record;
      return record ? res.ok(record) : res.notFound();
    })
    .catch(res.serverError);
};
