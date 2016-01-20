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
    desc: 'Scaffolds a clean response (not predefined)',
    alias: 'n',
    type: Boolean,
    defaults: false
  },

  'all': {
    desc: 'Copies all the overridden responses at once',
    alias: 'a',
    type: Boolean,
    defaults: false
  }
};
