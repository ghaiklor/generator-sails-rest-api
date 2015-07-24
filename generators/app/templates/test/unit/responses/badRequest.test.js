var assert = require('assert');
var badRequest = require('../../../api/responses/badRequest');
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

var badRequestObj = {
  code: 'E_BAD_REQUEST',
  message: 'The request cannot be fulfilled due to bad syntax',
  data: {}
};

var check = function () {
  assert(stubStatus.alwaysCalledWith(400));
  assert(stubJsonx.calledWith(badRequestObj));
};

var stubStatus = sinon.stub(context.res, 'status');
var stubJsonx = sinon.stub(context.res, 'jsonx');

describe("responses:badRequest", function () {
  it("should generate response (no params)", function (done) {
    badRequest.call(context);
    check();

    done();
  });

  it("should generate response with custom data param", function (done) {
    badRequestObj = _.merge(badRequestObj, {data: 'MY_DATA'});
    badRequest.call(context, 'MY_DATA');
    check();

    done();
  });

  it("should generate response with custom code param", function (done) {
    badRequestObj = _.merge(badRequestObj, {code: 'MY_CODE'});
    badRequest.call(context, 'MY_DATA', 'MY_CODE');
    check();

    done();
  });

  it("should generate response with custom message param", function (done) {
    badRequestObj = _.merge(badRequestObj, {message: 'MY_MESSAGE'});
    badRequest.call(context, 'MY_DATA', 'MY_CODE', 'MY_MESSAGE');
    check();

    done();
  });

  it("should generate response with custom root param", function (done) {
    badRequestObj = _.assign({dt: '2'}, badRequestObj);
    badRequest.call(context, 'MY_DATA', 'MY_CODE', 'MY_MESSAGE', {dt: '2'});
    check();

    done();
  });
});
