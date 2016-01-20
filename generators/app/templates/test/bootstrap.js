import Sails from 'sails';
import config from '../config/env/test';

let sails;

before(done => {
  Sails.lift(config, (error, server) => {
    if (error) return done(error);

    sails = server;
    done();
  });
});

after(done => sails.lower(done));
