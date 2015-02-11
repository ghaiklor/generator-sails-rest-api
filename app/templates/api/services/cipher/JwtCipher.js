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
    // TODO: think about token and payload attributes in object
    BaseCipher.apply(this, arguments);
}

/**
 * Sign payload with JSON Web Token
 * @returns {String} Returns JSON Web Token in string format
 */
JwtCipher.prototype.hashSync = function () {
    return jwt.sign(this.getContent(), sails.config.jwt.secret, {
        algorithm: sails.config.jwt.algorithm,
        expiresInMinutes: sails.config.jwt.expires
    });
};

/**
 * Verify token and returns decoded payload
 * @returns {Promise}
 */
JwtCipher.prototype.verify = function () {
    var defer = Q.defer();

    jwt.verify(this.getContent(), sails.config.jwt.secret, function (error, decoded) {
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
 * @returns {Object}
 */
JwtCipher.prototype.decodeSync = function () {
    return jwt.decode(this.getContent());
};

module.exports = JwtCipher;
