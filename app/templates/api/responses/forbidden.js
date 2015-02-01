/**
 * 403 (Forbidden) Handler
 * @description :: Handler for error code 403
 */

module.exports = function (data, status, message) {
    this.res.status(403);
    this.res.jsonx({
        status: status || "E_FORBIDDEN",
        message: message || "You don't have access to this resource",
        response: data || {}
    });
};
