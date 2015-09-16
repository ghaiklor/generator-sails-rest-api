var assert = require('chai').assert;
var LocationService = require('../../.');

describe('services:LocationService', function () {
  it('Should properly export', function () {
    assert.isObject(LocationService);
  });
});
