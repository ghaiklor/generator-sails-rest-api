module.exports = [{
  type: 'list',
  name: 'services:sms:provider',
  message: 'Which type of SMS providers you want to use',
  default: 'Twilio',
  choices: [
    'Twilio'
  ]
}];
