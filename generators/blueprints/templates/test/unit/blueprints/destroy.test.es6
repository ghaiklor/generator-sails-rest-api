var assert = require('chai').assert;
var sinon = require('sinon');
var destroy = require('../../../api/blueprints/destroy');

var req = {
  options: {
    model: 'user',
    action: 'create',
    controller: 'user',
    id: 1
  },
  params: {
    all: function () {
      return user;
    }
  },
  _sails: {}
};

var res = {
  ok: function () {
  },
  serverError: function () {
  },
  notFound: function () {
  }
};

describe('blueprints:destroy', function () {
  before(function (done) {
    req._sails = sails;

    done();
  });

  it("should destroy a user with id = 1", function (done) {
    var stubNotFound = sinon.stub(res, 'notFound');
    var stubServerError = sinon.stub(res, 'serverError');
    var stubOk = sinon.stub(res, 'ok');

    destroy(req, res);

    var i = setInterval(function () {
      if (!stubNotFound.called && !stubOk.called && !stubServerError.called)
        return;
      clearInterval(i);

      assert(!stubNotFound.called);
      assert(!stubServerError.called);
      assert(stubOk.called);

      res.ok.restore();
      res.serverError.restore();
      res.notFound.restore();

      done();
    }, 20);
  });

  it("should be rejected with notFound error after trying to destroy a user with non existing id", function (done) {
    var stubNotFound = sinon.stub(res, 'notFound');
    var stubServerError = sinon.stub(res, 'serverError');
    var stubOk = sinon.stub(res, 'ok');
    req.options.id = -1;

    destroy(req, res);

    var i = setInterval(function () {
      if (!stubNotFound.called && !stubOk.called && !stubServerError.called)
        return;
      clearInterval(i);

      assert(!stubServerError.called);
      assert(!stubOk.called);
      assert(stubNotFound.called);

      res.ok.restore();
      res.serverError.restore();
      res.notFound.restore();

      done();
    }, 20);
  });
});
