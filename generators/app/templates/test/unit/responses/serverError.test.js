var assert = require('chai').assert;
var sinon = require('sinon');
var status = sinon.spy();
var jsonx = sinon.spy();
var serverError = require('../../../api/responses/serverError').bind({
  res: {
    status: status,
    jsonx: jsonx
  }
});

describe('responses:serverError', function () {
  it('Should generate response with no params', function () {
    serverError();
    assert.ok(status.calledWith(500));
    assert.ok(jsonx.calledWith({
      code: 'E_INTERNAL_SERVER_ERROR',
      message: 'Something bad happened on the server',
      data: {}
    }));
  });

  it('Should generate response with data param', function () {
    serverError('MY_DATA');
    assert.ok(status.calledWith(500));
    assert.ok(jsonx.calledWith({
      code: 'E_INTERNAL_SERVER_ERROR',
      message: 'Something bad happened on the server',
      data: 'MY_DATA'
    }));
  });

  it('Should generate response with config param', function () {
    serverError('MY_DATA', {code: 'MY_CODE', message: 'MY_MESSAGE', root: {custom: 'MY_CUSTOM'}});
    assert.ok(status.calledWith(500));
    assert.ok(jsonx.calledWith({
      code: 'MY_CODE',
      message: 'MY_MESSAGE',
      data: 'MY_DATA',
      custom: 'MY_CUSTOM'
    }));
  });
});
