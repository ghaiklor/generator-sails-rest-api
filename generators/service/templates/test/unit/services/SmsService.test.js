"use strict";

const assert = require('chai');
const SmsService = require('../../../api/services/SmsService');

describe('services:SmsService', () => {
  it('Should properly export', () => {
    assert.isObject(SmsService);
  });
});
