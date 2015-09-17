import { assert } from 'chai';
import SocialService from '../../../api/services/SocialService';

describe('services:SocialService', () => {
  it('Should properly export', () => {
    assert.isObject(SocialService);
  });
});
