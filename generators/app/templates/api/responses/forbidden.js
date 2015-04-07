/**
 * 403 (Forbidden) Response
 *
 * The request was a legal request, but the server is refusing to respond to it.
 * Unlike a 401 Unauthorized response, authenticating will make no difference.
 * Error code for user not authorized to perform the operation or the resource is unavailable for some reason.
 */

module.exports = function (data, code, message, root) {
  // TODO: make transform camelCase to snake_case
  var response = _.assign({
    code: code || 'E_FORBIDDEN',
    message: message || 'User not authorized to perform the operation',
    data: data || {}
  }, root);

  this.req._sails.log.silly('Sent (403 FORBIDDEN)\n', response);

  this.res.status(403);
  this.res.jsonx(response);
};
