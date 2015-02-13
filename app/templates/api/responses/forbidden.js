/**
 * 403 (Forbidden) Handler
 *
 * The request was a legal request, but the server is refusing to respond to it.
 * Unlike a 401 Unauthorized response, authenticating will make no difference.
 */

module.exports = function (data, status, message) {
    this.res.status(403);
    this.res.jsonx({
        status: status || "E_FORBIDDEN",
        message: message || "You don't have access to this resource",
        response: data || {}
    });
};
