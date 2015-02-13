/**
 * 404 (Not Found) Handler
 *
 * The requested resource could not be found but may be available again in the future.
 * Subsequent requests by the client are permissible.
 */

module.exports = function (data, status, message) {
    this.res.status(404);
    this.res.jsonx({
        status: status || "E_NOT_FOUND",
        message: message || "Requested resource is not found",
        response: data || {}
    });
};
