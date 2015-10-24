import { assert } from 'chai';
import LocationService from '../../../api/services/LocationService';

describe('services:LocationService', () => {
  it('Should properly export', () => {
    assert.isObject(LocationService);
  });
});
