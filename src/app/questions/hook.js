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

export default [{
  type: 'checkbox',
  name: 'hook:chosen',
  message: 'Choose which predefined hooks you want to copy',
  default: ['CountHook', 'PluralizeHook'],
  choices: [
    'CountHook',
    'PluralizeHook'
  ]
}];
