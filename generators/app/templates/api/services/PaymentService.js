var PaymentFactory = require('./payment/PaymentFactory');

module.exports = new PaymentFactory().create("<%= answers['services:payment'].toLowerCase() %>");
module.exports.Factory = new PaymentFactory();
