var crypto = require('crypto');

module.exports = [{
    type: "input",
    name: "application:name",
    message: "Type your application name",
    default: "sails-rest-api"
}, {
    type: "input",
    name: "application:api-secret-key",
    message: "Type your private API key",
    default: crypto.randomBytes(32).toString("hex")
}, {
    type: "input",
    name: "application:jwt-secret",
    message: "Type your private key for JSON Web Token",
    default: crypto.randomBytes(32).toString("hex")
}, {
    type: "input",
    name: "application:facebook-app-id",
    message: "Type your Facebook App ID",
    default: "-"
}, {
    type: "input",
    name: "application:facebook-app-secret",
    message: "Type your Facebook App Secret",
    default: "-"
}, {
    type: "input",
    name: "application:twitter-consumer-key",
    message: "Type your Twitter Consumer Key",
    default: "-"
}, {
    type: "input",
    name: "application:twitter-consumer-secret",
    message: "Type your Twitter Consumer Secret",
    default: "-"
}];
