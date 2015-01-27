/**
 * Message for implement method
 * @type {String}
 */
var IMPLEMENT_MESSAGE = 'Not implemented';

/**
 * BaseCipher class
 * @constructor
 */
function BaseCipher(options) {
    if (!(options || options.content)) {
        throw new Error('You must provide content');
    }

    this.setContent(options.content);
}

BaseCipher.prototype = Object.create({
    constructor: BaseCipher,

    /**
     * Get current content of cipher
     * @returns {*}
     */
    getContent: function () {
        return this.content;
    },

    /**
     * Set new content for hash or compare
     * @param {*} content
     * @returns {BaseCipher}
     */
    setContent: function (content) {
        this.content = content;
        return this;
    },

    hash: function () {
        throw new Error(IMPLEMENT_MESSAGE);
    },

    hashSync: function () {
        throw new Error(IMPLEMENT_MESSAGE);
    },

    compareHash: function () {
        throw new Error(IMPLEMENT_MESSAGE);
    },

    compareHashSync: function () {
        throw new Error(IMPLEMENT_MESSAGE);
    }
});

module.exports = BaseCipher;
