import path from 'path';
import os from 'os';
import { assert, test } from 'yeoman-generator';

describe('sails-rest-api:policies', function () {
  describe('Should properly handle copying templates', () => {
    this.timeout(10000);

    before(done => {
      test
        .run(path.join(__dirname, '../../generators/policies'))
        .inDir(path.join(os.tmpdir(), './temp-test'))
        .on('end', done);
    });

    it('Should properly create api files', () => {
      assert.file([
        'api/policies/isAuthenticated.js'
      ]);
    });

    it('Should properly create test files', () => {
      assert.file([
        'test/unit/policies/isAuthenticated.test.js'
      ]);
    });
  });
});
