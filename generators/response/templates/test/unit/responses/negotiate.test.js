"use strict";

const assert = require('chai').assert;
const sinon = require('sinon');
const negotiate = require('../../../api/responses/negotiate');

const context = {
  res: {
    badRequest: sinon.spy(),
    forbidden: sinon.spy(),
    notFound: sinon.spy(),
    serverError: sinon.spy(),
    unauthorized: sinon.spy()
  }
};

describe('responses:negotiate', () => {
  it('Should handle empty error object', () => {
    negotiate.call(context);
    assert.ok(context.res.serverError.calledWith({}, {code: undefined, message: undefined, root: undefined}));
  });

  it('Should handle complex error object', () => {
    negotiate.call(context, {error: 'MY_ERROR', code: 'MY_CODE', message: 'MY_MESSAGE', root: {root: 'MY_ROOT'}});
    assert.ok(context.res.serverError.calledWith({error: 'MY_ERROR'}, {
      code: 'MY_CODE',
      message: 'MY_MESSAGE',
      root: {root: 'MY_ROOT'}
    }));
  });

  it('Should handle error from Waterline', () => {
    negotiate.call(context, {code: 'E_VALIDATION', reason: 'ANY_REASON', invalidAttributes: [], status: 400});
    assert.ok(context.res.badRequest.calledWith([], {code: 'E_VALIDATION', message: 'ANY_REASON', root: undefined}));
  });

  it('Should handle error from Passport', () => {
    negotiate.call(context, {name: 'InternalOAuthError', oauthError: 401, message: 'PASSPORT_ERROR'});
    assert.ok(context.res.unauthorized.calledWith({}, {code: undefined, message: 'PASSPORT_ERROR', root: undefined}));
  });

  it('Should handle error with unauthorized status', () => {
    negotiate.call(context, {code: 'E_UNAUTHORIZED', reason: 'ANY_REASON', invalidAttributes: [], status: 401});
    assert.ok(context.res.unauthorized.calledWith([], {
      code: 'E_UNAUTHORIZED',
      message: 'ANY_REASON',
      root: undefined
    }));
  });

  it('Should handle error with forbidden status', () => {
    negotiate.call(context, {code: 'E_FORBIDDEN', reason: 'ANY_REASON', invalidAttributes: [], status: 403});
    assert.ok(context.res.forbidden.calledWith([], {code: 'E_FORBIDDEN', message: 'ANY_REASON', root: undefined}));
  });

  it('Should handle error with notFound status', () => {
    negotiate.call(context, {code: 'E_NOT_FOUND', reason: 'ANY_REASON', invalidAttributes: [], status: 404});
    assert.ok(context.res.notFound.calledWith([], {code: 'E_NOT_FOUND', message: 'ANY_REASON', root: undefined}));
  });

  it('Should handle error with badRequest status', () => {
    negotiate.call(context, {code: 'E_BAD_REQUEST', reason: 'ANY_REASON', invalidAttributes: [], status: 402});
    assert.ok(context.res.badRequest.calledWith([], {code: 'E_BAD_REQUEST', message: 'ANY_REASON', root: undefined}));
  });

  it('Should handle error with server error status', () => {
    negotiate.call(context, {
      code: 'E_INTERNAL_SERVER_ERROR',
      reason: 'ANY_REASON',
      invalidAttributes: [],
      status: 500
    });
    assert.ok(context.res.serverError.calledWith([], {
      code: 'E_INTERNAL_SERVER_ERROR',
      message: 'ANY_REASON',
      root: undefined
    }));
  });
});
