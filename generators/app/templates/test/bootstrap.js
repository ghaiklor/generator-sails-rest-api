"use strict";

const Sails = require('sails');
const config = require('../config/env/test');

let sails;

before(done => {
  Sails.lift(config, (error, server) => {
    if (error) return done(error);

    sails = server;
    done();
  });
});

after(done => sails.lower(done));
