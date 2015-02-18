var actionUtil = require('sails/lib/hooks/blueprints/actionUtil');

/**
 * Destroy One Record
 * DELETE /:model/:id
 *
 * Destroys the single model instance with the specified `id` from the data adapter for the given model if it exists.
 */
module.exports = function (req, res) {
    var Model = actionUtil.parseModel(req),
        pk = actionUtil.requirePk(req),
        query = Model.findOne(pk);

    query = actionUtil.populateEach(query, req);
    query.exec(function (error, record) {
        if (error) {
            return res.serverError(error);
        }

        if (!record) {
            return res.notFound();
        }

        Model
            .destroy(pk)
            .exec(function (error) {
                if (error) {
                    return res.serverError(error);
                }

                return res.ok(record);
            });
    });
};
