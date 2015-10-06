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

import crypto from 'crypto';

export default {
  'application-secret': {
    desc: 'Specifies a secret key for your application',
    type: String,
    defaults: crypto.randomBytes(32).toString('hex')
  }
};
