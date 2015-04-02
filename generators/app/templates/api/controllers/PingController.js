/**
 * PingController
 * @description :: Server-side logic for checking if different part of app is alive
 */

module.exports = {
  /**
   * Useful when need to check if it's server is down or it some logic is broken
   * @param {Object} req Request object
   * @param {Object} res Response object
   */
  index: function (req, res) {
    res.ok(null, null, 'HTTP server is working');
  }
};
