/**
 * Cross-Origin Resource Sharing (CORS) Settings
 *
 * CORS is like a more modern version of JSONP-- it allows your server/API
 * to successfully respond to requests from client-side JavaScript code
 * running on some other domain (e.g. google.com)
 */

export default {
  cors: {
    /**
     * Allow CORS on all routes by default?
     */
    allRoutes: <%= options["cors"] %>,

    /**
     * Which domains which are allowed CORS access?
     */
    origin: '*',

    /**
     * Allow cookies to be shared for CORS requests?
     */
    credentials: true,

    /**
     * Which methods should be allowed for CORS requests?
     */
    methods: 'GET, POST, PUT, DELETE, OPTIONS, HEAD',

    /**
     * Which headers should be allowed for CORS requests?
     */
    headers: 'content-type, authorization'
  }
}
