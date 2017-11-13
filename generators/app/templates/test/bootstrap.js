"use strict";

const Sails = require('sails');
const config = require('../config/env/test');

before(done => {
  Sails.load(config, (server, error) => {
    if (error) return done(error);
    done();
  });
});

after(done => Sails.lower(done));
