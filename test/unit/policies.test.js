import path from 'path';
import os from 'os';
import { assert, test } from 'yeoman-generator';

describe('sails-rest-api:policies', function () {
  describe('Should properly handle copying templates', () => {
    this.timeout(10000);

    before(done => {
      test
        .run(path.join(__dirname, '../../src/policies'))
        .inDir(path.join(os.tmpdir(), './temp-test'))
        .withOptions({
          'skip-install': true
        })
        .on('end', done);
    });

    it('Should properly create api files', () => {
      assert.file([
        'api/policies/.gitkeep'
      ]);
    });

    it('Should properly create test files', () => {
      assert.file([
        'test/unit/policies/.gitkeep'
      ]);
    });
  });
});
