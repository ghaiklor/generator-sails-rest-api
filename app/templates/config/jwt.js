/**
 * JSON Web Token Configuration
 *
 * Configure your JWT in application.
 * Application is using JWT for authenticate all requests which comes to your API.
 */

module.exports.jwt = {
    /**
     * Secret phrase for symmetric encoding
     * @type {String}
     */
    secret: "<%= answers['application:jwt-secret-token'] %>",

    /**
     * Algorithm that uses for signing JWT
     * @type {String}
     */
    algorithm: 'HS256',

    /**
     * Time interval in minutes when token will be expired or false if not expires
     * @type {Number|Boolean}
     */
    expires: 60 * 24
};
