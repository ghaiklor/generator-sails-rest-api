import path from 'path';
import os from 'os';
import { assert, test } from 'yeoman-generator';

describe('sails-rest-api:controllers', () => {
  describe('Should properly handle default configuration', () => {
    before(done => test.run(path.join(__dirname, '../../src/controllers')).on('end', done));

    it('Should properly create api files', () => {
      assert.file([
        'api/controllers/PingController.js',
        'api/controllers/SearchController.js'
      ]);
    });

    it('Should properly create test files', () => {
      assert.file([
        'test/unit/controllers/PingController.test.js',
        'test/unit/controllers/SearchController.test.js'
      ]);
    });
  });

  describe('Should properly generate with custom configuration', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../src/controllers'))
        .withOptions({
          'controllers': 'PingController,Search'
        })
        .on('end', done)
    });

    it('Should properly create api files', () => {
      assert.file([
        'api/controllers/PingController.js',
        'api/controllers/SearchController.js'
      ]);
    });

    it('Should properly create test files', () => {
      assert.file([
        'test/unit/controllers/PingController.test.js',
        'test/unit/controllers/SearchController.test.js'
      ]);
    });
  });

  describe('Should properly generate only PingController', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../src/controllers'))
        .withOptions({
          'controllers': 'PingController'
        })
        .on('end', done)
    });

    it('Should properly create api files', () => {
      assert.file([
        'api/controllers/PingController.js'
      ]);

      assert.noFile([
        'api/controllers/SearchController.js'
      ]);
    });

    it('Should properly create test files', () => {
      assert.file([
        'test/unit/controllers/PingController.test.js'
      ]);

      assert.noFile([
        'test/unit/controllers/SearchController.test.js'
      ]);
    });
  });

  describe('Should properly generate custom controllers', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../src/controllers'))
        .withOptions({
          'controllers': 'PingController,SomeController,Test'
        })
        .on('end', done)
    });

    it('Should properly create api files', () => {
      assert.file([
        'api/controllers/PingController.js',
        'api/controllers/SomeController.js',
        'api/controllers/TestController.js'
      ]);

      assert.noFile([
        'api/controllers/SearchController.js'
      ]);

      assert.fileContent('api/controllers/SomeController.js', /export function index\(req, res\)/g);
      assert.fileContent('api/controllers/SomeController.js', /SomeController/g);
      assert.fileContent('api/controllers/TestController.js', /export function index\(req, res\)/g);
      assert.fileContent('api/controllers/TestController.js', /TestController/g);
    });

    it('Should properly create test files', () => {
      assert.file([
        'test/unit/controllers/PingController.test.js',
        'test/unit/controllers/SomeController.test.js',
        'test/unit/controllers/TestController.test.js'
      ]);

      assert.noFile([
        'test/unit/controllers/SearchController.test.js'
      ]);

      assert.fileContent('test/unit/controllers/SomeController.test.js', /assert\(false\)/g);
      assert.fileContent('test/unit/controllers/TestController.test.js', /assert\(false\)/g);
    });
  });
});
