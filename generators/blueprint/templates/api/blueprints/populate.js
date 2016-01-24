/**
 * Populate an association
 * GET /:model/:parentId/:relation
 * GET /:model/:parentId/:relation/:id
 *
 * Expand response with populated data from relations in models.
 */

module.exports = require('sails/lib/hooks/blueprints/actions/populate');
