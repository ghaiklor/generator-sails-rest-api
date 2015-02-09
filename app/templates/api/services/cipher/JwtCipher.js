var util = require('util'),
    Q = require('q'),
    jwt = require('jsonwebtoken'),
    BaseCipher = require('./BaseCipher');

util.inherits(JwtCipher, BaseCipher);

/**
 * Create new JWT Cipher instance
 * @constructor
 */
function JwtCipher() {
    BaseCipher.apply(this, arguments);
}

/**
 * Sign payload with JSON Web Token
 * @param {Object} payload Payload that need to sign
 * @returns {String} Returns JSON Web Token in string format
 */
JwtCipher.prototype.hashSync = function () {
    return jwt.sign(payload, sails.config.jwt.secret, {
        algorithm: sails.config.jwt.algorithm,
        expiresInMinutes: sails.config.jwt.expires
    });
};

/**
 * Verify token and returns decoded payload
 * @param {String} token JSON Web Token string
 * @returns {Promise}
 */
JwtCipher.prototype.verify = function () {
    var defer = Q.defer();

    jwt.verify(token, sails.config.jwt.secret, function (error, decoded) {
        if (error) {
            defer.reject(error);
        } else {
            defer.resolve(decoded);
        }
    });

    return defer.promise;
};

/**
 * Decode token without verification
 * @param {String} token JSON Web Token string
 * @returns {Object}
 */
JwtCipher.prototype.decodeSync = function () {
    return jwt.decode(token);
};

module.exports = JwtCipher;
