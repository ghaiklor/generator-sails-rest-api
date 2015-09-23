import path from 'path';
import os from 'os';
import { assert, test } from 'yeoman-generator';

describe('sails-rest-api:models', function () {
  describe('Should properly handle copying templates', () => {
    this.timeout(10000);

    before(done => {
      test
        .run(path.join(__dirname, '../../generators/models'))
        .inDir(path.join(os.tmpdir(), './temp-test'))
        .on('end', done);
    });

    it('Should properly create api files', () => {
      assert.file([
        'api/models/User.js'
      ]);
    });

    it('Should properly create fixtures files', () => {
      assert.file([
        'test/fixtures/FaultyUsers.json',
        'test/fixtures/Users.json'
      ]);
    });

    it('Should properly create test files', () => {
      assert.file([
        'test/unit/models/User.test.js'
      ]);
    });
  });
});
