var crypto = require('crypto');

module.exports = [{
    type: 'input',
    name: 'application:name',
    message: 'Type your application name',
    default: 'sails-rest-api'
}, {
    type: 'input',
    name: 'application:api-secret-key',
    message: 'Type your private API key',
    default: crypto.randomBytes(32).toString('hex')
}, {
    type: 'input',
    name: 'application:jwt-secret',
    message: 'Type your private key for JSON Web Token',
    default: crypto.randomBytes(32).toString('hex')
}, {
    type: 'confirm',
    name: 'application:passport-facebook-enabled',
    message: 'Do you need Facebook authorization?',
    default: false
}, {
    type: 'input',
    name: 'application:passport-facebook-client-id',
    message: 'Type your Facebook Client ID',
    default: '-',
    when: function (answers) {
        return answers['application:passport-facebook-enabled'];
    }
}, {
    type: 'input',
    name: 'application:passport-facebook-client-secret',
    message: 'Type your Facebook Client Secret',
    default: '-',
    when: function (answers) {
        return answers['application:passport-facebook-enabled'];
    }
}, {
    type: 'confirm',
    name: 'application:passport-twitter-enabled',
    message: 'Do you need Twitter authorization?',
    default: false
}, {
    type: 'input',
    name: 'application:passport-twitter-client-id',
    message: 'Type your Twitter Client ID',
    default: '-',
    when: function (answers) {
        return answers['application:passport-twitter-enabled'];
    }
}, {
    type: 'input',
    name: 'application:passport-twitter-client-secret',
    message: 'Type your Twitter Client Secret',
    default: '-',
    when: function (answers) {
        return answers['application:passport-twitter-enabled'];
    }
}, {
    type: 'confirm',
    name: 'application:passport-yahoo-enabled',
    message: 'Do you need Yahoo authorization?',
    default: false
}, {
    type: 'input',
    name: 'application:passport-yahoo-client-id',
    message: 'Type your Yahoo Client ID',
    default: '-',
    when: function (answers) {
        return answers['application:passport-yahoo-enabled'];
    }
}, {
    type: 'input',
    name: 'application:passport-yahoo-client-secret',
    message: 'Type your Yahoo Client Secret',
    default: '-',
    when: function (answers) {
        return answers['application:passport-yahoo-enabled'];
    }
}, {
    type: 'confirm',
    name: 'application:passport-google-enabled',
    message: 'Do you need Google Plus authorization?',
    default: false
}, {
    type: 'input',
    name: 'application:passport-google-client-id',
    message: 'Type your Google Client ID',
    default: '-',
    when: function (answers) {
        return answers['application:passport-google-enabled'];
    }
}, {
    type: 'input',
    name: 'application:passport-google-client-secret',
    message: 'Type your Google Client Secret',
    default: '-',
    when: function (answers) {
        return answers['application:passport-google-enabled'];
    }
}];
