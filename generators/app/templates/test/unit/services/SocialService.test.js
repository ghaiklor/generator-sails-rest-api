var assert = require('chai').assert;
var SocialService = require('../../../api/services/SocialService');

describe('services:SocialService', function () {
  it('Should properly export', function () {
    assert.isObject(SocialService);
  });
});
