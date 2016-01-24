"use strict";

const assert = require('chai').assert;
const sinon = require('sinon');
const badRequest = require('../../../api/responses/badRequest');

const context = {
  res: {
    status: sinon.spy(),
    jsonx: sinon.spy()
  }
};

describe('responses:badRequest', () => {
  it('Should generate response with no params', () => {
    badRequest.call(context);
    assert.ok(context.res.status.calledWith(400));
    assert.ok(context.res.jsonx.calledWith({
      code: 'E_BAD_REQUEST',
      message: 'The request cannot be fulfilled due to bad syntax',
      data: {}
    }));
  });

  it('Should generate response with data param', () => {
    badRequest.call(context, 'MY_DATA');
    assert.ok(context.res.status.calledWith(400));
    assert.ok(context.res.jsonx.calledWith({
      code: 'E_BAD_REQUEST',
      message: 'The request cannot be fulfilled due to bad syntax',
      data: 'MY_DATA'
    }));
  });

  it('Should generate response with config param', () => {
    badRequest.call(context, 'MY_DATA', {code: 'MY_CODE', message: 'MY_MESSAGE', root: {root: 'MY_ROOT'}});
    assert.ok(context.res.status.calledWith(400));
    assert.ok(context.res.jsonx.calledWith({
      code: 'MY_CODE',
      message: 'MY_MESSAGE',
      data: 'MY_DATA',
      root: 'MY_ROOT'
    }));
  });
});
