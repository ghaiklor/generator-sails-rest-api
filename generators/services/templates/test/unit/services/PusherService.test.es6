import { assert } from 'chai';
import PusherService from '../../../api/services/PusherService';

describe('services:PusherService', () => {
  it('Should properly export', () => {
    assert.isObject(PusherService);
  });
});
