/**
 * isAuthenticated
 * @description :: Policy that inject user in `req` via JSON Web Token
 */

var _ = require('lodash');
var passport = require('passport');

module.exports = function (req, res, next) {
  passport.authenticate('jwt', function (error, user, info) {
    if (error || !user) return res.negotiate(_.assign(error || {}, info));

    req.user = user;

    next();
  })(req, res);
};
