"use strict";

const assert = require('chai').assert;
const SmsService = require('../../../api/services/SmsService');

describe('services:SmsService', () => {
  it('Should properly export', () => {
    assert.isObject(SmsService);
  });
});
