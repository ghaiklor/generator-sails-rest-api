"use strict";

/**
 * Add Record To Collection
 * POST /:model/:id/:collectionAttr/:childId
 *
 * Associate one record with the collection attribute of another.
 * If the record being added has a primary key value already, it will just be linked.
 * If it doesn't, a new record will be created, then linked appropriately.
 * In either case, the association is bidirectional.
 */

module.exports = require('sails/lib/hooks/blueprints/actions/add');
