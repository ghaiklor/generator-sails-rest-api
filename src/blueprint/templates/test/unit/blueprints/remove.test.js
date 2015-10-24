import { assert } from 'chai';
import remove from '../../../api/blueprints/remove';

describe('blueprints:remove', () => {
  it('Should properly export', () => {
    assert.isFunction(remove);
  })
});
