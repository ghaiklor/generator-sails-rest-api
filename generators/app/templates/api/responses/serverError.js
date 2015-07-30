/**
 * 500 (Internal Server Error) Response
 *
 * A generic error message, given when no more specific message is suitable.
 * The general catch-all error when the server-side throws an exception.
 */

module.exports = function (data, code, message, root) {
  // TODO: make transform camelCase to snake_case
  var response = _.assign({
    code: code || ErrorCodes.serverError.code,
    message: message || ErrorCodes.serverError.message,
    data: data || {}
  }, root);

  this.req._sails.log.error('Sent (500 INTERNAL SERVER ERROR)\n', response);

  this.res.status(500);
  this.res.jsonx(response);
};
