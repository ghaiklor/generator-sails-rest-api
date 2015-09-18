/**
 * Exports object that contains names of arguments as a key and their configuration objects as a value
 *
 * @example
 * export default {
 *   argumentName: {
 *     desc: 'Description for the argument',
 *     required: false,
 *     optional: true,
 *     type: String || Number || Array || Object,
 *     defaults: 'Default value for this argument',
 *     banner: 'String to show on usage notes'
 *   }
 * };
 */

export default {
  'services': {
    'desc': 'Specifies the services that you want to generate',
    'required': true,
    'optional': false,
    'type': String,
    'defaults': 'CipherService HashService'
  }
};
