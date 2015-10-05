import { assert } from 'chai';
import sinon from 'sinon';
import find from '../../../api/blueprints/find';

const req = {
  options: {
    model: 'user',
    action: 'create',
    controller: 'user'
  },
  params: {
    all: () => {
      return {username: 'testFind'};
    }
  },
  param: () => {
  },
  _sails: {}
};

const res = {
  ok: sinon.spy(),
  negotiate: sinon.spy()
};

describe('blueprints:find', function () {
  before(done => {
    req._sails = sails;
    done();
  });

  it('Should find a user', done => {
    const user = {
      username: 'testFind',
      password: 'testFind',
      email: 'testFind@gmail.com'
    };

    User.create(user)
      .then(() => {
        find(req, res);

        let i = setInterval(() => {
          if (!res.negotiate.called && !res.ok.called) return;

          clearInterval(i);

          assert(!res.negotiate.called);
          assert(res.ok.called);
          assert(res.ok.getCall(0).args[0][0].username === user.username);

          res.ok.restore();
          res.negotiate.restore();

          done();
        }, 20);
      })
  });
});
