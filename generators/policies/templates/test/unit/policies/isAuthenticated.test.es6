import { assert } from 'chai';
import sinon from 'sinon';
import isUser from '../../../api/policies/isAuthenticated';
import { jwt } from '../../../api/services/CipherService';

let token = "Bearer " + jwt.encodeSync({id: 2});
let tokenFail = token + '3';

let req = {
  headers: {
    authorization: token
  }
};

let res = {
  serverError: function () {
  },
  unauthorized: function () {
  }
};

describe("policies:isUser", function () {
  it("should call next() callback", function (done) {
    let stubUnauthorized = sinon.stub(res, 'unauthorized');
    let stubServerError = sinon.stub(res, 'serverError');
    let nextCb = sinon.spy();

    isUser(req, res, nextCb);

    let i = setInterval(function () {
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
    let stubUnauthorized = sinon.stub(res, 'unauthorized');
    let stubServerError = sinon.stub(res, 'serverError');
    let nextCb = sinon.spy();

    req.headers.authorization = tokenFail;
    isUser(req, res, nextCb);

    let i = setInterval(function () {
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
