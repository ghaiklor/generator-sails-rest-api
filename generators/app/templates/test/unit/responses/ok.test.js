var assert = require('assert');
var ok = require('../../../api/responses/ok');
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

var okObj = {
  code: 'OK',
  message: 'Operation is successfully executed',
  data: {}
};

var check = function () {
  assert(stubStatus.alwaysCalledWith(200));
  assert(stubJsonx.calledWith(okObj));
};

var stubStatus = sinon.stub(context.res, 'status');
var stubJsonx = sinon.stub(context.res, 'jsonx');

describe("responses:ok", function () {
  it("should generate response (no params)", function (done) {
    ok.call(context);
    check();

    done();
  });

  it("should generate response with custom data param", function (done) {
    okObj = _.merge(okObj, {data: 'MY_DATA'});
    ok.call(context, 'MY_DATA');
    check();

    done();
  });

  it("should generate response with custom code param", function (done) {
    okObj = _.merge(okObj, {code: 'MY_CODE'});
    ok.call(context, 'MY_DATA', 'MY_CODE');
    check();

    done();
  });

  it("should generate response with custom message param", function (done) {
    okObj = _.merge(okObj, {message: 'MY_MESSAGE'});
    ok.call(context, 'MY_DATA', 'MY_CODE', 'MY_MESSAGE');
    check();

    done();
  });

  it("should generate response with custom root param", function (done) {
    okObj = _.assign({dt: '2'}, okObj);
    ok.call(context, 'MY_DATA', 'MY_CODE', 'MY_MESSAGE', {dt: '2'});
    check();

    done();
  });
});
