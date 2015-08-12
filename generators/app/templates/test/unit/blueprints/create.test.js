var assert = require('chai').assert;
var sinon = require('sinon');
var create = require('../../../api/blueprints/create');

var user = {
  username: 'testCreate',
  password: 'testCreate',
  email: 'testCreate@gmail.com'
};

var req = {
  options: {
    model: 'user',
    action: 'create',
    controller: 'user'
  },
  params: {
    all: function () {
      return user;
    }
  },
  _sails: {}
};

var res = {
  created: function () {
  },
  serverError: function () {
  }
};

describe('blueprints:create', function () {
  before(function (done) {
    req._sails = sails;

    done();
  });

  it('should create user', function (done) {
    var stubCreated = sinon.stub(res, 'created');
    var stubServerError = sinon.stub(res, 'serverError');

    create(req, res);

    var i = setInterval(function () {
      if (!stubServerError.called && !stubCreated.called)
        return;
      clearInterval(i);

      assert(!stubServerError.called);
      assert(stubCreated.called);

      res.created.restore();
      res.serverError.restore();

      done();
    }, 20);
  });

  it('should reject creating the same user', function (done) {
    var stubCreated = sinon.stub(res, 'created');
    var stubServerError = sinon.stub(res, 'serverError');

    create(req, res);

    var i = setInterval(function () {
      if (!stubServerError.called && !stubCreated.called)
        return;
      clearInterval(i);

      assert(!stubCreated.called);
      assert(stubServerError.called);

      res.created.restore();
      res.serverError.restore();

      done();
    }, 20);
  })
});
