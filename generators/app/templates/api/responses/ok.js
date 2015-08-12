/**
 * 200 (OK) Response
 *
 * General status code. Most common code used to indicate success.
 * The actual response will depend on the request method used.
 * In a GET request, the response will contain an entity corresponding to the requested resource.
 * In a POST request the response will contain an entity describing or containing the result of the action.
 */

module.exports = function (data, code, message, root) {
  // TODO: make transform camelCase to snake_case
  var response = _.assign({
    code: code || 'OK',
    message: message || 'Operation is successfully executed',
    data: data || {}
  }, root);

  this.req._sails.log.silly('Sent (200 OK)\n', response);

  this.res.status(200);
  this.res.jsonx(response);
};
