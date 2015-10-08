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
  'controllers': {
    desc: 'Specifies which controllers you want to copy (comma-separated)',
    type: String,
    defaults: 'PingController,SearchController',
    hide: false
  }
};
