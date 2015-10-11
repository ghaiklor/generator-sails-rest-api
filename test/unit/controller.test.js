import path from 'path';
import os from 'os';
import { assert, test } from 'yeoman-generator';

describe('sails-rest-api:controller', () => {
  describe('Should properly generate predefined controller without custom actions', () => {
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
      assert.noFileContent('api/controllers/PingController.js', /export function test\(req, res\)/);
    });

    it('Should properly create test files', () => {
      assert.file([
        'test/unit/controllers/PingController.test.js'
      ]);

      assert.noFile([
        'test/unit/controllers/SearchController.test.js'
      ])
    });
  });

  describe('Should properly generate predefined controller with custom actions', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../src/controller'))
        .withArguments(['ping', 'another,test'])
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
      assert.fileContent('api/controllers/PingController.js', /export function another\(req, res\)/);
      assert.fileContent('api/controllers/PingController.js', /export function test\(req, res\)/);
    });

    it('Should properly create test files', () => {
      assert.file([
        'test/unit/controllers/PingController.test.js'
      ]);

      assert.noFile([
        'test/unit/controllers/SearchController.test.js'
      ])
    });
  });

  describe('Should properly generate custom controller without custom actions', () => {
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
      assert.noFileContent('api/controllers/TicketController.js', /export function another\(req, res\)/);
      assert.noFileContent('api/controllers/TicketController.js', /export function test\(req, res\)/);
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

  describe('Should properly generate custom controller with custom actions', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../src/controller'))
        .withArguments(['ticket', 'another,test'])
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

      assert.fileContent('api/controllers/TicketController.js', /export function another\(req, res\)/);
      assert.fileContent('api/controllers/TicketController.js', /export function test\(req, res\)/);
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
});
