import { assert } from 'chai';
import sinon from 'sinon';
import destroy from '../../../api/blueprints/destroy';

const req = {
  options: {
    model: 'user',
    action: 'create',
    controller: 'user',
    id: 1
  },
  params: {
    all: () => user
  },
  _sails: {}
};

const res = {
  ok: sinon.spy(),
  negotiate: sinon.spy(),
  notFound: sinon.spy()
};

describe('blueprints:destroy', () => {
  before(done => {
    req._sails = sails;
    done();
  });

  it('Should destroy a user with id = 1', done => {
    destroy(req, res);

    let i = setInterval(() => {
      if (!res.notFound.called && !res.ok.called && !res.negotiate.called) return;

      clearInterval(i);

      assert(!res.notFound.called);
      assert(!res.negotiate.called);
      assert(res.ok.called);

      res.ok.restore();
      res.negotiate.restore();
      res.notFound.restore();

      done();
    }, 20);
  });

  it('Should be rejected with notFound error after trying to destroy a user with non existing id', done => {
    req.options.id = -1;

    destroy(req, res);

    let i = setInterval(() => {
      if (!res.notFound.called && !res.ok.called && !res.negotiate.called) return;

      clearInterval(i);

      assert(!res.negotiate.called);
      assert(!res.ok.called);
      assert(res.notFound.called);

      res.ok.restore();
      res.negotiate.restore();
      res.notFound.restore();

      done();
    }, 20);
  });
});
