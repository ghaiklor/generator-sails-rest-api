/**
 * Message for implement method
 * @type {String}
 */
var IMPLEMENT_MESSAGE = "Not implemented";

/**
 * BaseCipher class
 * @constructor
 */
function BaseCipher(content) {
  // TODO: think about typeof content == object

  if (!content) {
    throw new Error("You must provide plain data or hash");
  }

  this.setContent(content);
}

BaseCipher.prototype = Object.create({
  constructor: BaseCipher,

  /**
   * Get current content of cipher
   * @returns {*}
   */
  getContent: function () {
    return this._content;
  },

  /**
   * Set new content for hash or compare
   * @param {*} content
   * @returns {BaseCipher}
   */
  setContent: function (content) {
    this._content = content;
    return this;
  },

  /**
   * Hash plain data
   */
  hash: function () {
    throw new Error(IMPLEMENT_MESSAGE);
  },

  /**
   * Hash plain data in sync mode
   */
  hashSync: function () {
    throw new Error(IMPLEMENT_MESSAGE);
  },

  /**
   * Compare hash to plain data
   */
  compare: function () {
    throw new Error(IMPLEMENT_MESSAGE);
  },

  /**
   * Compare hash to plain data in sync mode
   */
  compareSync: function () {
    throw new Error(IMPLEMENT_MESSAGE);
  }
});

module.exports = BaseCipher;
