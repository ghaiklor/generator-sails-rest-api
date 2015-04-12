var Sails = require('sails');
var sails;

before(function (done) {
  Sails.lift({
    // configuration for testing purposes
  }, function (error, server) {
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
