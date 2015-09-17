var assert = require('assert');
var find = require('../../../api/blueprints/find');
var sinon = require('sinon');

var req = {
  options: {
    model: 'user',
    action: 'create',
    controller: 'user'
  },
  params: {
    all: function () {
      return {
        username: 'testFind'
      };
    }
  },
  param: function () {

  },
  _sails: {}
};

var res = {
  ok: function () {
  },
  serverError: function () {
  }
};

describe('blueprints:find', function () {
  before(function (done) {
    req._sails = sails;

    done();
  });

  it("should find a user", function (done) {
    var stubOk = sinon.stub(res, 'ok');
    var stubServerError = sinon.stub(res, 'serverError');

    var user = {
      username: 'testFind',
      password: 'testFind',
      email: 'testFind@gmail.com'
    };

    User.create(user)
      .then(function (u) {
        find(req, res);

        var i = setInterval(function () {
          if (!stubServerError.called && !stubOk.called)
            return;
          clearInterval(i);

          assert(!stubServerError.called);
          assert(stubOk.called);
          assert(stubOk.getCall(0).args[0][0].username === user.username);

          res.ok.restore();
          res.serverError.restore();

          done();
        }, 20);
      })
  });
});
