/**
 * 400 (Bad Request) Handler
 * @description :: Handler for error code 400
 */

module.exports = function (data, status, message) {
    this.res.status(400);
    this.res.jsonx({
        status: status || "E_BAD_REQUEST",
        message: message || "Request has invalid data",
        response: data || {}
    });
};
