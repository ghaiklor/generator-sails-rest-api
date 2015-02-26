/**
 * isAuthenticated
 * @description :: Policy that inject user in `req` via JSON Web Token
 */

var passport = require('passport');

module.exports = function (req, res, next) {
    passport.authenticate('jwt', function (error, user, info) {
        if (error) {
            sails.log.error(error);
            res.serverError(error);
        } else if (info) {
            res.unauthorized(null, info.code, info.message);
        } else {
            req.user = user;
            next();
        }
    })(req, res);
};
