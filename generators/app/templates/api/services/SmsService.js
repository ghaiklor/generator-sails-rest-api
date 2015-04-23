var SmsFactory = require('./sms/SmsFactory');

module.exports = new SmsFactory().create("<%= answers['services:sms'].toLowerCase() %>");
module.exports.Factory = new SmsFactory();
