/**
 * 401 (Unauthorized) Handler
 *
 * Similar to 403 Forbidden.
 * Specifically for use when authentication is possible but has failed or not yet been provided.
 */

module.exports = function () {
    this.res.status(401);
};
