var actionUtil = require('sails/lib/hooks/blueprints/actionUtil');

/**
 * Find Records
 * GET /:model
 * GET /:model/:id
 *
 * An API call to find and return model instances from the data adapter using the specified criteria.
 * If an id was specified, just the instance with that unique id will be returned.
 */
module.exports = function (req, res) {
    if (actionUtil.parsePk(req)) return require('./findOne')(req, res);

    var Model = actionUtil.parseModel(req),
        query = Model
            .find()
            .where(actionUtil.parseCriteria(req))
            .limit(actionUtil.parseLimit(req))
            .skip(actionUtil.parseSkip(req))
            .sort(actionUtil.parseSort(req));

    query = actionUtil.populateEach(query, req);
    query.exec(function (error, records) {
        if (error) return res.serverError(error);
        return res.ok(records);
    });
};
