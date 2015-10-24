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
  'secret-key': {
    desc: 'Specifies a secret key',
    type: String,
    defaults: 'DEFAULT_SECRET_KEY'
  }
};
