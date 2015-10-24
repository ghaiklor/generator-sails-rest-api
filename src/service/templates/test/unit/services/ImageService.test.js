import { assert } from 'chai';
import ImageService from '../../../api/services/ImageService';

describe('services:ImageService', () => {
  it('Should properly export', () => {
    assert.isObject(ImageService);
  });
});
