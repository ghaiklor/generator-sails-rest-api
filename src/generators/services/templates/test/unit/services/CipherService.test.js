var assert = require('chai').assert;
var CipherService = require('../../.');

describe('services:CipherService', function () {
  it('Should properly export', function () {
    assert.isObject(CipherService);
  });
});
