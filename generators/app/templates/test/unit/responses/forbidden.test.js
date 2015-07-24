var assert = require('assert');
var forbidden = require('../../../api/responses/forbidden');
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

var forbiddenObj = {
  code: 'E_FORBIDDEN',
  message: 'User not authorized to perform the operation',
  data: {}
};

var check = function () {
  assert(stubStatus.alwaysCalledWith(403));
  assert(stubJsonx.calledWith(forbiddenObj));
};

var stubStatus = sinon.stub(context.res, 'status');
var stubJsonx = sinon.stub(context.res, 'jsonx');

describe("responses:forbidden", function () {
  it("should generate response (no params)", function (done) {
    forbidden.call(context);
    check();

    done();
  });

  it("should generate response with custom data param", function (done) {
    forbiddenObj = _.merge(forbiddenObj, {data: 'MY_DATA'});
    forbidden.call(context, 'MY_DATA');
    check();

    done();
  });

  it("should generate response with custom code param", function (done) {
    forbiddenObj = _.merge(forbiddenObj, {code: 'MY_CODE'});
    forbidden.call(context, 'MY_DATA', 'MY_CODE');
    check();

    done();
  });

  it("should generate response with custom message param", function (done) {
    forbiddenObj = _.merge(forbiddenObj, {message: 'MY_MESSAGE'});
    forbidden.call(context, 'MY_DATA', 'MY_CODE', 'MY_MESSAGE');
    check();

    done();
  });

  it("should generate response with custom root param", function (done) {
    forbiddenObj = _.assign({dt: '2'}, forbiddenObj);
    forbidden.call(context, 'MY_DATA', 'MY_CODE', 'MY_MESSAGE', {dt: '2'});
    check();

    done();
  });
});
