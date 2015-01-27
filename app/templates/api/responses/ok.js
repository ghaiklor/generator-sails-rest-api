/**
 * 200 (OK) Response
 * @description :: Handler for code 200
 */

module.exports = function (data, status, message) {
    this.res.status(200);
    this.res.jsonx({
        status: status || "OK",
        message: message || "Requested operation is successfully executed",
        response: data
    });
};
