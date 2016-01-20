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
  'secret-key': {
    desc: 'Specifies a secret key',
    type: String,
    defaults: 'DEFAULT_SECRET_KEY'
  }
};
