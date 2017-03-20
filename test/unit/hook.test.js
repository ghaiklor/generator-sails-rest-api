"use strict";

const path = require('path');
const assert = require('yeoman-assert');
const test = require('yeoman-test');

describe('sails-rest-api:hook', () => {
  describe('Should properly scaffold without arguments and options', () => {
    before(() => test.run(path.join(__dirname, '../../generators/hook')));

    it('Should properly create api files', () => {
      assert.file([
        'api/hooks/CountHook.js',
        'api/hooks/PluralizeHook.js'
      ]);

      assert.noFile([
        'api/hooks/TestHook.js'
      ]);

      assert.fileContent('api/hooks/CountHook.js', /sails.on\('router:before'/);
      assert.fileContent('api/hooks/PluralizeHook.js', /sails.on\('router:before'/);
    });

    it('Should properly create test files', () => {
      assert.file([
        'test/unit/hooks/CountHook.test.js',
        'test/unit/hooks/PluralizeHook.test.js'
      ]);

      assert.noFile([
        'test/unit/hooks/TestHook.test.js'
      ]);
    });
  });

  describe('Should properly scaffold predefined hook', () => {
    before(() => {
      return test
        .run(path.join(__dirname, '../../generators/hook'))
        .withArguments(['pluralize'])
    });

    it('Should properly create api files', () => {
      assert.file([
        'api/hooks/PluralizeHook.js'
      ]);

      assert.noFile([
        'api/hooks/CountHook.js'
      ]);

      assert.fileContent('api/hooks/PluralizeHook.js', /sails.on\('router:before'/);
    });

    it('Should properly create test files', () => {
      assert.file([
        'test/unit/hooks/PluralizeHook.test.js'
      ]);

      assert.noFile([
        'test/unit/hooks/CountHook.test.js'
      ]);
    });
  });

  describe('Should properly scaffold overridden predefined hook', () => {
    before(() => {
      return test
        .run(path.join(__dirname, '../../generators/hook'))
        .withArguments(['pluralize'])
        .withOptions({
          'new': true
        })
    });

    it('Should properly create api files', () => {
      assert.file([
        'api/hooks/PluralizeHook.js'
      ]);

      assert.noFile([
        'api/hooks/CountHook.js'
      ]);

      assert.fileContent('api/hooks/PluralizeHook.js', /initialize: cb => cb\(\)/);
      assert.noFileContent('api/hooks/PluralizeHook.js', /sails.on\('router:before'/);
    });

    it('Should properly create test files', () => {
      assert.file([
        'test/unit/hooks/PluralizeHook.test.js'
      ]);

      assert.noFile([
        'test/unit/hooks/CountHook.test.js'
      ]);
    });
  });

  describe('Should properly scaffold all predefined hooks at once', () => {
    before(() => {
      return test
        .run(path.join(__dirname, '../../generators/hook'))
        .withOptions({
          'all': true
        })
    });

    it('Should properly create api files', () => {
      assert.file([
        'api/hooks/CountHook.js',
        'api/hooks/PluralizeHook.js'
      ]);

      assert.noFile([
        'api/hooks/TestHook.js'
      ]);

      assert.fileContent('api/hooks/CountHook.js', /sails.on\('router:before'/);
      assert.fileContent('api/hooks/PluralizeHook.js', /sails.on\('router:before'/);
    });

    it('Should properly create test files', () => {
      assert.file([
        'test/unit/hooks/CountHook.test.js',
        'test/unit/hooks/PluralizeHook.test.js'
      ]);

      assert.noFile([
        'test/unit/hooks/TestHook.test.js'
      ]);
    });
  });

  describe('Should properly scaffold custom hook', () => {
    before(() => {
      return test
        .run(path.join(__dirname, '../../generators/hook'))
        .withArguments(['test'])
    });

    it('Should properly create api files', () => {
      assert.file([
        'api/hooks/TestHook.js'
      ]);

      assert.noFile([
        'api/hooks/CountHook.js',
        'api/hooks/PluralizeHook.js'
      ]);

      assert.fileContent('api/hooks/TestHook.js', /initialize: cb => cb\(\)/);
    });

    it('Should properly create test files', () => {
      assert.file([
        'test/unit/hooks/TestHook.test.js'
      ]);

      assert.noFile([
        'test/unit/hooks/CountHook.test.js',
        'test/unit/hooks/PluralizeHook.test.js'
      ]);
    });
  });
});
