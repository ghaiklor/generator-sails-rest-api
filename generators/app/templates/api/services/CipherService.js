var CipherFactory = require('./cipher/CipherFactory');

module.exports = new CipherFactory().create("<%= answers['services:cipher'].toLowerCase() %>");
module.exports.Factory = new CipherFactory();
