var assert = require('chai').assert;
var sinon = require('sinon');
var status = sinon.spy();
var jsonx = sinon.spy();
var created = require('../../../api/responses/created').bind({
  res: {
    status: status,
    jsonx: jsonx
  }
});

describe('responses:created', function () {
  it('Should generate response with no params', function () {
    created();
    assert.ok(status.calledWith(201));
    assert.ok(jsonx.calledWith({
      code: 'CREATED',
      message: 'The request has been fulfilled and resulted in a new resource being created',
      data: {}
    }));
  });

  it('Should generate response with data param', function () {
    created('MY_DATA');
    assert.ok(status.calledWith(201));
    assert.ok(jsonx.calledWith({
      code: 'CREATED',
      message: 'The request has been fulfilled and resulted in a new resource being created',
      data: 'MY_DATA'
    }));
  });

  it('Should generate response with config param', function () {
    created('MY_DATA', {code: 'MY_CODE', message: 'MY_MESSAGE', root: {root: 'MY_ROOT'}});
    assert.ok(status.calledWith(201));
    assert.ok(jsonx.calledWith({
      code: 'MY_CODE',
      message: 'MY_MESSAGE',
      data: 'MY_DATA',
      root: 'MY_ROOT'
    }));
  });
});
