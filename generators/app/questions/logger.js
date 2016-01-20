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

module.exports = [{
  type: 'list',
  name: 'logger:chosen',
  message: 'Choose which logger you want to configure',
  default: 'Winston',
  choices: [
    'Bunyan',
    'Default',
    'Winston'
  ]
}];
