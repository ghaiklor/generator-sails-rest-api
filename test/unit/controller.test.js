import path from 'path';
import os from 'os';
import { assert, test } from 'yeoman-generator';

describe('sails-rest-api:controller', () => {
  describe('Should properly scaffold controllers without arguments and options', () => {
    before(done => test.run(path.join(__dirname, '../../src/controller')).on('end', done));

    it('Should properly create api files', () => {
      assert.file([
        'api/controllers/PingController.js',
        'api/controllers/SearchController.js'
      ]);

      assert.noFile([
        'api/controllers/TestController.js'
      ]);

      assert.fileContent('api/controllers/PingController.js', /message: 'HTTP server is working'/);
    });

    it('Should properly create test files', () => {
      assert.file([
        'test/unit/controllers/PingController.test.js',
        'test/unit/controllers/SearchController.test.js'
      ]);

      assert.noFile([
        'test/unit/controllers/TestController.test.js'
      ]);
    });
  });

  describe('Should properly scaffold predefined controller', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../src/controller'))
        .withArguments(['ping'])
        .on('end', done)
    });

    it('Should properly create api files', () => {
      assert.file([
        'api/controllers/PingController.js'
      ]);

      assert.noFile([
        'api/controllers/SearchController.js'
      ]);

      assert.fileContent('api/controllers/PingController.js', /message: 'HTTP server is working'/);
      assert.noFileContent('api/controllers/PingController.js', /res.ok\(\)/);
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

  describe('Should properly scaffold overridden predefined controller', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../src/controller'))
        .withArguments(['ping'])
        .withOptions({
          'new': true
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

      assert.fileContent('api/controllers/PingController.js', /res.ok\(\)/);
      assert.noFileContent('api/controllers/PingController.js', /message: 'HTTP server is working'/);
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

  describe('Should properly scaffold custom controller', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../src/controller'))
        .withArguments(['TicketController'])
        .on('end', done)
    });

    it('Should properly create api files', () => {
      assert.file([
        'api/controllers/TicketController.js'
      ]);

      assert.noFile([
        'api/controllers/PingController.js',
        'api/controllers/SearchController.js'
      ]);

      assert.fileContent('api/controllers/TicketController.js', /export function index\(req, res\)/);
      assert.fileContent('api/controllers/TicketController.js', /res.ok\(\)/);
    });

    it('Should properly create test files', () => {
      assert.file([
        'test/unit/controllers/TicketController.test.js'
      ]);

      assert.noFile([
        'test/unit/controllers/PingController.test.js',
        'test/unit/controllers/SearchController.test.js'
      ]);
    });
  });

  describe('Should properly scaffold all predefined controllers at once', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../src/controller'))
        .withOptions({
          'all': true
        })
        .on('end', done)
    });

    it('Should properly create api files', () => {
      assert.file([
        'api/controllers/PingController.js',
        'api/controllers/SearchController.js'
      ]);

      assert.noFile([
        'api/controllers/TicketController.js'
      ]);

      assert.fileContent('api/controllers/PingController.js', /message: 'HTTP server is working'/);
      assert.noFileContent('api/controllers/PingController.js', /res.ok\(\)/);
    });

    it('Should properly create test files', () => {
      assert.file([
        'test/unit/controllers/PingController.test.js',
        'test/unit/controllers/SearchController.test.js'
      ]);

      assert.noFile([
        'test/unit/controllers/TicketController.test.js'
      ]);
    });
  });
});
