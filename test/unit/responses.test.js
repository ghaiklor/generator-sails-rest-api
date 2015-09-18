import path from 'path';
import os from 'os';
import { assert, test } from 'yeoman-generator';

describe('sails-rest-api:responses', function () {
  this.timeout(10000);

  before(done => {
    test
      .run(path.join(__dirname, '../../generators/responses'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .on('end', done);
  });

  it('Should properly create root files', () => {
    assert.file([
      'api/responses/badRequest.js',
      'api/responses/created.js',
      'api/responses/forbidden.js',
      'api/responses/negotiate.js',
      'api/responses/notFound.js',
      'api/responses/ok.js',
      'api/responses/serverError.js',
      'api/responses/unauthorized.js',
      'test/unit/responses/badRequest.js',
      'test/unit/responses/created.js',
      'test/unit/responses/forbidden.js',
      'test/unit/responses/negotiate.js',
      'test/unit/responses/notFound.js',
      'test/unit/responses/ok.js',
      'test/unit/responses/serverError.js',
      'test/unit/responses/unauthorized.js'
    ]);
  });
});
