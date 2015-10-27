import Sails from 'sails';
import config from '../config/env/test';

let sails;

before(done => {
  Sails.lift(config, (error, server) => {
    if (error) return done(error);

    sails = server;

    // here you can load fixtures, etc.

    done();
  });
});

after(done => {
  sails.lower(done);
});
