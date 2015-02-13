/**
 * 200 (OK) Handler
 *
 * Standard response for successful HTTP requests.
 * The actual response will depend on the request method used.
 * In a GET request, the response will contain an entity corresponding to the requested resource.
 * In a POST request the response will contain an entity describing or containing the result of the action.
 */

module.exports = function (data, status, message) {
    this.res.status(200);
    this.res.jsonx({
        status: status || "OK",
        message: message || "Requested operation is successfully executed",
        response: data || {}
    });
};
