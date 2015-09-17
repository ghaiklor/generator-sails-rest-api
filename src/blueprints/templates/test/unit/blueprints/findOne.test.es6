var assert = require('assert');
var findOne = require('../../../api/blueprints/findone');
var sinon = require('sinon');

var data = {
  id: 2
};

var req = {
  options: {
    model: 'user',
    action: 'create',
    controller: 'user'
  },
  param: function (param) {
    return data[param];
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

describe('blueprints:findOne', function () {
  before(function (done) {
    req._sails = sails;

    done();
  });

  it("should find one user (username = 'testFind')", function (done) {
    var stubOk = sinon.stub(res, 'ok');
    var stubServerError = sinon.stub(res, 'serverError');
    var stubNotFound = sinon.stub(res, 'notFound');

    findOne(req, res);

    var i = setInterval(function () {
      if (!stubServerError.called && !stubOk.called && !stubNotFound.called)
        return;
      clearInterval(i);

      assert(!stubServerError.called);
      assert(!stubNotFound.called);
      assert(stubOk.called);
      assert(stubOk.getCall(0).args[0].username === 'testFind');

      res.ok.restore();
      res.serverError.restore();
      res.notFound.restore();

      done();
    }, 20);
  });

  it("should return notFound", function (done) {
    var stubOk = sinon.stub(res, 'ok');
    var stubServerError = sinon.stub(res, 'serverError');
    var stubNotFound = sinon.stub(res, 'notFound');

    data.id = 123493;

    findOne(req, res);

    var i = setInterval(function () {
      if (!stubServerError.called && !stubOk.called && !stubNotFound.called)
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
