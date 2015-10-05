import { assert } from 'chai';
import sinon from 'sinon';
import update from '../../../api/blueprints/update';

let id = 2;
let username = 'testFindUpdated';

const req = {
  options: {
    model: 'user',
    action: 'create',
    controller: 'user'
  },
  params: {
    all: () => {
      return {
        username: username
      };
    }
  },
  param: () => id,
  _sails: {}
};

const res = {
  ok: sinon.spy(),
  negotiate: sinon.spy()
};

describe('blueprints:update', () => {
  before(done => {
    req._sails = sails;
    done();
  });

  it('Should update user with id = 2', done => {
    update(req, res);

    let i = setInterval(() => {
      if (!res.negotiate.called && !res.ok.called) return;

      clearInterval(i);

      assert(!res.negotiate.called);
      assert(res.ok.called);
      assert(res.ok.getCall(0).args[0].username === username);

      res.ok.restore();
      res.negotiate.restore();

      done();
    }, 20);
  });

  it('Should return negotiate', done => {
    id = 398843;
    username = 'testFindUpdated2';

    update(req, res);

    let i = setInterval(() => {
      if (!res.negotiate.called && !res.ok.called) return;

      clearInterval(i);

      assert(!res.ok.called);
      assert(res.negotiate.called);

      res.ok.restore();
      res.negotiate.restore();

      done();
    }, 20);
  });
});
