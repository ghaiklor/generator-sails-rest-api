/**
 * AuthController
 * @description :: Server-side logic for manage user's authorization
 */

var passport = require('passport');

module.exports = {
    /**
     * Sign in by local strategy in passport
     */
    signin: function (req, res) {
        passport.authenticate('local', function (error, user, info) {
            if (error) {
                sails.log.error(error);
                res.serverError(error);
            } else if (info) {
                res.forbidden(null, info.status, info.message);
            } else {
                res.ok({
                    // TODO: think about jwt as cipher
                    token: JwtService.signSync({id: user.id}),
                    user: user
                });
            }
        })(req, res);
    },

    /**
     * Sign up in system
     */
    signup: function (req, res) {
        User
            .create(req.allParams())
            .exec(function (error, user) {
                if (error) {
                    sails.log.error(error);
                    res.serverError(error);
                } else {
                    res.ok({
                        token: JwtService.signSync({id: user.id}),
                        user: user
                    });
                }
            });
    },

    /**
     * Facebook authorization\linking
     */
    facebook: function (req, res) {
        passport.authenticate('jwt', function (error, user) {
            req.user = user;

            passport.authenticate('facebook-token', function (error, user, info) {
                if (error) {
                    sails.log.error(error);
                    res.serverError(error);
                } else if (info) {
                    res.forbidden(null, info.status, info.message);
                } else {
                    res.ok({
                        token: JwtService.signSync({id: user.id}),
                        user: user
                    });
                }
            })(req, res);
        })(req, res);
    },

    /**
     * Twitter authorization\linking
     */
    twitter: function (req, res) {
        passport.authenticate('jwt', function (error, user) {
            req.user = user;

            passport.authenticate('twitter-token', function (error, user, info) {
                if (error) {
                    sails.log.error(error);
                    res.serverError(error);
                } else if (info) {
                    res.forbidden(null, info.status, info.message);
                } else {
                    res.ok({
                        token: JwtService.signSync({id: user.id}),
                        user: user
                    });
                }
            })(req, res);
        })(req, res);
    }
};
