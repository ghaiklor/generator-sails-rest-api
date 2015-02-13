/**
 * 409 (Conflict) Response
 *
 * Indicates that the request could not be processed because of conflict in the request, such as an edit conflict.
 * Whenever a resource conflict would be caused by fulfilling the request.
 * Duplicate entries and deleting root objects when cascade-delete is not supported, etc.
 */

module.exports = function () {
    this.res.status(409);
};
