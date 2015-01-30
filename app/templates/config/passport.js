/**
 * Passport configuration file where you should configure all your strategies
 * @description :: Configuration file where you configure your passport authentication
 */

var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    JwtStrategy = require('passport-jwt').Strategy,
    FacebookTokenStrategy = require('passport-facebook-token').Strategy,
    TwitterTokenStrategy = require('passport-twitter-token').Strategy;

passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
}, function (username, password, next) {
    User
        .findOne({
            username: username
        })
        .exec(function (error, user) {
            if (error) {
                next(error);
            } else if (!user) {
                next(null, false, {
                    status: "E_USER_NOT_FOUND",
                    error: ['Username', username, 'is not found'].join(' ')
                });
            } else if (CipherService.create('bcrypt', {content: user.password}).compareHashSync(password)) {
                next(null, false, {
                    status: "E_WRONG_PASSWORD",
                    error: 'Password is wrong'
                });
            } else {
                next(null, user);
            }
        });
}));

passport.use(new JwtStrategy('<%= answers.jwtSecret %>', {
    tokenBodyField: 'jwt-token',
    tokenHeader: 'JWT'
}, function (payload, next) {
    User
        .findOne({
            id: payload.id
        })
        .exec(function (error, user) {
            if (error) {
                next(error);
            } else if (!user) {
                next(null, false, {
                    status: "E_USER_NOT_FOUND",
                    error: "User with that JWT not found"
                });
            } else {
                next(null, user);
            }
        })
}));

passport.use(new FacebookTokenStrategy({
    clientID: '-',
    clientSecret: '-',
    passReqToCallback: true
}, function (req, accessToken, refreshToken, profile, next) {
    if (!req.user) {
        User
            .findOrCreate({
                'facebook.id': profile.id
            }, {
                username: req.param('username') || profile.username || profile.displayName,
                email: req.param('email') || (profile.emails && profile.emails[0].value),
                firstName: req.param('firstName') || (profile.displayName && profile.displayName.split(' ')[0]),
                lastName: req.param('lastName') || (profile.displayName && profile.displayName.split(' ')[1]),
                photo: req.param('photo') || ['https://graph.facebook.com/', profile.id, '/picture?type=large'].join(''),
                facebook: profile._json
            })
            .exec(function (error, user) {
                if (error) {
                    next(error, false);
                } else if (!user) {
                    next(null, false, {
                        status: "E_AUTH_FAILED",
                        error: "Facebook auth failed"
                    });
                } else {
                    next(null, user);
                }
            });
    } else {
        req.user.facebook = profile._json;
        req.user.save(next);
    }
}));

passport.use(new TwitterTokenStrategy({
    consumerKey: '-',
    consumerSecret: '-',
    passReqToCallback: true
}, function (req, accessToken, tokenSecret, profile, next) {
    if (!req.user) {
        User
            .findOrCreate({
                'twitter.id': profile.id
            }, {
                username: req.param('username') || profile.username || profile.displayName,
                email: req.param('email') || (profile.emails && profile.emails[0].value),
                firstName: req.param('firstName') || (profile.displayName && profile.displayName.split(' ')[0]),
                lastName: req.param('lastName') || (profile.displayName && profile.displayName.split(' ')[1]),
                photo: req.param('photo') || (profile.photos && profile.photos[0].value),
                twitter: profile._json
            })
            .exec(function (error, user) {
                if (error) {
                    next(error, false);
                } else if (!user) {
                    next(null, false, {
                        status: "E_AUTH_FAILED",
                        error: "Twitter auth failed"
                    });
                } else {
                    next(null, user);
                }
            });
    } else {
        req.user.twitter = profile._json;
        req.user.save(next);
    }
}));
