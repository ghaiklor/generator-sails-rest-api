/**
 * 403 (Forbidden) Handler
 * @description :: Handler for error code 403
 */

module.exports = function (data, status, message) {
    data = data || {};

    data.status = status || "E_FORBIDDEN";
    data.message = message || "You don't have access to this resource";

    this.res.status(403);
    this.res.jsonx(data);
};
