import { assert } from 'chai';
import populate from '../../../api/blueprints/populate';

describe('blueprints:populate', () => {
  it('Should properly export', () => {
    assert.isFunction(populate);
  })
});
