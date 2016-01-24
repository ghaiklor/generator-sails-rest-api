"use strict";

const assert = require('chai').assert;
const sinon = require('sinon');
const serverError = require('../../../api/responses/serverError');

const context = {
  res: {
    status: sinon.spy(),
    jsonx: sinon.spy()
  }
};

describe('responses:serverError', () => {
  it('Should generate response with no params', () => {
    serverError.call(context);
    assert.ok(context.res.status.calledWith(500));
    assert.ok(context.res.jsonx.calledWith({
      code: 'E_INTERNAL_SERVER_ERROR',
      message: 'Something bad happened on the server',
      data: {}
    }));
  });

  it('Should generate response with data param', () => {
    serverError.call(context, 'MY_DATA');
    assert.ok(context.res.status.calledWith(500));
    assert.ok(context.res.jsonx.calledWith({
      code: 'E_INTERNAL_SERVER_ERROR',
      message: 'Something bad happened on the server',
      data: 'MY_DATA'
    }));
  });

  it('Should generate response with config param', () => {
    serverError.call(context, 'MY_DATA', {code: 'MY_CODE', message: 'MY_MESSAGE', root: {root: 'MY_ROOT'}});
    assert.ok(context.res.status.calledWith(500));
    assert.ok(context.res.jsonx.calledWith({
      code: 'MY_CODE',
      message: 'MY_MESSAGE',
      data: 'MY_DATA',
      root: 'MY_ROOT'
    }));
  });
});
