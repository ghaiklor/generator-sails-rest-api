var actionUtil = require('sails/lib/hooks/blueprints/actionUtil');

/**
 * Find One Record
 * GET /:model/:id
 *
 * An API call to find and return a single model instance from the data adapter using the specified id.
 */

module.exports = function (req, res) {
    var Model = actionUtil.parseModel(req),
        pk = actionUtil.requirePk(req),
        query = Model.findOne(pk);

    query = actionUtil.populateEach(query, req);
    query.exec(function (error, record) {
        if (error) return res.serverError(error);
        if (!record) return res.notFound();

        return res.ok(record);
    });
};
