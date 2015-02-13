/**
 * 204 (No Content) Handler
 *
 * The server successfully processed the request, but is not returning any content.
 */

module.exports = function () {
    this.res.status(204);
};
