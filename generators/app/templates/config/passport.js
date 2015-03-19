/**
 * Passport configuration file where you should configure all your strategies
 * @description :: Configuration file where you configure your passport authentication
 */

var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    JwtStrategy = require('passport-jwt').Strategy,
    FacebookTokenStrategy = require('passport-facebook-token').Strategy,
    TwitterTokenStrategy = require('passport-twitter-token').Strategy,
    YahooTokenStrategy = require('passport-yahoo-token').Strategy,
    GooglePlusTokenStrategy = require('passport-google-plus-token').Strategy;

// TODO: make this more stable and properly parse profile data

/**
 * Triggers when user authenticates via local strategy
 * @param {String} email Email from body field in request
 * @param {String} password Password from body field in request
 * @param {Function} next Callback
 * @private
 */
function _onLocalStrategyAuth(email, password, next) {
    User
        .findOne({email: email})
        .exec(function (error, user) {
            if (error) return next(error, false, {});

            if (!user) return next(null, false, {
                code: 'E_USER_NOT_FOUND',
                message: email + ' is not found'
            });

            if (!CipherService.create('bcrypt', user.password).compareSync(password)) return next(null, false, {
                code: 'E_WRONG_PASSWORD',
                message: 'Password is wrong'
            });

            return next(null, user, {});
        });
}

/**
 * Triggers when user authenticates via JWT strategy
 * @param {Object} payload Decoded payload from JWT
 * @param {Function} next Callback
 * @private
 */
function _onJwtStrategyAuth(payload, next) {
    User
        .findOne({id: payload.id})
        .exec(function (error, user) {
            if (error) return next(error, false, {});
            if (!user) return next(null, false, {
                code: 'E_USER_NOT_FOUND',
                message: 'User with that JWT not found'
            });

            return next(null, user, {});
        });
}

/**
 * Triggers when user authenticates via one of social strategies
 * @param {String} strategyName What strategy was used?
 * @param {Object} req Request object
 * @param {String} accessToken Access token from social network
 * @param {String} refreshToken Refresh token from social network
 * @param {Object} profile Social profile
 * @param {Function} next Callback
 * @private
 */
function _onSocialStrategyAuth(strategyName, req, accessToken, refreshToken, profile, next) {
    if (!req.user) {
        User
            .findOrCreate({'facebook.id': profile.id}, {
                username: profile.username || profile.displayName || '',
                email: (profile.emails && profile.emails[0].value) || '',
                firstName: (profile.name && profile.name.givenName) || '',
                lastName: (profile.name && profile.name.familyName) || '',
                photo: (profile.photos && profile.photos[0].value) || '',
                facebook: profile._json
            })
            .exec(function (error, user) {
                if (error) return next(error, false, {});
                if (!user) return next(null, false, {
                    code: 'E_AUTH_FAILED',
                    message: [strategyName.charAt(0).toUpperCase(), strategyName.slice(1), ' auth failed'].join('')
                });

                return next(null, user, {});
            });
    } else {
        req.user[strategyName] = profile._json;
        req.user.save(next);
    }
}

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, _onLocalStrategyAuth));

passport.use(new JwtStrategy({
    secretOrKey: "<%= answers['application:jwt-secret'] %>",
    tokenBodyField: 'jwt-token',
    tokenHeader: 'JWT'
}, _onJwtStrategyAuth));

passport.use(new FacebookTokenStrategy({
    clientID: "<%= answers['application:passport-facebook-client-id'] || '-' %>",
    clientSecret: "<%= answers['application:passport-facebook-client-secret'] || '-' %>",
    passReqToCallback: true
}, _onSocialStrategyAuth.bind(this, 'facebook')));

passport.use(new TwitterTokenStrategy({
    consumerKey: "<%= answers['application:passport-twitter-client-id'] || '-' %>",
    consumerSecret: "<%= answers['application:passport-twitter-client-secret'] || '-' %>",
    passReqToCallback: true
}, _onSocialStrategyAuth.bind(this, 'twitter')));

passport.use(new YahooTokenStrategy({
    clientID: "<%= answers['application:passport-yahoo-client-id'] || '-' %>",
    clientSecret: "<%= answers['application:passport-yahoo-client-secret'] || '-' %>",
    passReqToCallback: true
}, _onSocialStrategyAuth.bind(this, 'yahoo')));

passport.use(new GooglePlusTokenStrategy({
    clientID: "<%= answers['application:passport-google-client-id'] || '-' %>",
    clientSecret: "<%= answers['application:passport-google-client-secret'] || '-' %>",
    passReqToCallback: true
}, _onSocialStrategyAuth.bind(this, 'google')));
