/**
 * Exports array that contains questions for prompting.
 * The array with questions is an array of Inquirer prompt objects - https://github.com/SBoudrias/Inquirer.js#prompts-type
 *
 * @example
 * export default [{
 *   type: 'input',
 *   name: 'inputName',
 *   message: 'Message for the input'
 * }];
 */

import crypto from 'crypto';

export default [{
  type: 'input',
  name: 'application:name',
  message: 'Type your application name',
  default: 'sails-rest-api'
}, {
  type: 'input',
  name: 'application:secret',
  message: 'Type your application secret',
  default: crypto.randomBytes(32).toString('hex')
}];
