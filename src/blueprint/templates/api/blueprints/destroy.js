import actionUtil from 'sails/lib/hooks/blueprints/actionUtil';

/**
 * Destroy One Record
 * DELETE /:model/:id
 *
 * Destroys the single model instance with the specified `id` from the data adapter for the given model if it exists.
 */
export default function (req, res) {
  let Model = actionUtil.parseModel(req);
  let pk = actionUtil.requirePk(req);

  Model
    .destroy(pk)
    .then(records => records[0] ? res.ok(records[0]) : res.notFound())
    .catch(res.negotiate);
};
