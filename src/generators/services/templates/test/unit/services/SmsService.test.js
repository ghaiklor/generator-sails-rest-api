var assert = require('chai').assert;
var SmsService = require('../../.');

describe('services:SmsService', function () {
  it('Should properly export', function () {
    assert.isObject(SmsService);
  });
});
