import _ from 'lodash';
import actionUtil from 'sails/lib/hooks/blueprints/actionUtil';

const takeAliases = _.partial(_.pluck, _, 'alias');
const populateAliases = (model, alias) => model.populate(alias);

/**
 * Find One Record
 * GET /:model/:id
 *
 * An API call to find and return a single model instance from the data adapter using the specified id.
 */
export default function (req, res) {
  _.set(req.options, 'criteria.blacklist', ['fields', 'populate', 'limit', 'skip', 'page', 'sort']);

  var fields = req.param('fields') ? req.param('fields').replace(/ /g, '').split(',') : [];
  var populate = req.param('populate') ? req.param('populate').replace(/ /g, '').split(',') : [];
  var Model = actionUtil.parseModel(req);
  var pk = actionUtil.requirePk(req);
  var query = Model.find(pk, fields.length > 0 ? {select: fields} : null);
  var findQuery = _.reduce(_.intersection(populate, takeAliases(Model.associations)), populateAliases, query);

  findQuery
    .then(record => record[0] ? res.ok(record[0]) : res.notFound())
    .catch(res.negotiate);
};
