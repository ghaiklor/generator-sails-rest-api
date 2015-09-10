/**
 * 500 (Internal Server Error) Response
 *
 * A generic error message, given when no more specific message is suitable.
 * The general catch-all error when the server-side throws an exception.
 */

var _ = require('lodash');

module.exports = function (data) {
  var response = _.assign({
    code: _.get(data, 'code', 'E_INTERNAL_SERVER_ERROR'),
    message: _.get(data, 'message', 'Something bad happened on the server'),
    data: _.get(data, 'data', data || {})
  }, _.get(data, 'root', {}));

  this.res.status(500);
  this.res.jsonx(response);
};
