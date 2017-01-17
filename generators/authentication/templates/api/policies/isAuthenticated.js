"use strict";

/**
 * isAuthenticated
 * @description :: Policy that inject user in `req` via JSON Web Token
 */

const passport = require('passport');

module.exports = (req, res, next) => {
  passport.authenticate('jwt', (error, user, info) => {
    
    if (info.name === 'TokenExpiredError') info.status = 401;
    if (info.name === 'JsonWebTokenError') info.status = 401;
    if (error || !user) return res.negotiate(error || info);

    req.user = user;

    next();
  })(req, res);
};
