module.exports = require('sails-service-cipher').create("<%= answers['services:cipher'] %>", {secretKey: "<%= answers['services:jwt:secret-key'] %>"});
