var assert = require('chai').assert;
var sinon = require('sinon');
var status = sinon.spy();
var jsonx = sinon.spy();
var unauthorized = require('../../../api/responses/unauthorized').bind({
  res: {
    status: status,
    jsonx: jsonx
  }
});

describe('responses:unauthorized', function () {
  it('Should generate response with no params', function () {
    unauthorized();
    assert.unauthorized(status.calledWith(401));
    assert.unauthorized(jsonx.calledWith({
      code: 'E_UNAUTHORIZED',
      message: 'Missing or invalid authentication token',
      data: {}
    }));
  });

  it('Should generate response with data param', function () {
    unauthorized('MY_DATA');
    assert.unauthorized(status.calledWith(401));
    assert.unauthorized(jsonx.calledWith({
      code: 'E_UNAUTHORIZED',
      message: 'Missing or invalid authentication token',
      data: 'MY_DATA'
    }));
  });

  it('Should generate response with config param', function () {
    unauthorized('MY_DATA', {code: 'MY_CODE', message: 'MY_MESSAGE', root: {custom: 'MY_CUSTOM'}});
    assert.unauthorized(status.calledWith(401));
    assert.unauthorized(jsonx.calledWith({
      code: 'MY_CODE',
      message: 'MY_MESSAGE',
      data: 'MY_DATA',
      custom: 'MY_CUSTOM'
    }));
  });
});
