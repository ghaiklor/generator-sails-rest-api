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

const whenServiceIsChosen = serviceName => answers => answers['services:chosen'].indexOf(serviceName) !== -1;

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
  message: 'Image provider',
  default: 'GM',
  choices: [
    'GM',
    'IM'
  ],
  when: whenServiceIsChosen('ImageService')
}, {
  type: 'list',
  name: 'services:location:provider',
  message: 'Location provider',
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
  when: whenServiceIsChosen('LocationService')
}, {
  type: 'list',
  name: 'services:mailer:provider',
  message: 'Mailer provider',
  default: 'sendmail',
  choices: [
    'direct',
    'SendGrid',
    'sendmail',
    'SES',
    'SMTP',
    'stub'
  ],
  when: whenServiceIsChosen('MailerService')
}, {
  type: 'list',
  name: 'services:payment:provider',
  message: 'Payment provider',
  default: 'Stripe',
  choices: [
    'BrainTree',
    'Stripe'
  ],
  when: whenServiceIsChosen('PaymentService')
}, {
  type: 'list',
  name: 'services:sms:provider',
  message: 'SMS provider',
  default: 'Twilio',
  choices: [
    'Twilio'
  ],
  when: whenServiceIsChosen('SmsService')
}, {
  type: 'list',
  name: 'services:storage:provider',
  message: 'Storage provider',
  default: 'Amazon',
  choices: [
    'Amazon',
    'Local'
  ],
  when: whenServiceIsChosen('StorageService')
}];
