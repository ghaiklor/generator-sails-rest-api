var assert = require('chai').assert;
var sinon = require('sinon');
var status = sinon.spy();
var jsonx = sinon.spy();
var badRequest = require('../../../api/responses/badRequest').bind({
  res: {
    status: status,
    jsonx: jsonx
  }
});

describe('responses:badRequest', function () {
  it('Should generate response with no params', function () {
    badRequest();
    assert.ok(status.calledWith(400));
    assert.ok(jsonx.calledWith({
      code: 'E_BAD_REQUEST',
      message: 'The request cannot be fulfilled due to bad syntax',
      data: {}
    }));
  });

  it('Should generate response with data param', function () {
    badRequest('MY_DATA');
    assert.ok(status.calledWith(400));
    assert.ok(jsonx.calledWith({
      code: 'E_BAD_REQUEST',
      message: 'The request cannot be fulfilled due to bad syntax',
      data: 'MY_DATA'
    }));
  });

  it('Should generate response with config param', function () {
    badRequest('MY_DATA', {code: 'MY_CODE', message: 'MY_MESSAGE', root: {custom: 'MY_CUSTOM'}});
    assert.ok(status.calledWith(400));
    assert.ok(jsonx.calledWith({
      code: 'MY_CODE',
      message: 'MY_MESSAGE',
      data: 'MY_DATA',
      custom: 'MY_CUSTOM'
    }));
  });
});
