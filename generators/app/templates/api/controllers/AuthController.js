/**
 * AuthController
 * @description :: Server-side logic for manage user's authorization
 */

var passport = require('passport');

/**
 * Triggers when user authenticates via passport
 * @param {Object} req
 * @param {Object} res
 * @param {Object} error
 * @param {Object} user
 * @param {Object} info
 * @private
 */
function _onPassportAuth(req, res, error, user, info) {
    if (error) return res.serverError(error);
    if (!user) return res.unauthorized(null, info.code, info.message);

    return res.ok({
        token: CipherService.create('jwt', {id: user.id}).hashSync(),
        user: user
    });
}

module.exports = {
    /**
     * Sign in by local strategy in passport
     */
    signin: function (req, res) {
        passport.authenticate('local', _onPassportAuth.bind(this, req, res))(req, res);
    },

    /**
     * Sign up in system
     */
    signup: function (req, res) {
        // TODO: think about model duplicate

        User
            .create(req.allParams())
            .exec(function (error, user) {
                if (error) return res.serverError(error);

                return res.created({
                    token: CipherService.create('jwt', {id: user.id}).hashSync(),
                    user: user
                });
            });
    },

    /**
     * Facebook authorization\linking
     */
    facebook: function (req, res) {
        passport.authenticate('jwt', function (error, user) {
            req.user = user;
            passport.authenticate('facebook-token', _onPassportAuth.bind(this, req, res))(req, res);
        })(req, res);
    },

    /**
     * Twitter authorization\linking
     */
    twitter: function (req, res) {
        passport.authenticate('jwt', function (error, user) {
            req.user = user;
            passport.authenticate('twitter-token', _onPassportAuth.bind(this, req, res))(req, res);
        })(req, res);
    },

    /**
     * Yahoo authorization\linking
     */
    yahoo: function (req, res) {
        passport.authenticate('jwt', function (error, user) {
            req.user = user;
            passport.authenticate('yahoo-token', _onPassportAuth.bind(this, req, res))(req, res);
        })(req, res);
    }
};
