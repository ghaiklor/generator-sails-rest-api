import path from 'path';
import os from 'os';
import { assert, test } from 'yeoman-generator';

describe('sails-rest-api:hook', () => {
  describe('Should properly scaffold without arguments and options', () => {
    before(done => test.run(path.join(__dirname, '../../src/hook')).on('end', done));

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
  });

  describe('Should properly scaffold predefined hook', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../src/hook'))
        .withArguments(['pluralize'])
        .on('end', done)
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
  });

  describe('Should properly scaffold overridden predefined hook', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../src/hook'))
        .withArguments(['pluralize'])
        .withOptions({
          'new': true
        })
        .on('end', done)
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
  });

  describe('Should properly scaffold all predefined hooks at once', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../src/hook'))
        .withOptions({
          'all': true
        })
        .on('end', done)
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
  });

  describe('Should properly scaffold custom hook', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../src/hook'))
        .withArguments(['test'])
        .on('end', done)
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
  });
});
