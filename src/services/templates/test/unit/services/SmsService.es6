import { assert } from 'chai';
import SmsService from '../../../api/services/SmsService';

describe('services:SmsService', () => {
  it('Should properly export', () => {
    assert.isObject(SmsService);
  });
});
