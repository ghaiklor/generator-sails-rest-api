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
    name: 'application:jwt-secret-key',
    message: 'Type your private key for JSON Web Token',
    default: crypto.randomBytes(32).toString('hex')
}, {
    type: 'checkbox',
    name: 'application:passport-enabled-strategies',
    message: 'Choose which Passport strategies you want',
    choices: [{
        name: 'Facebook',
        checked: true
    }, {
        name: 'Twitter',
        checked: false
    }, {
        name: 'Yahoo',
        checked: false
    }, {
        name: 'Google',
        checked: false
    }]
}, {
    type: 'input',
    name: 'application:passport-facebook-client-id',
    message: 'Type your Facebook Client ID',
    default: '-',
    when: function (answers) {
        return answers['application:passport-enabled-strategies'].indexOf('Facebook') > -1;
    }
}, {
    type: 'input',
    name: 'application:passport-facebook-client-secret',
    message: 'Type your Facebook Client Secret',
    default: '-',
    when: function (answers) {
        return answers['application:passport-enabled-strategies'].indexOf('Facebook') > -1;
    }
}, {
    type: 'input',
    name: 'application:passport-twitter-client-id',
    message: 'Type your Twitter Client ID',
    default: '-',
    when: function (answers) {
        return answers['application:passport-enabled-strategies'].indexOf('Twitter') > -1;
    }
}, {
    type: 'input',
    name: 'application:passport-twitter-client-secret',
    message: 'Type your Twitter Client Secret',
    default: '-',
    when: function (answers) {
        return answers['application:passport-enabled-strategies'].indexOf('Twitter') > -1;
    }
}, {
    type: 'input',
    name: 'application:passport-yahoo-client-id',
    message: 'Type your Yahoo Client ID',
    default: '-',
    when: function (answers) {
        return answers['application:passport-enabled-strategies'].indexOf('Yahoo') > -1;
    }
}, {
    type: 'input',
    name: 'application:passport-yahoo-client-secret',
    message: 'Type your Yahoo Client Secret',
    default: '-',
    when: function (answers) {
        return answers['application:passport-enabled-strategies'].indexOf('Yahoo') > -1;
    }
}, {
    type: 'input',
    name: 'application:passport-google-client-id',
    message: 'Type your Google Client ID',
    default: '-',
    when: function (answers) {
        return answers['application:passport-enabled-strategies'].indexOf('Google') > -1;
    }
}, {
    type: 'input',
    name: 'application:passport-google-client-secret',
    message: 'Type your Google Client Secret',
    default: '-',
    when: function (answers) {
        return answers['application:passport-enabled-strategies'].indexOf('Google') > -1;
    }
}];
