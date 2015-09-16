var assert = require('chai').assert;
var SocialService = require('../../.');

describe('services:SocialService', function () {
  it('Should properly export', function () {
    assert.isObject(SocialService);
  });
});
