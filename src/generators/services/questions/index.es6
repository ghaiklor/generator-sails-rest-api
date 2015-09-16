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

const _whenCipherServiceChosen = answers => !(answers['services:chosen'].indexOf('CipherService') === -1);
const _whenHashServiceChosen = answers => !(answers['services:chosen'].indexOf('HashService') === -1);
const _whenImageServiceChosen = answers => !(answers['services:chosen'].indexOf('ImageService') === -1);
const _whenLocationServiceChosen = answers => !(answers['services:chosen'].indexOf('LocationService') === -1);
const _whenMailerServiceChosen = answers => !(answers['services:chosen'].indexOf('MailerService') === -1);
const _whenPaymentServiceChosen = answers => !(answers['services:chosen'].indexOf('PaymentService') === -1);
const _whenPusherServiceChosen = answers => !(answers['services:chosen'].indexOf('PusherService') === -1);
const _whenSmsServiceChosen = answers => !(answers['services:chosen'].indexOf('SmsService') === -1);
const _whenSocialServiceChosen = answers => !(answers['services:chosen'].indexOf('SocialService') === -1);
const _whenStorageServiceChosen = answers => !(answers['services:chosen'].indexOf('StorageService') === -1);

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
