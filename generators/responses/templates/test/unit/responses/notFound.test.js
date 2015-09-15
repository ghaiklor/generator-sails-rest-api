var assert = require('chai').assert;
var sinon = require('sinon');
var status = sinon.spy();
var jsonx = sinon.spy();
var notFound = require('../../../.././notFound').bind({
  res: {
    status: status,
    jsonx: jsonx
  }
});

describe('responses:notFound', function () {
  it('Should generate response with no params', function () {
    notFound();
    assert.ok(status.calledWith(404));
    assert.ok(jsonx.calledWith({
      code: 'E_NOT_FOUND',
      message: 'The requested resource could not be found but may be available again in the future',
      data: {}
    }));
  });

  it('Should generate response with data param', function () {
    notFound('MY_DATA');
    assert.ok(status.calledWith(404));
    assert.ok(jsonx.calledWith({
      code: 'E_NOT_FOUND',
      message: 'The requested resource could not be found but may be available again in the future',
      data: 'MY_DATA'
    }));
  });

  it('Should generate response with config param', function () {
    notFound('MY_DATA', {code: 'MY_CODE', message: 'MY_MESSAGE', root: {root: 'MY_ROOT'}});
    assert.ok(status.calledWith(404));
    assert.ok(jsonx.calledWith({
      code: 'MY_CODE',
      message: 'MY_MESSAGE',
      data: 'MY_DATA',
      root: 'MY_ROOT'
    }));
  });
});
