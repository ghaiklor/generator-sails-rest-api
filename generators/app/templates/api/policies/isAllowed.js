/**
 * isAllowed
 * @description :: Policy to check if this request goes from our applications
 */

module.exports = function (req, res, next) {
  // TODO: make here more complex security
  next();
};
