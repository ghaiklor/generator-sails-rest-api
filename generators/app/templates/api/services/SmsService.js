var SmsFactory = require('./sms/SmsFactory');

module.exports = new SmsFactory().create("<%= answers['services:sms'] %>");
module.exports.Factory = new SmsFactory();
