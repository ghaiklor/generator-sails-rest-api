import { assert } from 'chai';
import sinon from 'sinon';
import response from '../../../api/responses/<%= name %>';

const context = {
  res: {
    status: sinon.spy(),
    jsonx: sinon.spy()
  }
};

describe('responses:<%= name %>', () => {
  it('Should be tested', () => {
    assert(false);
  })
});
