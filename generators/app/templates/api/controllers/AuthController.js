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
                return res.serverError(error);
            }

            if (info || !user) {
                return res.unauthorized(null, info.code, info.message);
            }

            res.ok({
                token: CipherService.create('jwt', {id: user.id}).hashSync(),
                user: user
            });
        })(req, res);
    },

    /**
     * Sign up in system
     */
    signup: function (req, res) {
        // TODO: think about model duplicate

        User
            .create(req.allParams())
            .exec(function (error, user) {
                if (error) {
                    sails.log.error(error);
                    res.serverError(error);
                } else {
                    res.created({
                        token: CipherService.create('jwt', {id: user.id}).hashSync(),
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
                    return res.serverError(error);
                }

                if (info || !user) {
                    return res.unauthorized(null, info.code, info.message);
                }

                res.ok({
                    token: CipherService.create('jwt', {id: user.id}).hashSync(),
                    user: user
                });
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
                    return res.serverError(error);
                }

                if (info) {
                    return res.unauthorized(null, info.code, info.message);
                }

                res.ok({
                    token: CipherService.create('jwt', {id: user.id}).hashSync(),
                    user: user
                });
            })(req, res);
        })(req, res);
    },

    /**
     * Yahoo authorization\linking
     */
    yahoo: function (req, res) {
        passport.authenticate('jwt', function (error, user) {
            req.user = user;

            passport.authenticate('yahoo-token', function (error, user, info) {
                if (error) {
                    sails.log.error(error);
                    return res.serverError(error);
                }

                if (info) {
                    return res.unauthorized(null, info.code, info.message);
                }

                res.ok({
                    token: CipherService.create('jwt', {id: user.id}).hashSync(),
                    user: user
                });
            })(req, res);
        })(req, res);
    }
};
