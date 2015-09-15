function _whenSmsServiceChosen(answers) {
  return !(answers['services:chosen'].indexOf('SmsService') === -1);
}

module.exports = [{
  type: 'list',
  name: 'services:sms:provider',
  message: 'Which type of SMS providers you want to use',
  default: 'Twilio',
  choices: [
    'Twilio'
  ],
  when: _whenSmsServiceChosen
}];
