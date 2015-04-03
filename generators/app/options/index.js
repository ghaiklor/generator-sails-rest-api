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
  'verbose': {
    desc: 'Print all information to console',
    type: Boolean,
    defaults: false,
    hide: false
  },
  'skip-generator-update': {
    desc: 'Do not check for generator updates',
    type: Boolean,
    defaults: false,
    hide: false
  },
  'skip-generator-welcome': {
    desc: 'Do not welcome at start',
    type: Boolean,
    defaults: false,
    hide: false
  },
  'skip-project-install': {
    desc: 'Do not install npm dependencies',
    type: Boolean,
    defaults: false,
    hide: false
  },
  'skip-all': {
    desc: 'Do nothing, just project scaffolding',
    type: Boolean,
    defaults: false,
    hide: false
  }
};
