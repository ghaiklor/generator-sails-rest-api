/**
 * AuthController
 * @description :: Server-side logic for manage user's authorization
 */

var passport = require('passport');

/**
 * Triggers when user authenticates via passport
 * @param {Object} req Request object
 * @param {Object} res Response object
 * @param {Object} error Error object
 * @param {Object} user User profile
 * @param {Object} info Info if some error occurs
 * @private
 */
function _onPassportAuth(req, res, error, user, info) {
  if (error) return res.serverError(error);
  if (!user) return res.unauthorized(null, info && info.code, info && info.message);

  return res.ok({
    // TODO: replace with new type of cipher service
    token: CipherService.create('jwt', {id: user.id}).hashSync(),
    user: user
  });
}

module.exports = {
  /**
   * Sign in by local strategy in passport
   * @param {Object} req Request object
   * @param {Object} res Response object
   */
  signin: function (req, res) {
    passport.authenticate('local', _onPassportAuth.bind(this, req, res))(req, res);
  },

  /**
   * Sign up in system
   * @param {Object} req Request object
   * @param {Object} res Response object
   */
  signup: function (req, res) {
    User
      .create(_.omit(req.allParams(), 'id'))
      .then(function (user) {
        return {
          // TODO: replace with new type of cipher service
          token: CipherService.create('jwt', {id: user.id}).hashSync(),
          user: user
        };
      })
      .then(res.created)
      .catch(res.serverError);
  },

  /**
   * Authorization via social networks
   * @param req Request object
   * @param res Response object
   */
  social: function (req, res) {
    var type = req.param('type') ? req.param('type').toLowerCase() : '-';
    var strategyName = [type, 'token'].join('-');

    if (Object.keys(passport._strategies).indexOf(strategyName) === -1) {
      return res.badRequest(null, null, [type.slice(0, 1).toUpperCase(), type.slice(1), ' is not supported'].join(''));
    }

    passport.authenticate('jwt', function (error, user) {
      req.user = user;
      passport.authenticate(strategyName, _onPassportAuth.bind(this, req, res))(req, res);
    })(req, res);
  },

  /**
   * Accept JSON Web Token and updates with new one
   * @param {Object} req Request object
   * @param {Object} res Response object
   */
  refresh_token: function (req, res) {
    // TODO: implement refreshing tokens
    res.badRequest(null, null, 'Not implemented yet');
  }
};
