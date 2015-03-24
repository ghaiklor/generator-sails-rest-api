/**
 * Implement message
 * @type {String}
 * @private
 */
var IMPLEMENT_MESSAGE = "Not implemented";

/**
 * Base storage super class
 * @constructor
 */
function BaseStorage() {
}

BaseStorage.prototype = Object.create({
  constructor: BaseStorage,

  upload: function () {
    throw new Error(IMPLEMENT_MESSAGE);
  },

  get: function () {
    throw new Error(IMPLEMENT_MESSAGE);
  },

  remove: function () {
    throw new Error(IMPLEMENT_MESSAGE);
  }
});

module.exports = BaseStorage;
