import { assert } from 'chai';
import add from '../../../api/blueprints/add';

describe('blueprints:add', () => {
  it('Should properly export', () => {
    assert.isFunction(add);
  })
});
