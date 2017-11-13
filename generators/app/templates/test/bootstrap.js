"use strict";

const Sails = require('sails');
const config = require('../config/env/test');

let sails;

before(done => {
  Sails.load(config, (error) => {
    if (error) return done(error);

    done();
  });
});

after(done => sails.lower(done));
