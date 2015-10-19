import { assert } from 'chai';
import sinon from 'sinon';
import _ from 'lodash';
import Hook from '../../../api/hooks/CountHook';

const sailsLoc = {
  middleware: {
    controllers: {
      test1: {}, test2: {}, test3: {}
    }
  },
  models: {
    test1: {
      identity: 'test1'
    },
    test4: {}
  },
  config: {
    blueprints: {
      pluralize: false,
      prefix: '/v1'
    }
  },
  router: {
    bind: sinon.spy()
  }
};

describe('hooks:countBlueprint', () => {
  beforeEach(done => {
    sailsLoc.router.bind.reset();
    _.set(sailsLoc, 'config.blueprints.pluralize', false);
    done();
  });

  it('Should properly exports', done => {
    assert.isFunction(hook);
    done();
  });

  it('Should add :model/count route only for RESTful models', done => {
    var route = '/v1/test1/count';

    sailsLoc.on = (event, func) => {
      func();

      assert.ok(sailsLoc.router.bind.calledOnce);
      assert.ok(sailsLoc.router.bind.calledWith(route));

      done();
    };

    hook(sailsLoc).initialize(() => {
    });
  });

  it('Should add :model/count route only for RESTful models (pluralize enabled)', done => {
    var route = '/v1/test1s/count';
    _.set(sailsLoc, 'config.blueprints.pluralize', true);

    sailsLoc.on = (event, func) => {
      func();

      assert.ok(sailsLoc.router.bind.calledOnce);
      assert.ok(sailsLoc.router.bind.calledWith(route));

      done();
    };

    hook(sailsLoc).initialize(() => {
    });
  });
});
