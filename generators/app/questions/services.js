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
