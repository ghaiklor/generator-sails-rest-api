"use strict";

const assert = require('chai').assert;
const LocationService = require('../../../api/services/LocationService');

describe('services:LocationService', () => {
  it('Should properly export', () => {
    assert.isObject(LocationService);
  });
});
