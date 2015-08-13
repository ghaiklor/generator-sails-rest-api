/**
 * 401 (Unauthorized) Response
 *
 * Similar to 403 Forbidden.
 * Specifically for use when authentication is possible but has failed or not yet been provided.
 * Error code response for missing or invalid authentication token.
 */

module.exports = function (data, code, message, root) {
  // TODO: make transform camelCase to snake_case
  var response = _.assign({
    code: code || 'E_UNAUTHORIZED',
    message: message || 'Missing or invalid authentication token',
    data: data || {}
  }, root);

  this.res.status(401);
  this.res.jsonx(response);
};
