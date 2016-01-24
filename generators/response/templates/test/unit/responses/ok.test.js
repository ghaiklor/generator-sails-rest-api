"use strict";

const assert = require('chai').assert;
const sinon = require('sinon');
const ok = require('../../../api/responses/ok');

const context = {
  res: {
    status: sinon.spy(),
    jsonx: sinon.spy()
  }
};

describe('responses:ok', () => {
  it('Should generate response with no params', () => {
    ok.call(context);
    assert.ok(context.res.status.calledWith(200));
    assert.ok(context.res.jsonx.calledWith({
      code: 'OK',
      message: 'Operation is successfully executed',
      data: {}
    }));
  });

  it('Should generate response with data param', () => {
    ok.call(context, 'MY_DATA');
    assert.ok(context.res.status.calledWith(200));
    assert.ok(context.res.jsonx.calledWith({
      code: 'OK',
      message: 'Operation is successfully executed',
      data: 'MY_DATA'
    }));
  });

  it('Should generate response with config param', () => {
    ok.call(context, 'MY_DATA', {code: 'MY_CODE', message: 'MY_MESSAGE', root: {root: 'MY_ROOT'}});
    assert.ok(context.res.status.calledWith(200));
    assert.ok(context.res.jsonx.calledWith({
      code: 'MY_CODE',
      message: 'MY_MESSAGE',
      data: 'MY_DATA',
      root: 'MY_ROOT'
    }));
  });
});
