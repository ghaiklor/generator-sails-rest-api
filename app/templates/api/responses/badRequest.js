/**
 * 400 (Bad Request) Response
 *
 * The request cannot be fulfilled due to bad syntax.
 * General error when fulfilling the request would cause an invalid state.
 * Domain validation errors, missing data, etc.
 */

module.exports = function (data, status, message) {
    this.res.status(400);
    this.res.jsonx({
        status: status || "E_BAD_REQUEST",
        message: message || "Request has invalid data",
        response: data || {}
    });
};
