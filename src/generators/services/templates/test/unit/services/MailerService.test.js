var assert = require('chai').assert;
var MailerService = require('../../.');

describe('services:MailerService', function () {
  it('Should properly export', function () {
    assert.isObject(MailerService);
  });
});
