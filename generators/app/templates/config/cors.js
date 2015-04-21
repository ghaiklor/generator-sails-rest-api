/**
 * Cross-Origin Resource Sharing (CORS) Settings
 *
 * CORS is like a more modern version of JSONP-- it allows your server/API
 * to successfully respond to requests from client-side JavaScript code
 * running on some other domain (e.g. google.com)
 *
 * Note that any of these settings (besides 'allRoutes') can be changed on a per-route basis
 * by adding a "cors" object to the route configuration:
 *
 * '/get foo': {
 *   controller: 'foo',
 *   action: 'bar',
 *   cors: {
 *     origin: 'http://foobar.com,https://owlhoot.com'
 *   }
 *  }
 */

module.exports.cors = {
  /**
   * Allow CORS on all routes by default?
   */
  allRoutes: false,

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
  headers: 'content-type, authorization, application-token'
};
