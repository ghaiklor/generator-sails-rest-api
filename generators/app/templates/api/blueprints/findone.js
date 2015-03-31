var actionUtil = require('sails/lib/hooks/blueprints/actionUtil');

/**
 * Find One Record
 * GET /:model/:id
 *
 * An API call to find and return a single model instance from the data adapter using the specified id.
 */
module.exports = function (req, res) {
  actionUtil.populateEach(actionUtil.parseModel(req).findOne(actionUtil.requirePk(req)), req)
    .then(function (record) {
      if (!record) return res.notFound();

      return res.ok(record);
    })
    .catch(res.serverError);
};
