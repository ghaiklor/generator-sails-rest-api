import { assert } from 'chai';
import sinon from 'sinon';
import notFound from '../../../api/responses/notFound';

const context = {
  res: {
    status: sinon.spy(),
    jsonx: sinon.spy()
  }
};

describe('responses:notFound', () => {
  it('Should generate response with no params', () => {
    notFound.call(context);
    assert.ok(context.res.status.calledWith(404));
    assert.ok(context.res.jsonx.calledWith({
      code: 'E_NOT_FOUND',
      message: 'The requested resource could not be found but may be available again in the future',
      data: {}
    }));
  });

  it('Should generate response with data param', () => {
    notFound.call(context, 'MY_DATA');
    assert.ok(context.res.status.calledWith(404));
    assert.ok(context.res.jsonx.calledWith({
      code: 'E_NOT_FOUND',
      message: 'The requested resource could not be found but may be available again in the future',
      data: 'MY_DATA'
    }));
  });

  it('Should generate response with config param', () => {
    notFound.call(context, 'MY_DATA', {code: 'MY_CODE', message: 'MY_MESSAGE', root: {root: 'MY_ROOT'}});
    assert.ok(context.res.status.calledWith(404));
    assert.ok(context.res.jsonx.calledWith({
      code: 'MY_CODE',
      message: 'MY_MESSAGE',
      data: 'MY_DATA',
      root: 'MY_ROOT'
    }));
  });
});
