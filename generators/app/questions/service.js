"use strict";

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

const whenServiceIsChosen = serviceName => answers => answers['service:chosen'].indexOf(serviceName) !== -1;

module.exports = [{
  type: 'checkbox',
  name: 'service:chosen',
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
  name: 'service:image-provider',
  message: 'Image provider',
  default: 'GM',
  choices: [
    'GM',
    'IM'
  ],
  when: whenServiceIsChosen('ImageService')
}, {
  type: 'list',
  name: 'service:location-provider',
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
    'Yandex',
    'Here',
    'Teleport'
  ],
  when: whenServiceIsChosen('LocationService')
}, {
  type: 'list',
  name: 'service:mailer-provider',
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
  name: 'service:payment-provider',
  message: 'Payment provider',
  default: 'Stripe',
  choices: [
    'BrainTree',
    'Stripe'
  ],
  when: whenServiceIsChosen('PaymentService')
}, {
  type: 'list',
  name: 'service:sms-provider',
  message: 'SMS provider',
  default: 'Twilio',
  choices: [
    'Twilio'
  ],
  when: whenServiceIsChosen('SmsService')
}, {
  type: 'list',
  name: 'service:storage-provider',
  message: 'Storage provider',
  default: 'Amazon',
  choices: [
    'Amazon',
    'Local'
  ],
  when: whenServiceIsChosen('StorageService')
}];
