"use strict";

/**
 * Exports array that contains questions for prompting.
 * The array with questions is an array of Inquirer prompt objects - https://github.com/SBoudrias/Inquirer.js#prompts-type
 *
 * @example
 * module.exports = [{
 *   type: 'input',
 *   name: 'inputName',
 *   message: 'Message for the input'
 * }];
 */

const crypto = require('crypto');

module.exports = [{
  type: 'confirm',
  name: 'authentication:enabled',
  message: 'Do you need authentication layer?',
  default: true
}, {
  type: 'input',
  name: 'authentication:secret-key',
  message: 'Secret key',
  default: crypto.randomBytes(32).toString('hex'),
  when: answers => answers['authentication:enabled']
}];
