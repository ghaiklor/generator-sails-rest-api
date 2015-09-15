var assert = require('chai').assert;
var SmsService = require('../../../api/services/SmsService');

describe('services:SmsService', function () {
  it('Should properly export', function () {
    assert.isObject(SmsService);
  });
});
