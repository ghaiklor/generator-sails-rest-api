"use strict";

const assert = require('chai').assert;
const PaymentService = require('../../../api/services/PaymentService');

describe('services:PaymentService', () => {
  it('Should properly export', () => {
    assert.isObject(PaymentService);
  });
});
