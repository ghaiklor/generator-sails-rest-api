"use strict";

const assert = require('chai').assert;
const sinon = require('sinon');
const forbidden = require('../../../api/responses/forbidden');

const context = {
  res: {
    status: sinon.spy(),
    jsonx: sinon.spy()
  }
};

describe('responses:forbidden', () => {
  it('Should generate response with no params', () => {
    forbidden.call(context);
    assert.ok(context.res.status.calledWith(403));
    assert.ok(context.res.jsonx.calledWith({
      code: 'E_FORBIDDEN',
      message: 'User not authorized to perform the operation',
      data: {}
    }));
  });

  it('Should generate response with data param', () => {
    forbidden.call(context, 'MY_DATA');
    assert.ok(context.res.status.calledWith(403));
    assert.ok(context.res.jsonx.calledWith({
      code: 'E_FORBIDDEN',
      message: 'User not authorized to perform the operation',
      data: 'MY_DATA'
    }));
  });

  it('Should generate response with config param', () => {
    forbidden.call(context, 'MY_DATA', {code: 'MY_CODE', message: 'MY_MESSAGE', root: {root: 'MY_ROOT'}});
    assert.ok(context.res.status.calledWith(403));
    assert.ok(context.res.jsonx.calledWith({
      code: 'MY_CODE',
      message: 'MY_MESSAGE',
      data: 'MY_DATA',
      root: 'MY_ROOT'
    }));
  });
});
