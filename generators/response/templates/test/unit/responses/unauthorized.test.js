"use strict";

const assert = require('chai').assert;
const sinon = require('sinon');
const unauthorized = require('../../../api/responses/unauthorized');

const context = {
  res: {
    status: sinon.spy(),
    jsonx: sinon.spy()
  }
};

describe('responses:unauthorized', () => {
  it('Should generate response with no params', () => {
    unauthorized.call(context);
    assert.ok(context.res.status.calledWith(401));
    assert.ok(context.res.jsonx.calledWith({
      code: 'E_UNAUTHORIZED',
      message: 'Missing or invalid authentication token',
      data: {}
    }));
  });

  it('Should generate response with data param', () => {
    unauthorized.call(context, 'MY_DATA');
    assert.ok(context.res.status.calledWith(401));
    assert.ok(context.res.jsonx.calledWith({
      code: 'E_UNAUTHORIZED',
      message: 'Missing or invalid authentication token',
      data: 'MY_DATA'
    }));
  });

  it('Should generate response with config param', () => {
    unauthorized.call(context, 'MY_DATA', {code: 'MY_CODE', message: 'MY_MESSAGE', root: {root: 'MY_ROOT'}});
    assert.ok(context.res.status.calledWith(401));
    assert.ok(context.res.jsonx.calledWith({
      code: 'MY_CODE',
      message: 'MY_MESSAGE',
      data: 'MY_DATA',
      root: 'MY_ROOT'
    }));
  });
});
