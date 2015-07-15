process.env.NODE_ENV = 'test';
var testConfig = require('../config/env/test.js'); // configuration for testing purposes

var Sails = require('sails');
var sails;

before(function (done) {
  this.timeout(40000);
  Sails.lift(testConfig, function (error, server) {
    if (error) return done(error);

    sails = server;

    // here you can load fixtures, etc.

    done(error, sails);
  });
});

after(function (done) {
  // here you can clear fixtures, etc.
  sails.lower(done);
});
