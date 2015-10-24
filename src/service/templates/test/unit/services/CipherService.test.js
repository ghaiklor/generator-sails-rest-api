import { assert } from 'chai';
import CipherService from '../../../api/services/CipherService';

describe('services:CipherService', () => {
  it('Should properly export', () => {
    assert.isObject(CipherService);
  });
});
