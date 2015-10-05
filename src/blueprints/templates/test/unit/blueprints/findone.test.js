import { assert } from 'chai';
import sinon from 'sinon';
import findOne from '../../../api/blueprints/findone';

const data = {id: 2};

const req = {
  options: {
    model: 'user',
    action: 'create',
    controller: 'user'
  },
  param: param => data[param],
  _sails: {}
};

const res = {
  ok: sinon.spy(),
  negotiate: sinon.spy(),
  notFound: sinon.spy()
};

describe('blueprints:findOne', () => {
  before(done => {
    req._sails = sails;
    done();
  });

  it('Should find one user (username = \'testFind\')', done => {
    findOne(req, res);

    let i = setInterval(() => {
      if (!res.negotiate.called && !res.ok.called && !res.notFound.called) return;

      clearInterval(i);

      assert(!res.negotiate.called);
      assert(!res.notFound.called);
      assert(res.ok.called);
      assert(res.ok.getCall(0).args[0].username === 'testFind');

      res.ok.restore();
      res.negotiate.restore();
      res.notFound.restore();

      done();
    }, 20);
  });

  it('Should return notFound', done => {
    data.id = 123493;

    findOne(req, res);

    let i = setInterval(() => {
      if (!res.negotiate.called && !res.ok.called && !res.notFound.called) return;

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
