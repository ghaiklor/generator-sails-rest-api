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

  describe('Should properly generate custom configuration', () => {
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
      ])
    });

    it('Should properly create test files', () => {
      assert.file([
        'test/unit/controllers/PingController.test.js'
      ]);

      assert.noFile([
        'test/unit/controllers/SearchController.test.js'
      ])
    });
  })
});
