"use strict";

const assert = require('chai').assert;
const MailerService = require('../../../api/services/MailerService');

describe('services:MailerService', () => {
  it('Should properly export', () => {
    assert.isObject(MailerService);
  });
});
