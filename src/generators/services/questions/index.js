/**
 * Exports object contains questions divided into sections.
 * Each section should contain array with questions.
 * Array with questions it's Inquirer prompts objects - https://github.com/SBoudrias/Inquirer.js#prompts-type
 *
 * @example
 * module.exports = {
 *      sectionName: require('./sectionName'),
 *      anotherSection: [{
 *          type: 'input',
 *          name: 'application-name',
 *          message: 'Typo your application name',
 *          default: 'sails-rest-api'
 *      }]
 * };
 */

var questions = require('./services/index');
var keys = Object.keys(questions);

module.exports = [{
  type: 'checkbox',
  name: 'services:chosen',
  message: 'Select which services you want to use',
  default: ['CipherService', 'HashService'],
  choices: [
    'CipherService',
    'HashService',
    'ImageService',
    'LocationService',
    'MailerService',
    'PaymentService',
    'PusherService',
    'SmsService',
    'SocialService',
    'StorageService'
  ]
}].concat(keys.reduce(function (acc, x) {
    return acc.concat(questions[x]);
  }, []));
