"use strict";

/**
 * Exports object that contains names of options as a key and their configuration objects as a value
 *
 * @example
 * module.exports = {
 *   optionName: {
 *     desc: 'Description for the option',
 *     alias: 'Short name for the option',
 *     type: Boolean || String || Number,
 *     defaults: 'Default value',
 *     hide: false
 *   }
 * };
 */

module.exports = {
  'new': {
    desc: 'Scaffolds a clean controller (not predefined)',
    alias: 'n',
    type: Boolean,
    defaults: false,
    hide: false
  },

  'all': {
    desc: 'Copies all the overridden controllers at once',
    alias: 'a',
    type: Boolean,
    defaults: false,
    hide: false
  }
};
