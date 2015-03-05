/**
 * isAuthenticated
 * @description :: Policy that inject user in `req` via JSON Web Token
 */

var passport = require('passport');

module.exports = function (req, res, next) {
    passport.authenticate('jwt', function (error, user, info) {
        if (error) return res.serverError(error);
        if (!user) return res.unauthorized(null, info.code, info.message);

        req.user = user;
        next();
    })(req, res);
};
