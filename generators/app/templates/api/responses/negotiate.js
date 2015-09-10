/**
 * Generic Error Handler
 *
 * Calls the appropriate custom response for a given error
 */

var _ = require('lodash');

module.exports = function (error) {
  var res = this.res;
  var code = _.get(error, 'code');
  var message = _.get(error, 'reason');
  var data = _.get(error, 'invalidAttributes', error);
  var statusCode = _.get(error, 'status', 500);
  var response = {code: code, message: message, data: data};

  if (statusCode === 401) return res.unauthorized(response);
  if (statusCode === 403) return res.forbidden(response);
  if (statusCode === 404) return res.notFound(response);
  if (statusCode >= 400 && statusCode < 500) return res.badRequest(response);

  return res.serverError(response);
};
