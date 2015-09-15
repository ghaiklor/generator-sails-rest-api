var assert = require('chai').assert;
var HashService = require('../../../api/services/HashService');

describe('services:HashService', function () {
  it('Should properly export', function () {
    assert.isObject(HashService);
  });
});
