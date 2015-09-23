import path from 'path';
import os from 'os';
import { assert, test } from 'yeoman-generator';

describe('sails-rest-api:responses', function () {
  describe('Should properly handle copying templates', () => {
    this.timeout(10000);

    before(done => {
      test
        .run(path.join(__dirname, '../../generators/responses'))
        .inDir(path.join(os.tmpdir(), './temp-test'))
        .on('end', done);
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
    });
  });
});
