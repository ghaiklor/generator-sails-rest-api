var assert = require('chai').assert;
var LocationService = require('../../../api/services/LocationService');

describe('services:LocationService', function () {
  it('Should properly export', function () {
    assert.isObject(LocationService);
  });
});
