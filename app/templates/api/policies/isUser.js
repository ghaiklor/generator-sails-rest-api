/**
 * isUser
 * @description :: Policy that identify user by JSON Web Token
 */

var passport = require('passport');

module.exports = function (req, res, next) {
    passport.authenticate('jwt', function (error, user, info) {
        if (error) {
            sails.log.error(error);
            res.serverError(error);
        } else if (info) {
            res.forbidden(null, null, info);
        } else {
            req.user = user;
            next();
        }
    })(req, res);
};
