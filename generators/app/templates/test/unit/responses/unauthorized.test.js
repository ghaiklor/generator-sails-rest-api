var assert = require('assert');
var unauthorized = require('../../../api/responses/unauthorized');
var sinon = require('sinon');

var context = {
  res: {
    status: function () {
    },
    jsonx: function () {
    }
  },
  req: {
    _sails: {
      log: {
        silly: function () {
        }
      }
    }
  }
};

var unauthorizedObj = {
  code: 'E_UNAUTHORIZED',
  message: 'Missing or invalid authentication token',
  data: {}
};

var check = function () {
  assert(stubStatus.alwaysCalledWith(401));
  assert(stubJsonx.calledWith(unauthorizedObj));
};

var stubStatus = sinon.stub(context.res, 'status');
var stubJsonx = sinon.stub(context.res, 'jsonx');

describe("responses:unauthorized", function () {
  it("should generate response (no params)", function (done) {
    unauthorized.call(context);
    check();

    done();
  });

  it("should generate response with custom data param", function (done) {
    unauthorizedObj = _.merge(unauthorizedObj, {data: 'MY_DATA'});
    unauthorized.call(context, 'MY_DATA');
    check();

    done();
  });

  it("should generate response with custom code param", function (done) {
    unauthorizedObj = _.merge(unauthorizedObj, {code: 'MY_CODE'});
    unauthorized.call(context, 'MY_DATA', 'MY_CODE');
    check();

    done();
  });

  it("should generate response with custom message param", function (done) {
    unauthorizedObj = _.merge(unauthorizedObj, {message: 'MY_MESSAGE'});
    unauthorized.call(context, 'MY_DATA', 'MY_CODE', 'MY_MESSAGE');
    check();

    done();
  });

  it("should generate response with custom root param", function (done) {
    unauthorizedObj = _.assign({dt: '2'}, unauthorizedObj);
    unauthorized.call(context, 'MY_DATA', 'MY_CODE', 'MY_MESSAGE', {dt: '2'});
    check();

    done();
  });
});
