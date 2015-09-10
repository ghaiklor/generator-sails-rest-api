/**
 * Generic Error Handler
 *
 * Calls the appropriate custom response for a given error
 */

module.exports = function (error) {
  var res = this.res;
  var code = error && error.code;
  var message = error && error.reason;
  var data = (error && error.invalidAttributes) || error;
  var statusCode = (error && error.status) || 500;

  if (statusCode === 401) return res.unauthorized(data, code, message);
  if (statusCode === 403) return res.forbidden(data, code, message);
  if (statusCode === 404) return res.notFound(data, code, message);
  if (statusCode >= 400 && statusCode < 500) return res.badRequest(data, code, message);

  return res.serverError(data, code, message);
};
