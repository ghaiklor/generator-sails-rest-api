/**
 * 400 (Bad Request) Response
 *
 * The request cannot be fulfilled due to bad syntax.
 * General error when fulfilling the request would cause an invalid state.
 * Domain validation errors, missing data, etc.
 */

module.exports = function (data, code, message, root) {
  // TODO: make transform camelCase to snake_case
  var response = _.assign({
    code: code || 'E_BAD_REQUEST',
    message: message || 'The request cannot be fulfilled due to bad syntax',
    data: data || {}
  }, root);

  this.req._sails.log.silly('Sent (400 BAD REQUEST)\n', response);

  this.res.status(400);
  this.res.jsonx(response);
};
