/**
 * 204 (No Content) Response
 *
 * The server successfully processed the request, but is not returning any content.
 * Status when wrapped responses (e.g. JSEND) are not used and nothing is in the body (e.g. DELETE).
 */

module.exports = function () {
    this.res.status(204);
};
