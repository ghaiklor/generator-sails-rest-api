var BCryptCipher = require('./BCryptCipher');

/**
 * Create new factory for Cipher services
 * @constructor
 */
function CipherFactory() {
}

CipherFactory.prototype = Object.create({
    constructor: CipherFactory,

    /**
     * Create cipher instance based on type
     * @param {String} type Type of cipher service
     * @param {Object} options Config for cipher instance
     * @returns {*}
     */
    create: function (type, options) {
        switch (type) {
            case 'bcrypt':
                return this.createBCryptCipher(options);
            default:
                throw new Error('Unrecognized type -> ' + type);
        }
    },

    /**
     * Create bcrypt instance
     * @param {Object} options
     * @returns {BCryptCipher}
     */
    createBCryptCipher: function (options) {
        return new BCryptCipher(options);
    }
});

module.exports = CipherFactory;
