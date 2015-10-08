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
  name: 'controllers:controllers',
  message: 'Choose which controllers you want to copy',
  default: ['PingController', 'SearchController'],
  choices: [
    'PingController',
    'SearchController',
    'CustomController...'
  ]
}, {
  type: 'input',
  name: 'controllers:custom-controllers',
  message: 'Controllers\' name (comma-separated)',
  default: '',
  when: answers => answers['controllers:controllers'].indexOf('CustomController...') !== -1
}];
