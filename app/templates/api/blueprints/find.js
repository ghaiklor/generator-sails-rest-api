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
    if (actionUtil.parsePk(req)) {
        return require('./findOne')(req, res);
    }

    var Model = actionUtil.parseModel(req),
        where = actionUtil.parseCriteria(req),
        limit = actionUtil.parseLimit(req),
        skip = actionUtil.parseSkip(req),
        sort = actionUtil.parseSort(req),
        query = Model.find().where(where).limit(limit).skip(skip).sort(sort);

    query = actionUtil.populateEach(query, req);
    query.exec(function (error, records) {
        if (error) {
            return res.serverError(error);
        }

        Model
            .count()
            .exec(function (error, count) {
                if (error) {
                    return res.serverError(error);
                }

                var metaInfo = {
                    start: skip,
                    end: skip + limit,
                    limit: limit,
                    total: count,
                    criteria: where
                };

                // TODO: improve with more data in headers and more correct metainfo
                res.set('Content-Range', metaInfo.start + '-' + metaInfo.end + '/' + metaInfo.total);
                return res.ok(records, null, null, metaInfo);
            });
    });
};
