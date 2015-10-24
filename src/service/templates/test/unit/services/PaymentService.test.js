import { assert } from 'chai';
import PaymentService from '../../../api/services/PaymentService';

describe('services:PaymentService', () => {
  it('Should properly export', () => {
    assert.isObject(PaymentService);
  });
});
