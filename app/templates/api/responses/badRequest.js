/**
 * 400 (Bad Request) Handler
 * @description :: Handler for error code 400
 */

module.exports = function (data, status, message) {
    data = data || {};

    data.status = status || "E_BAD_REQUEST";
    data.message = message || "Request has invalid data";

    this.res.status(400);
    this.res.jsonx(data);
};
