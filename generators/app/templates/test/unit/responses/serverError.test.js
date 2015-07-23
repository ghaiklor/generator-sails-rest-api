var assert = require('assert');
var serverError = require('../../../api/responses/serverError');
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
        error: function () {
        }
      }
    }
  }
};

var serverErrorObj = {
  code: 'E_INTERNAL_SERVER_ERROR',
  message: 'Something bad happened on the server',
  data: {}
};

var check = function () {
  assert(stubStatus.alwaysCalledWith(500));
  assert(stubJsonx.calledWith(serverErrorObj));
};

var stubStatus = sinon.stub(context.res, 'status');
var stubJsonx = sinon.stub(context.res, 'jsonx');

describe("responses:serverError", function () {
  it("should generate response (no params)", function (done) {
    serverError.call(context);
    check();

    done();
  });

  it("should generate response with custom data param", function (done) {
    serverErrorObj = _.merge(serverErrorObj, {data: 'MY_DATA'});
    serverError.call(context, 'MY_DATA');
    check();

    done();
  });

  it("should generate response with custom code param", function (done) {
    serverErrorObj = _.merge(serverErrorObj, {code: 'MY_CODE'});
    serverError.call(context, 'MY_DATA', 'MY_CODE');
    check();

    done();
  });

  it("should generate response with custom message param", function (done) {
    serverErrorObj = _.merge(serverErrorObj, {message: 'MY_MESSAGE'});
    serverError.call(context, 'MY_DATA', 'MY_CODE', 'MY_MESSAGE');
    check();

    done();
  });

  it("should generate response with custom root param", function (done) {
    serverErrorObj = _.assign({dt: '2'}, serverErrorObj);
    serverError.call(context, 'MY_DATA', 'MY_CODE', 'MY_MESSAGE', {dt: '2'});
    check();

    done();
  });
});
