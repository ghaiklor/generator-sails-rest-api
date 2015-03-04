/**
 * Passport configuration file where you should configure all your strategies
 * @description :: Configuration file where you configure your passport authentication
 */

var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    JwtStrategy = require('passport-jwt').Strategy,
    FacebookTokenStrategy = require('passport-facebook-token').Strategy,
    TwitterTokenStrategy = require('passport-twitter-token').Strategy,
    YahooTokenStrategy = require('passport-yahoo-token').Strategy;

passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
}, function (username, password, next) {
    User
        .findOne({
            or: [{
                username: username
            }, {
                email: username
            }]
        })
        .exec(function (error, user) {
            if (error) return next(error, false, {});

            if (!user) return next(null, false, {
                code: "E_USER_NOT_FOUND",
                message: username + " is not found"
            });

            if (!CipherService.create('bcrypt', user.password).compareSync(password)) return next(null, false, {
                code: "E_WRONG_PASSWORD",
                message: "Password is wrong"
            });

            return next(null, user, {});
        });
}));

passport.use(new JwtStrategy({
    secretOrKey: "<%= answers['application:jwt-secret'] %>",
    tokenBodyField: 'jwt-token',
    tokenHeader: 'JWT'
}, function (payload, next) {
    User
        .findOne({
            id: payload.id
        })
        .exec(function (error, user) {
            if (error) return next(error, false, {});
            if (!user) return next(null, false, {
                code: "E_USER_NOT_FOUND",
                message: "User with that JWT not found"
            });

            return next(null, user, {});
        });
}));

passport.use(new FacebookTokenStrategy({
    clientID: "<%= answers['application:facebook-app-id'] %>",
    clientSecret: "<%= answers['application:facebook-app-secret'] %>",
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
                if (error) return next(error, false, {});
                if (!user) return next(null, false, {
                    code: "E_AUTH_FAILED",
                    message: "Facebook auth failed"
                });

                return next(null, user, {});
            });
    } else {
        req.user.facebook = profile._json;
        req.user.save(next);
    }
}));

passport.use(new TwitterTokenStrategy({
    consumerKey: "<%= answers['application:twitter-consumer-key'] %>",
    consumerSecret: "<%= answers['application:twitter-consumer-secret'] %>",
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
                if (error) return next(error, false, {});
                if (!user) return next(null, false, {
                    code: "E_AUTH_FAILED",
                    message: "Twitter auth failed"
                });

                return next(null, user, {});
            });
    } else {
        req.user.twitter = profile._json;
        req.user.save(next);
    }
}));

passport.use(new YahooTokenStrategy({
    clientID: "<%= answers['application:yahoo-app-id'] %>",
    clientSecret: "<%= answers['application:yahoo-app-secret'] %>",
    passReqToCallback: true
}, function (req, accessToken, refreshToken, profile, next) {
    if (!req.user) {
        User
            .findOrCreate({
                'yahoo.id': profile.id
            }, {
                username: req.param('username') || profile.username || profile.displayName,
                email: req.param('email') || (profile.emails && profile.emails[0].value),
                firstName: req.param('firstName') || (profile.displayName && profile.displayName.split(' ')[0]),
                lastName: req.param('lastName') || (profile.displayName && profile.displayName.split(' ')[1]),
                photo: req.param('photo') || ['https://graph.facebook.com/', profile.id, '/picture?type=large'].join(''),
                facebook: profile._json
            })
            .exec(function (error, user) {
                if (error) return next(error, false, {});
                if (!user) return next(null, false, {
                    code: "E_AUTH_FAILED",
                    message: "Yahoo auth failed"
                });

                return next(null, user, {});
            });
    } else {
        req.user.yahoo = profile._json;
        req.user.save(next);
    }
}));
