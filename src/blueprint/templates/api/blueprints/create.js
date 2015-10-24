import _ from 'lodash';
import actionUtil from 'sails/lib/hooks/blueprints/actionUtil';

/**
 * Create Record
 * POST /:model
 *
 * An API call to create and return a single model instance using the specified parameters.
 */
export default function (req, res) {
  let Model = actionUtil.parseModel(req);
  let values = actionUtil.parseValues(req);

  Model
    .create(_.omit(values, 'id'))
    .then(res.created)
    .catch(res.negotiate);
};
