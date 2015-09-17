import { assert } from 'chai';
import StorageService from '../../../api/services/StorageService';

describe('services:StorageService', () => {
  it('Should properly export', () => {
    assert.isObject(StorageService);
  });
});
