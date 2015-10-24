import path from 'path';
import os from 'os';
import { assert, test } from 'yeoman-generator';

describe('sails-rest-api:response', () => {
  describe('Should properly scaffold predefined response', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../src/response'))
        .withArguments(['ok'])
        .on('end', done)
    });

    it('Should properly create api files', () => {
      assert.file([
        'api/responses/ok.js'
      ]);

      assert.noFile([
        'api/responses/badRequest.js',
        'api/responses/created.js',
        'api/responses/forbidden.js',
        'api/responses/negotiate.js',
        'api/responses/notFound.js',
        'api/responses/serverError.js',
        'api/responses/unauthorized.js'
      ]);

      assert.fileContent('api/responses/ok.js', /_\.get\(config, 'code', 'OK'\)/);
    });

    it('Should properly create test files', () => {
      assert.file([
        'test/unit/responses/ok.test.js'
      ]);

      assert.noFile([
        'test/unit/responses/badRequest.test.js',
        'test/unit/responses/created.test.js',
        'test/unit/responses/forbidden.test.js',
        'test/unit/responses/negotiate.test.js',
        'test/unit/responses/notFound.test.js',
        'test/unit/responses/serverError.test.js',
        'test/unit/responses/unauthorized.test.js'
      ]);

      assert.fileContent('test/unit/responses/ok.test.js', /import ok from '\.\.\/\.\.\/\.\.\/api\/responses\/ok';/);
    });
  });

  describe('Should properly scaffold overridden predefined response', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../src/response'))
        .withArguments(['ok'])
        .withOptions({
          'new': true
        })
        .on('end', done)
    });

    it('Should properly create api files', () => {
      assert.file([
        'api/responses/ok.js'
      ]);

      assert.noFile([
        'api/responses/badRequest.js',
        'api/responses/created.js',
        'api/responses/forbidden.js',
        'api/responses/negotiate.js',
        'api/responses/notFound.js',
        'api/responses/serverError.js',
        'api/responses/unauthorized.js'
      ]);

      assert.fileContent('api/responses/ok.js', /let response = \{data\};/);
      assert.noFileContent('api/responses/ok.js', /_\.get\(config, 'code', 'OK'\)/);
    });

    it('Should properly create test files', () => {
      assert.file([
        'test/unit/responses/ok.test.js'
      ]);

      assert.noFile([
        'test/unit/responses/badRequest.test.js',
        'test/unit/responses/created.test.js',
        'test/unit/responses/forbidden.test.js',
        'test/unit/responses/negotiate.test.js',
        'test/unit/responses/notFound.test.js',
        'test/unit/responses/serverError.test.js',
        'test/unit/responses/unauthorized.test.js'
      ]);

      assert.fileContent('test/unit/responses/ok.test.js', /import Response from '\.\.\/\.\.\/\.\.\/api\/responses\/ok';/);
    });
  });

  describe('Should properly scaffold all the predefined responses', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../src/response'))
        .withOptions({
          'all': true
        })
        .on('end', done)
    });

    it('Should properly create api files', () => {
      assert.file([
        'api/responses/badRequest.js',
        'api/responses/created.js',
        'api/responses/forbidden.js',
        'api/responses/negotiate.js',
        'api/responses/notFound.js',
        'api/responses/ok.js',
        'api/responses/serverError.js',
        'api/responses/unauthorized.js'
      ]);

      assert.fileContent('api/responses/ok.js', /_\.get\(config, 'code', 'OK'\)/);
    });

    it('Should properly create test files', () => {
      assert.file([
        'test/unit/responses/badRequest.test.js',
        'test/unit/responses/created.test.js',
        'test/unit/responses/forbidden.test.js',
        'test/unit/responses/negotiate.test.js',
        'test/unit/responses/notFound.test.js',
        'test/unit/responses/ok.test.js',
        'test/unit/responses/serverError.test.js',
        'test/unit/responses/unauthorized.test.js'
      ]);

      assert.fileContent('test/unit/responses/ok.test.js', /import ok from '\.\.\/\.\.\/\.\.\/api\/responses\/ok';/);
    });
  });

  describe('Should properly scaffold custom response', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../src/response'))
        .withArguments(['custom'])
        .on('end', done)
    });

    it('Should properly create api files', () => {
      assert.file([
        'api/responses/custom.js'
      ]);

      assert.noFile([
        'api/responses/badRequest.js',
        'api/responses/created.js',
        'api/responses/forbidden.js',
        'api/responses/negotiate.js',
        'api/responses/notFound.js',
        'api/responses/ok.js',
        'api/responses/serverError.js',
        'api/responses/unauthorized.js'
      ]);

      assert.fileContent('api/responses/custom.js', /let response = \{data\}/);
    });

    it('Should properly create test files', () => {
      assert.file([
        'test/unit/responses/custom.test.js'
      ]);

      assert.noFile([
        'test/unit/responses/badRequest.test.js',
        'test/unit/responses/created.test.js',
        'test/unit/responses/forbidden.test.js',
        'test/unit/responses/negotiate.test.js',
        'test/unit/responses/notFound.test.js',
        'test/unit/responses/ok.test.js',
        'test/unit/responses/serverError.test.js',
        'test/unit/responses/unauthorized.test.js'
      ]);

      assert.fileContent('test/unit/responses/custom.test.js', /import Response from '\.\.\/\.\.\/\.\.\/api\/responses\/custom';/);
    });
  });
});
