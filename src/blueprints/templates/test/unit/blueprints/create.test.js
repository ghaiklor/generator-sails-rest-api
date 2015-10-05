import { assert } from 'chai';
import sinon from 'sinon';
import create from '../../../api/blueprints/create'

const user = {
  username: 'testCreate',
  password: 'testCreate',
  email: 'testCreate@gmail.com'
};

const req = {
  options: {
    model: 'user',
    action: 'create',
    controller: 'user'
  },
  params: {
    all: () => user
  },
  _sails: {}
};

const res = {
  created: sinon.spy(),
  negotiate: sinon.spy()
};

describe('blueprints:create', function () {
  before(done => {
    req._sails = sails;
    done();
  });

  it('Should create user', done => {
    create(req, res);

    let i = setInterval(() => {
      if (!res.negotiate.called && !res.created.called) return;

      clearInterval(i);

      assert(!res.negotiate.called);
      assert(res.created.called);

      res.created.restore();
      res.negotiate.restore();

      done();
    }, 20);
  });

  it('Should reject creating the same user', done => {
    create(req, res);

    let i = setInterval(() => {
      if (!res.negotiate.called && !res.created.called) return;

      clearInterval(i);

      assert(!res.created.called);
      assert(res.negotiate.called);

      res.created.restore();
      res.negotiate.restore();

      done();
    }, 20);
  })
});
