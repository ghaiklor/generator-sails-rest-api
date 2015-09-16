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
  var root = _.get(error, 'root');
  var data = _.get(error, 'invalidAttributes') || _.omit(error, ['name', 'code', 'reason', 'message', 'root', 'status', 'oauthError']);
  var statusCode = _.get(error, 'status') || _.get(error, 'oauthError') || 500;
  var config = {code: code, message: message, root: root};

  if (statusCode === 401) return res.unauthorized(data, config);
  if (statusCode === 403) return res.forbidden(data, config);
  if (statusCode === 404) return res.notFound(data, config);
  if (statusCode >= 400 && statusCode < 500) return res.badRequest(data, config);

  return res.serverError(data, config);
};
