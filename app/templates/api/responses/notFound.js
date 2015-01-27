/**
 * 404 (Not Found) Handler
 * @description :: Handler for error code 404
 */

module.exports = function (data, status, message) {
    data = data || {};

    data.status = status || "E_NOT_FOUND";
    data.message = message || "Requested resource is not found";

    this.res.status(404);
    this.res.jsonx(data);
};
