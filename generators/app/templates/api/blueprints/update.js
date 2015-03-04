var actionUtil = require('sails/lib/hooks/blueprints/actionUtil');

/**
 * Update One Record
 * PUT /:model/:id
 *
 * An API call to update a model instance with the specified `id`, treating the other unbound parameters as attributes.
 */
module.exports = function (req, res) {
    var Model = actionUtil.parseModel(req),
        pk = actionUtil.requirePk(req),
        values = actionUtil.parseValues(req);

    if (!((req.body && req.body.id) || req.query.id)) delete values.id;

    Model
        .findOne(pk)
        .exec(function (error, record) {
            if (error) return res.serverError(error);
            if (!record) return res.notFound();

            Model
                .update(pk, values)
                .exec(function (error, records) {
                    if (error) return res.serverError(error);

                    var updatedRecord = records[0];
                    var query = Model.findOne(updatedRecord[Model.primaryKey]);

                    query = actionUtil.populateEach(query, req);
                    query.exec(function (error, populatedRecord) {
                        if (error) return res.serverError(error);
                        if (!populatedRecord) return res.serverError(null, null, "Could not find record after updating");

                        return res.ok(populatedRecord);
                    });
                });
        });
};
