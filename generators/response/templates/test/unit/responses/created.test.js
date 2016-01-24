"use strict";

const assert = require('chai').assert;
const sinon = require('sinon');
const created = require('../../../api/responses/created');

const context = {
  res: {
    status: sinon.spy(),
    jsonx: sinon.spy()
  }
};

describe('responses:created', () => {
  it('Should generate response with no params', () => {
    created.call(context);
    assert.ok(context.res.status.calledWith(201));
    assert.ok(context.res.jsonx.calledWith({
      code: 'CREATED',
      message: 'The request has been fulfilled and resulted in a new resource being created',
      data: {}
    }));
  });

  it('Should generate response with data param', () => {
    created.call(context, 'MY_DATA');
    assert.ok(context.res.status.calledWith(201));
    assert.ok(context.res.jsonx.calledWith({
      code: 'CREATED',
      message: 'The request has been fulfilled and resulted in a new resource being created',
      data: 'MY_DATA'
    }));
  });

  it('Should generate response with config param', () => {
    created.call(context, 'MY_DATA', {code: 'MY_CODE', message: 'MY_MESSAGE', root: {root: 'MY_ROOT'}});
    assert.ok(context.res.status.calledWith(201));
    assert.ok(context.res.jsonx.calledWith({
      code: 'MY_CODE',
      message: 'MY_MESSAGE',
      data: 'MY_DATA',
      root: 'MY_ROOT'
    }));
  });
});
