var assert = require('chai').assert;
var PaymentService = require('../../../api/services/PaymentService');

describe('services:PaymentService', function () {
  it('Should properly export', function () {
    assert.isObject(PaymentService);
  });
});
