/**
 * 409 (Conflict) Handler
 *
 * Indicates that the request could not be processed because of conflict in the request, such as an edit conflict.
 */

module.exports = function () {
    this.res.status(409);
};
