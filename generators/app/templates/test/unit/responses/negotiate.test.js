var assert = require('chai').assert;
var sinon = require('sinon');
var unauthorized = sinon.spy();
var forbidden = sinon.spy();
var notFound = sinon.spy();
var badRequest = sinon.spy();
var serverError = sinon.spy();
var negotiate = require('../../../api/responses/negotiate').bind({
  res: {
    unauthorized: unauthorized,
    forbidden: forbidden,
    notFound: notFound,
    badRequest: badRequest,
    serverError: serverError
  }
});

describe('responses:negotiate', function () {
  it('Should handle empty error object', function () {
    negotiate();
    assert.ok(serverError.calledWith({}, {code: undefined, message: undefined, root: undefined}));
  });

  it('Should handle complex error object', function () {
    negotiate({error: 'MY_ERROR', code: 'MY_CODE', message: 'MY_MESSAGE', root: {custom: 'MY_CUSTOM'}});
    assert.ok(serverError.calledWith({error: 'MY_ERROR'}, {
      code: 'MY_CODE',
      message: 'MY_MESSAGE',
      root: {custom: 'MY_CUSTOM'}
    }));
  });

  it('Should handle error from Waterline', function () {
    negotiate({code: 'E_VALIDATION', reason: 'ANY_REASON', invalidAttributes: [], status: 400});
    assert.ok(badRequest.calledWith([], {code: 'E_VALIDATION', message: 'ANY_REASON', root: undefined}));
  });
});
