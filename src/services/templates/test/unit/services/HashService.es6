import { assert } from 'chai';
import HashService from '../../../api/services/HashService';

describe('services:HashService', () => {
  it('Should properly export', () => {
    assert.isObject(HashService);
  });
});
