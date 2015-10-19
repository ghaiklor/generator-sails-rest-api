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

  let fields = req.param('fields') ? req.param('fields').replace(/ /g, '').split(',') : [];
  let populate = req.param('populate') ? req.param('populate').replace(/ /g, '').split(',') : [];
  let Model = actionUtil.parseModel(req);
  let pk = actionUtil.requirePk(req);
  let query = Model.find(pk, fields.length > 0 ? {select: fields} : null);
  let findQuery = _.reduce(_.intersection(populate, takeAliases(Model.associations)), populateAliases, query);

  findQuery
    .then(record => record[0] ? res.ok(record[0]) : res.notFound())
    .catch(res.negotiate);
};
