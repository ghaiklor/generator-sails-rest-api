process.env.NODE_ENV = 'test';

import Sails from 'sails';
import supertest from 'supertest';
import testConfig from '../config/env/test';

let sails;

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

before(done => {
  this.timeout(40000);
  Sails.lift(testConfig, (error, server) => {
    if (error) return done(error);

    sails = server;
    sails.requestForTest = request;

    // here you can load fixtures, etc.

    done(error, sails);
  });
});

after(done => {
  // here you can clear fixtures, etc.
  sails.lower(done);
});
