var assert = require('assert');
var update = require('../../../api/blueprints/update');
var sinon = require('sinon');

var id = 2;
var username = 'testFindUpdated';

var req = {
  options: {
    model: 'user',
    action: 'create',
    controller: 'user'
  },
  params: {
    all: function () {
      return {
        username: username
      };
    }
  },
  param: function () {
    return id;
  },
  _sails: {}
};

var res = {
  ok: function () {
  },
  serverError: function () {
  }
};

describe('blueprints:update', function () {
  before(function (done) {
    req._sails = sails;

    done();
  });

  it('should update user with id = 2', function (done) {
    var stubOk = sinon.stub(res, 'ok');
    var stubServerError = sinon.stub(res, 'serverError');

    update(req, res);

    var i = setInterval(function () {
      if (!stubServerError.called && !stubOk.called)
        return;

      clearInterval(i);

      assert(!stubServerError.called);
      assert(stubOk.called);
      assert(stubOk.getCall(0).args[0].username === username);

      res.ok.restore();
      res.serverError.restore();

      done();
    }, 20);
  });

  it('should return serverError', function (done) {
    var stubOk = sinon.stub(res, 'ok');
    var stubServerError = sinon.stub(res, 'serverError');

    id = 398843;
    username = 'testFindUpdated2';

    update(req, res);

    var i = setInterval(function () {
      if (!stubServerError.called && !stubOk.called)
        return;

      clearInterval(i);

      assert(!stubOk.called);
      assert(stubServerError.called);

      res.ok.restore();
      res.serverError.restore();

      done();
    }, 20);
  });
});
