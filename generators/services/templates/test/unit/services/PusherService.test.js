var assert = require('chai').assert;
var PusherService = require('../../../api/services/PusherService');

describe('services:PusherService', function () {
  it('Should properly export', function () {
    assert.isObject(PusherService);
  });
});
