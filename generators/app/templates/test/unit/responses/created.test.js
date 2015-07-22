var assert = require('assert');
var created = require('../../../api/responses/created');
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

var createdObj = {
  code: 'CREATED',
  message: 'The request has been fulfilled and resulted in a new resource being created',
  data: {}
};

var check = function () {
  assert(stubStatus.alwaysCalledWith(201));
  assert(stubJsonx.calledWith(createdObj));
};

var stubStatus = sinon.stub(context.res, 'status');
var stubJsonx = sinon.stub(context.res, 'jsonx');

describe("responses:created", function () {
  it("should generate response (no params)", function (done) {
    created.call(context);
    check();

    done();
  });

  it("should generate response with custom data param", function (done) {
    createdObj = _.merge(createdObj, {data: 'MY_DATA'});
    created.call(context, 'MY_DATA');
    check();

    done();
  });

  it("should generate response with custom code param", function (done) {
    createdObj = _.merge(createdObj, {code: 'MY_CODE'});
    created.call(context, 'MY_DATA', 'MY_CODE');
    check();

    done();
  });

  it("should generate response with custom message param", function (done) {
    createdObj = _.merge(createdObj, {message: 'MY_MESSAGE'});
    created.call(context, 'MY_DATA', 'MY_CODE', 'MY_MESSAGE');
    check();

    done();
  });

  it("should generate response with custom root param", function (done) {
    createdObj = _.assign({dt: '2'}, createdObj);
    created.call(context, 'MY_DATA', 'MY_CODE', 'MY_MESSAGE', {dt: '2'});
    check();

    done();
  });
});
