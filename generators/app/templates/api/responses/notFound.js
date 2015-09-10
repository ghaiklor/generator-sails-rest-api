/**
 * 404 (Not Found) Response
 *
 * The requested resource could not be found but may be available again in the future.
 * Subsequent requests by the client are permissible.
 * Used when the requested resource is not found, whether it doesn't exist.
 */

var _ = require('lodash');

module.exports = function (data) {
  var response = _.assign({
    code: _.get(data, 'code', 'E_NOT_FOUND'),
    message: _.get(data, 'message', 'The requested resource could not be found but may be available again in the future'),
    data: _.get(data, 'data', data || {})
  }, _.get(data, 'root', {}));

  this.res.status(404);
  this.res.jsonx(response);
};
