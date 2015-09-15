var assert = require('chai').assert;
var sinon = require('sinon');
var status = sinon.spy();
var jsonx = sinon.spy();
var forbidden = require('../../../api/responses/forbidden').bind({
  res: {
    status: status,
    jsonx: jsonx
  }
});

describe('responses:forbidden', function () {
  it('Should generate response with no params', function () {
    forbidden();
    assert.ok(status.calledWith(403));
    assert.ok(jsonx.calledWith({
      code: 'E_FORBIDDEN',
      message: 'User not authorized to perform the operation',
      data: {}
    }));
  });

  it('Should generate response with data param', function () {
    forbidden('MY_DATA');
    assert.ok(status.calledWith(403));
    assert.ok(jsonx.calledWith({
      code: 'E_FORBIDDEN',
      message: 'User not authorized to perform the operation',
      data: 'MY_DATA'
    }));
  });

  it('Should generate response with config param', function () {
    forbidden('MY_DATA', {code: 'MY_CODE', message: 'MY_MESSAGE', root: {custom: 'MY_CUSTOM'}});
    assert.ok(status.calledWith(403));
    assert.ok(jsonx.calledWith({
      code: 'MY_CODE',
      message: 'MY_MESSAGE',
      data: 'MY_DATA',
      custom: 'MY_CUSTOM'
    }));
  });
});
