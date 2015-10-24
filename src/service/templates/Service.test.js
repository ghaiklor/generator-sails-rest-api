import { assert } from 'chai';
import Service from '../../../api/services/<%= name %>Service';

describe('services:<%= name %>Service', () => {
  it('Should properly export', () => {
    assert.isObject(Service);
  });
});
