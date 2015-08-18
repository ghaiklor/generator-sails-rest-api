var assert = require('assert');
var isUser = require('../../../api/policies/isAuthenticated');
var sinon = require('sinon');
var CipherService = require('../../../api/services/CipherService');
var jwt = CipherService.jwt;

var token = "Bearer " + jwt.encodeSync({id: 2});
var tokenFail = token + '3';

var req = {
  headers: {
    authorization: token
  }
};

var res = {
  serverError: function () {
  },
  unauthorized: function () {
  }
};

describe("policies:isUser", function () {

  it("should call next() callback", function (done) {
    var stubUnauthorized = sinon.stub(res, 'unauthorized');
    var stubServerError = sinon.stub(res, 'serverError');
    var nextCb = sinon.spy();

    isUser(req, res, nextCb);

    var i = setInterval(function () {
      if (!stubUnauthorized.called && !stubServerError.called && !nextCb.called)
        return;

      clearInterval(i);

      assert(!stubServerError.called);
      assert(!stubUnauthorized.called);
      assert(nextCb.called);

      res.serverError.restore();
      res.unauthorized.restore();

      done();
    }, 20);
  });

  it("should return unauthorized error", function (done) {
    var stubUnauthorized = sinon.stub(res, 'unauthorized');
    var stubServerError = sinon.stub(res, 'serverError');
    var nextCb = sinon.spy();

    req.headers.authorization = tokenFail;
    isUser(req, res, nextCb);

    var i = setInterval(function () {
      if (!stubUnauthorized.called && !stubServerError.called && !nextCb.called)
        return;

      clearInterval(i);

      assert(!stubServerError.called);
      assert(!nextCb.called);
      assert(stubUnauthorized.called);

      res.serverError.restore();
      res.unauthorized.restore();

      done();
    }, 20);
  });
});
