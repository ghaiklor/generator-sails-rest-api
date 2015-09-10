/**
 * Generic Error Handler
 *
 * Calls the appropriate custom response for a given error
 */

module.exports = function (error) {
  var res = this.res;
  var statusCode = (error && error.status) || 500;

  if (statusCode === 401) return res.unauthorized(error);
  if (statusCode === 403) return res.forbidden(error);
  if (statusCode === 404) return res.notFound(error);
  if (statusCode >= 400 && statusCode < 500) return res.badRequest(error);

  return res.serverError(error);
};
