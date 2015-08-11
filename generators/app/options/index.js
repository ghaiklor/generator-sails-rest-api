/**
 * Exports object contains options names and their configuration objects
 *
 * @example
 * module.exports = {
 *      'option-name': {
 *          desc: 'Option description',
 *          type: Boolean || String || Number,
 *          defaults: false,
 *          hide: false
 *      }
 * };
 */
module.exports = {
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
  },
  'verbose': {
    desc: 'Print all information to console',
    type: Boolean,
    defaults: false,
    hide: false
  }
};
