/**
 * AuthController
 * @description :: Server-side logic for manage user's authorization
 */

import _ from 'lodash';
import passport from 'passport';

export default {
  /**
   * Sign in by email\password
   */
  signin: (req, res) => {
    passport.authenticate('local', _.partial(sails.config.passport.onPassportAuth, req, res))(req, res);
  },

  /**
   * Sign up by email\password
   */
  signup: (req, res) => {
    let values = _.omit(req.allParams(), 'id');

    User
      .create(values)
      .then(user => {
        return {token: CipherService.jwt.encodeSync({id: user.id}), user: user}
      })
      .then(res.created)
      .catch(res.negotiate);
  },

  /**
   * Authorization via social networks
   */
  social: (req, res) => {
    let type = req.param('type') ? req.param('type').toLowerCase() : '-';
    let strategyName = [type, 'token'].join('-');

    if (Object.keys(passport._strategies).indexOf(strategyName) === -1) {
      return res.badRequest(null, {message: [type, ' is not supported'].join('')});
    }

    passport.authenticate('jwt', (error, user, info) => {
      req.user = user;
      passport.authenticate(strategyName, _.partial(sails.config.passport.onPassportAuth, req, res))(req, res);
    })(req, res);
  },

  /**
   * Accept JSON Web Token and updates with new one
   */
  refresh_token: (req, res) => {
    if (!req.param('token')) return res.badRequest(null, {message: 'You must provide token parameter'});

    let oldDecoded = CipherService.jwt.decodeSync(req.param('token'));

    res.ok({
      token: CipherService.jwt.encodeSync({id: oldDecoded.id})
    });
  }
};
