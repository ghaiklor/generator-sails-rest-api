/**
 * 500 (Server Error) Response
 * @description :: Handler for error code 500
 */

module.exports = function (data, status, message) {
    data = data || {};

    data.status = status || "E_SERVER_ERROR";
    data.message = message || "Internal server error";

    this.res.status(500);
    this.res.jsonx(data);
};
