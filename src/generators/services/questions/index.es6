/**
 * Exports array contains questions divided into sections.
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

const _whenCipherServiceChosen = answers => answers['services:chosen'].includes('CipherService');
const _whenHashServiceChosen = answers => answers['services:chosen'].includes('HashService');
const _whenImageServiceChosen = answers => answers['services:chosen'].includes('ImageService');
const _whenLocationServiceChosen = answers => answers['services:chosen'].includes('LocationService');
const _whenMailerServiceChosen = answers => answers['services:chosen'].includes('MailerService');
const _whenPaymentServiceChosen = answers => answers['services:chosen'].includes('PaymentService');
const _whenPusherServiceChosen = answers => answers['services:chosen'].includes('PusherService');
const _whenSmsServiceChosen = answers => answers['services:chosen'].includes('SmsService');
const _whenSocialServiceChosen = answers => answers['services:chosen'].includes('SocialService');
const _whenStorageServiceChosen = answers => answers['services:chosen'].includes('StorageService');

export default [{
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
}, {
  type: 'list',
  name: 'services:image:provider',
  message: 'Which type of image providers you want to use',
  default: 'GM',
  choices: [
    'GM',
    'IM'
  ],
  when: _whenImageServiceChosen
}, {
  type: 'list',
  name: 'services:location:provider',
  message: 'Which type of location providers you want to use',
  default: 'Google',
  choices: [
    'Google',
    'FreeGeoIP',
    'DataScienceToolkit',
    'OpenStreetMap',
    'MapQuest',
    'OpenMapQuest',
    'Agol',
    'TomTom',
    'NominatimMapQuest',
    'OpenCage',
    'SmartyStreets',
    'GeoCodio',
    'Yandex'
  ],
  when: _whenLocationServiceChosen
}, {
  type: 'list',
  name: 'services:mailer:provider',
  message: 'Which type of mailer providers you want to use',
  default: 'sendmail',
  choices: [
    'direct',
    'SendGrid',
    'sendmail',
    'SES',
    'SMTP',
    'stub'
  ],
  when: _whenMailerServiceChosen
}, {
  type: 'list',
  name: 'services:payment:provider',
  message: 'Which type of payment providers you want to use',
  default: 'Stripe',
  choices: [
    'BrainTree',
    'Stripe'
  ],
  when: _whenPaymentServiceChosen
}, {
  type: 'list',
  name: 'services:sms:provider',
  message: 'Which type of SMS providers you want to use',
  default: 'Twilio',
  choices: [
    'Twilio'
  ],
  when: _whenSmsServiceChosen
}, {
  type: 'list',
  name: 'services:storage:provider',
  message: 'Which type of storage providers you want to use',
  default: 'Amazon',
  choices: [
    'Amazon',
    'Local'
  ],
  when: _whenStorageServiceChosen
}];
