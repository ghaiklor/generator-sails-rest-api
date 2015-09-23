import path from 'path';
import os from 'os';
import { assert, test } from 'yeoman-generator';

describe('sails-rest-api:hooks', function () {
  describe('Should properly handle copying templates', () => {
    this.timeout(10000);

    before(done => {
      test
        .run(path.join(__dirname, '../../generators/hooks'))
        .inDir(path.join(os.tmpdir(), './temp-test'))
        .on('end', done);
    });

    it('Should properly create api files', () => {
      assert.file([
        'api/hooks/pluralize-models.js'
      ]);
    });

    it('Should properly create test files', () => {
      assert.file([
        'test/unit/hooks/pluralize-models.test.js'
      ]);
    });
  });
});
