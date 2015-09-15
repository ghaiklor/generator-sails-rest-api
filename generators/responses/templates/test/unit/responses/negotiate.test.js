var assert = require('chai').assert;
var sinon = require('sinon');
var badRequest = sinon.spy();
var forbidden = sinon.spy();
var notFound = sinon.spy();
var serverError = sinon.spy();
var unauthorized = sinon.spy();
var negotiate = require('../../../api/responses/negotiate').bind({
  res: {
    badRequest: badRequest,
    forbidden: forbidden,
    notFound: notFound,
    serverError: serverError,
    unauthorized: unauthorized
  }
});

describe('responses:negotiate', function () {
  it('Should handle empty error object', function () {
    negotiate();
    assert.ok(serverError.calledWith({}, {code: undefined, message: undefined, root: undefined}));
  });

  it('Should handle complex error object', function () {
    negotiate({error: 'MY_ERROR', code: 'MY_CODE', message: 'MY_MESSAGE', root: {root: 'MY_ROOT'}});
    assert.ok(serverError.calledWith({error: 'MY_ERROR'}, {
      code: 'MY_CODE',
      message: 'MY_MESSAGE',
      root: {root: 'MY_ROOT'}
    }));
  });

  it('Should handle error from Waterline', function () {
    negotiate({code: 'E_VALIDATION', reason: 'ANY_REASON', invalidAttributes: [], status: 400});
    assert.ok(badRequest.calledWith([], {code: 'E_VALIDATION', message: 'ANY_REASON', root: undefined}));
  });

  it('Should handle error from Passport', function () {
    negotiate({name: 'InternalOAuthError', oauthError: 401, message: 'PASSPORT_ERROR'});
    assert.ok(unauthorized.calledWith({}, {code: undefined, message: 'PASSPORT_ERROR', root: undefined}));
  });

  it('Should handle error with unauthorized status', function () {
    negotiate({code: 'E_UNAUTHORIZED', reason: 'ANY_REASON', invalidAttributes: [], status: 401});
    assert.ok(unauthorized.calledWith([], {code: 'E_UNAUTHORIZED', message: 'ANY_REASON', root: undefined}));
  });

  it('Should handle error with forbidden status', function () {
    negotiate({code: 'E_FORBIDDEN', reason: 'ANY_REASON', invalidAttributes: [], status: 403});
    assert.ok(forbidden.calledWith([], {code: 'E_FORBIDDEN', message: 'ANY_REASON', root: undefined}));
  });

  it('Should handle error with notFound status', function () {
    negotiate({code: 'E_NOT_FOUND', reason: 'ANY_REASON', invalidAttributes: [], status: 404});
    assert.ok(notFound.calledWith([], {code: 'E_NOT_FOUND', message: 'ANY_REASON', root: undefined}));
  });

  it('Should handle error with badRequest status', function () {
    negotiate({code: 'E_BAD_REQUEST', reason: 'ANY_REASON', invalidAttributes: [], status: 402});
    assert.ok(badRequest.calledWith([], {code: 'E_BAD_REQUEST', message: 'ANY_REASON', root: undefined}));
  });

  it('Should handle error with server error status', function () {
    negotiate({code: 'E_INTERNAL_SERVER_ERROR', reason: 'ANY_REASON', invalidAttributes: [], status: 500});
    assert.ok(serverError.calledWith([], {code: 'E_INTERNAL_SERVER_ERROR', message: 'ANY_REASON', root: undefined}));
  });
});
