/**
 * PingController
 * @description :: Server-side logic for checking if different part of app is alive
 */

/**
 * Useful when need to check if it's server is down or it some logic is broken
 */
export function index(req, res) {
  res.ok(req.allParams(), {message: 'HTTP server is working'});
}
