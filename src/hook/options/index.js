/**
 * Exports object that contains names of options as a key and their configuration objects as a value
 *
 * @example
 * export default {
 *   optionName: {
 *     desc: 'Description for the option',
 *     alias: 'Short name for the option',
 *     type: Boolean || String || Number,
 *     defaults: 'Default value',
 *     hide: false
 *   }
 * };
 */

export default {
  'new': {
    desc: 'Scaffolds a clean hook (not predefined)',
    alias: 'n',
    type: Boolean,
    defaults: false,
    hide: false
  },

  'all': {
    desc: 'Copies all the overridden hooks at once',
    alias: 'a',
    type: Boolean,
    defaults: false,
    hide: false
  }
};
