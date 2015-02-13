/**
 * 400 (Bad Request) Handler
 *
 * The request cannot be fulfilled due to bad syntax.
 */

module.exports = function (data, status, message) {
    this.res.status(400);
    this.res.jsonx({
        status: status || "E_BAD_REQUEST",
        message: message || "Request has invalid data",
        response: data || {}
    });
};
