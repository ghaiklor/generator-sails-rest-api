/**
 * isAuthenticated
 * @description :: Policy that inject user in `req` via JSON Web Token
 */

import passport from 'passport';

export default function (req, res, next) {
  passport.authenticate('jwt', (error, user, info) => {
    if (error || !user) return res.negotiate(error || info);

    req.user = user;

    next();
  })(req, res);
}
