/**
 * Generic Error Handler
 *
 * Calls the appropriate custom response for a given error
 */

var _ = require('lodash');

module.exports = function (error) {
  var res = this.res;
  var code = _.get(error, 'code');
  var message = _.get(error, 'reason') || _.get(error, 'message');
  var data = _.get(error, 'invalidAttributes') || _.omit(error, ['name', 'code', 'reason', 'message', 'status', 'oauthError']);
  var statusCode = _.get(error, 'status') || _.get(error, 'oauthError') || 500;

  if (statusCode === 401) return res.unauthorized(data, {code: code, message: message});
  if (statusCode === 403) return res.forbidden(data, {code: code, message: message});
  if (statusCode === 404) return res.notFound(data, {code: code, message: message});
  if (statusCode >= 400 && statusCode < 500) return res.badRequest(data, {code: code, message: message});

  return res.serverError(data, {code: code, message: message});
};
