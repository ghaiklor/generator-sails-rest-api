import _ from 'lodash';
import actionUtil from 'sails/lib/hooks/blueprints/actionUtil';

/**
 * Update One Record
 * PUT /:model/:id
 *
 * An API call to update a model instance with the specified `id`, treating the other unbound parameters as attributes.
 */
export default function (req, res) {
  let Model = actionUtil.parseModel(req);
  let pk = actionUtil.requirePk(req);
  let values = actionUtil.parseValues(req);

  Model
    .update(pk, _.omit(values, 'id'))
    .then(records => records[0] ? res.ok(records[0]) : res.notFound())
    .catch(res.negotiate);
};
