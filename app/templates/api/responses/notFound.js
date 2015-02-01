/**
 * 404 (Not Found) Handler
 * @description :: Handler for error code 404
 */

module.exports = function (data, status, message) {
    this.res.status(404);
    this.res.jsonx({
        status: status || "E_NOT_FOUND",
        message: message || "Requested resource is not found",
        response: data || {}
    });
};
