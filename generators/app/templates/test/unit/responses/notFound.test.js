var assert = require('assert');
var notFound = require('../../../api/responses/notFound');
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

var notFoundObj = {
  code: 'E_NOT_FOUND',
  message: 'The requested resource could not be found but may be available again in the future',
  data: {}
};

var check = function () {
  assert(stubStatus.alwaysCalledWith(404));
  assert(stubJsonx.calledWith(notFoundObj));
};

var stubStatus = sinon.stub(context.res, 'status');
var stubJsonx = sinon.stub(context.res, 'jsonx');

describe("responses:notFound", function () {
  it("should generate response (no params)", function (done) {
    notFound.call(context);
    check();

    done();
  });

  it("should generate response with custom data param", function (done) {
    notFoundObj = _.merge(notFoundObj, {data: 'MY_DATA'});
    notFound.call(context, 'MY_DATA');
    check();

    done();
  });

  it("should generate response with custom code param", function (done) {
    notFoundObj = _.merge(notFoundObj, {code: 'MY_CODE'});
    notFound.call(context, 'MY_DATA', 'MY_CODE');
    check();

    done();
  });

  it("should generate response with custom message param", function (done) {
    notFoundObj = _.merge(notFoundObj, {message: 'MY_MESSAGE'});
    notFound.call(context, 'MY_DATA', 'MY_CODE', 'MY_MESSAGE');
    check();

    done();
  });

  it("should generate response with custom root param", function (done) {
    notFoundObj = _.assign({dt: '2'}, notFoundObj);
    notFound.call(context, 'MY_DATA', 'MY_CODE', 'MY_MESSAGE', {dt: '2'});
    check();

    done();
  });
});
