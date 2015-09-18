/**
 * Remove a member from an association
 * DELETE /:model/:parentId/:collectionAttr/:id
 *
 * Removes associated record from collection.
 */
import remove from 'sails/lib/hooks/blueprints/actions/remove';

export default remove;
