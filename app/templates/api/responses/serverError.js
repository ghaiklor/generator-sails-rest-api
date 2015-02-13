/**
 * 500 (Server Error) Response
 *
 * A generic error message, given when no more specific message is suitable.
 * The general catch-all error when the server-side throws an exception.
 */

module.exports = function (data, status, message) {
    this.res.status(500);
    this.res.jsonx({
        status: status || "E_SERVER_ERROR",
        message: message || "Internal server error",
        response: data || {}
    });
};
