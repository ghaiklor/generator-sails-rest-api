var assert = require('chai').assert;
var sinon = require('sinon');
var status = sinon.spy();
var jsonx = sinon.spy();
var ok = require('../../../.././ok').bind({
  res: {
    status: status,
    jsonx: jsonx
  }
});

describe('responses:ok', function () {
  it('Should generate response with no params', function () {
    ok();
    assert.ok(status.calledWith(200));
    assert.ok(jsonx.calledWith({
      code: 'OK',
      message: 'Operation is successfully executed',
      data: {}
    }));
  });

  it('Should generate response with data param', function () {
    ok('MY_DATA');
    assert.ok(status.calledWith(200));
    assert.ok(jsonx.calledWith({
      code: 'OK',
      message: 'Operation is successfully executed',
      data: 'MY_DATA'
    }));
  });

  it('Should generate response with config param', function () {
    ok('MY_DATA', {code: 'MY_CODE', message: 'MY_MESSAGE', root: {root: 'MY_ROOT'}});
    assert.ok(status.calledWith(200));
    assert.ok(jsonx.calledWith({
      code: 'MY_CODE',
      message: 'MY_MESSAGE',
      data: 'MY_DATA',
      root: 'MY_ROOT'
    }));
  });
});
