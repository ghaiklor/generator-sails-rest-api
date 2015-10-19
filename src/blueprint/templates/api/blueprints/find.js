import _ from 'lodash';
import actionUtil from 'sails/lib/hooks/blueprints/actionUtil';

const takeAlias = _.partial(_.pluck, _, 'alias');
const populateAlias = (model, alias) => model.populate(alias);

/**
 * Find Records
 * GET /:model
 *
 * An API call to find and return model instances from the data adapter using the specified criteria.
 * If an id was specified, just the instance with that unique id will be returned.
 */
export default function (req, res) {
  _.set(req.options, 'criteria.blacklist', ['fields', 'populate', 'limit', 'skip', 'page', 'sort']);

  let fields = req.param('fields') ? req.param('fields').replace(/ /g, '').split(',') : [];
  let populate = req.param('populate') ? req.param('populate').replace(/ /g, '').split(',') : [];
  let Model = actionUtil.parseModel(req);
  let where = actionUtil.parseCriteria(req);
  let limit = actionUtil.parseLimit(req);
  let skip = req.param('page') * limit || actionUtil.parseSkip(req);
  let sort = actionUtil.parseSort(req);
  let query = Model.find(null, fields.length > 0 ? {select: fields} : null).where(where).limit(limit).skip(skip).sort(sort);
  let findQuery = _.reduce(_.intersection(populate, takeAlias(Model.associations)), populateAlias, query);

  findQuery
    .then(records => [records, {
      root: {
        criteria: where,
        limit: limit,
        start: skip,
        end: skip + limit,
        page: Math.floor(skip / limit)
      }
    }])
    .spread(res.ok)
    .catch(res.negotiate);
};
