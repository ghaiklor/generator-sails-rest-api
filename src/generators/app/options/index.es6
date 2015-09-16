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
  'skip-check-update': {
    desc: 'Do not check for generator updates',
    type: Boolean,
    defaults: false,
    hide: false
  },
  'skip-install': {
    desc: 'Do not install npm dependencies',
    type: Boolean,
    defaults: false,
    hide: false
  }
};
