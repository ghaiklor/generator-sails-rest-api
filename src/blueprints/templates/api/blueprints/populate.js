/**
 * Populate an association
 * GET /:model/:parentId/:relation
 * GET /:model/:parentId/:relation/:id
 *
 * Expand response with populated data from relations in models.
 */
import populate from 'sails/lib/hooks/blueprints/actions/populate';

export default populate;
