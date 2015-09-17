import { assert } from 'chai';
import sinon from 'sinon';
import serverError from '../../../api/responses/serverError';

const context = {
  res: {
    status: sinon.spy(),
    jsonx: sinon.spy()
  }
};

describe('responses:serverError', () => {
  it('Should generate response with no params', () => {
    serverError.call(context);
    assert.ok(context.status.calledWith(400));
    assert.ok(context.jsonx.calledWith({
      code: 'E_BAD_REQUEST',
      message: 'The request cannot be fulfilled due to bad syntax',
      data: {}
    }));
  });

  it('Should generate response with data param', () => {
    serverError.call(context, 'MY_DATA');
    assert.ok(context.status.calledWith(400));
    assert.ok(context.jsonx.calledWith({
      code: 'E_BAD_REQUEST',
      message: 'The request cannot be fulfilled due to bad syntax',
      data: 'MY_DATA'
    }));
  });

  it('Should generate response with config param', () => {
    serverError.call(context, 'MY_DATA', {code: 'MY_CODE', message: 'MY_MESSAGE', root: {root: 'MY_ROOT'}});
    assert.ok(context.status.calledWith(400));
    assert.ok(context.jsonx.calledWith({
      code: 'MY_CODE',
      message: 'MY_MESSAGE',
      data: 'MY_DATA',
      root: 'MY_ROOT'
    }));
  });
});
