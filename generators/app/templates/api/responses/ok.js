/**
 * 200 (OK) Response
 *
 * General status code. Most common code used to indicate success.
 * The actual response will depend on the request method used.
 * In a GET request, the response will contain an entity corresponding to the requested resource.
 * In a POST request the response will contain an entity describing or containing the result of the action.
 */

var _ = require('lodash');

module.exports = function (data) {
  var response = _.assign({
    code: _.get(data, 'code', 'OK'),
    message: _.get(data, 'message', 'Operation is successfully executed'),
    data: _.get(data, 'data', data || {})
  }, _.get(data, 'root', {}));

  this.res.status(200);
  this.res.jsonx(response);
};
