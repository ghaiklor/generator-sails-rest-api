import { assert } from 'chai';
import blueprint from '../../../api/blueprints/<%= name %>';

describe('blueprints:<%= name %>', () => {
  it('Should properly export', () => {
    assert.isFunction(blueprint);
  })
});
