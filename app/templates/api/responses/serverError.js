/**
 * 500 (Server Error) Response
 * @description :: Handler for error code 500
 */

module.exports = function (data, status, message) {
    this.res.status(500);
    this.res.jsonx({
        status: status || "E_SERVER_ERROR",
        message: message || "Internal server error",
        response: data || {}
    });
};
