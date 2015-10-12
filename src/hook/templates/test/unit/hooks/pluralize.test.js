import { assert } from 'chai';
import _ from 'lodash';
import hook from '../../../api/hooks/pluralize';

const sailsLoc = {
  middleware: {
    controllers: {
      test1: {}, test2: {}, test3: {}
    }
  },
  models: {
    test1: {}
  }
};

describe('hooks:pluralize', () => {
  before(done => {
    _.set(sailsLoc, 'config.blueprints.pluralize', true);
    done();
  });

  it('Should properly exports', done => {
    assert.isFunction(hook);
    done();
  });

  it('Should pluralize only REST models', done => {
    sailsLoc.on = (event, func) => {
      func();

      let controllers = sailsLoc.middleware.controllers;
      assert.ok(!_.get(controllers.test1, '_config.pluralize', false));
      assert.ok(!controllers.test2._config.pluralize);
      assert.ok(!controllers.test3._config.pluralize);

      done();
    };

    hook(sailsLoc).initialize(() => {
    });
  });
});
