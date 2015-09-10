/**
 * 400 (Bad Request) Response
 *
 * The request cannot be fulfilled due to bad syntax.
 * General error when fulfilling the request would cause an invalid state.
 * Domain validation errors, missing data, etc.
 */

var _ = require('lodash');

module.exports = function (data) {
  var response = _.assign({
    code: _.get(data, 'code', 'E_BAD_REQUEST'),
    message: _.get(data, 'message', 'The request cannot be fulfilled due to bad syntax'),
    data: _.get(data, 'data', data || {})
  }, _.get(data, 'root', {}));

  this.res.status(400);
  this.res.jsonx(response);
};
