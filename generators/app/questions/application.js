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
    type: 'input',
    name: 'application:facebook-client-id',
    message: 'Type your Facebook Client ID',
    default: '-'
}, {
    type: 'input',
    name: 'application:facebook-client-secret',
    message: 'Type your Facebook Client Secret',
    default: '-'
}, {
    type: 'input',
    name: 'application:twitter-client-id',
    message: 'Type your Twitter Client ID',
    default: '-'
}, {
    type: 'input',
    name: 'application:twitter-client-secret',
    message: 'Type your Twitter Client Secret',
    default: '-'
}, {
    type: 'input',
    name: 'application:yahoo-client-id',
    message: 'Type your Yahoo Client ID',
    default: '-'
}, {
    type: 'input',
    name: 'application:yahoo-client-secret',
    message: 'Type your Yahoo Client Secret',
    default: '-'
}, {
    type: 'input',
    name: 'application:google-client-id',
    message: 'Type your Google Client ID',
    default: '-'
}, {
    type: 'input',
    name: 'application:google-client-secret',
    message: 'Type your Google Client Secret',
    default: '-'
}];
