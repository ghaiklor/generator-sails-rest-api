import { assert } from 'chai';
import _ from 'lodash';
import pluralizeModels from '../../../api/hooks/pluralize-models';

let sailsLoc = {
  middleware: {
    controllers: {
      test1: {}, test2: {}, test3: {}
    }
  },
  models: {
    test1: {}
  }
};

describe('hooks:pluralize-only-rest-models', function () {
  before(function (done) {
    _.set(sailsLoc, 'config.blueprints.pluralize', true);
    done();
  });

  it('should properly exports', function (done) {
    assert.ok(typeof pluralizeOnlyModels === 'function');
    done();
  });

  it('should pluralize only REST models', function (done) {
    sailsLoc.on = function (event, func) {
      func();

      let controllers = sailsLoc.middleware.controllers;
      assert.ok(!_.get(controllers.test1, '_config.pluralize', false));
      assert.ok(!controllers.test2._config.pluralize);
      assert.ok(!controllers.test3._config.pluralize);

      done();
    };
    pluralizeOnlyModels(sailsLoc).initialize(function () {
    });
  });
});
