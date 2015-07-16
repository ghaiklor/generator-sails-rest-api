process.env.NODE_ENV = 'test';
var testConfig = require('../config/env/test.js'); // configuration for testing purposes

var Sails = require('sails');
var supertest = require('supertest');
var sails;

/**
 * Global function to send request
 * @param method
 * @param url
 * @returns {*}
 */
function request(method, url) {
  return supertest(sails.hooks.http.app)[method](url)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/);
}

before(function (done) {
  this.timeout(40000);
  Sails.lift(testConfig, function (error, server) {
    if (error) return done(error);

    sails = server;
    sails.requestForTest = request;

    // here you can load fixtures, etc.

    done(error, sails);
  });
});

after(function (done) {
  // here you can clear fixtures, etc.
  sails.lower(done);
});
