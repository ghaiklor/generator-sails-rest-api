import path from 'path';
import os from 'os';
import { assert, test } from 'yeoman-generator';

describe('sails-rest-api:models', function () {
  describe('Should properly handle copying templates', () => {
    this.timeout(10000);

    before(done => {
      test
        .run(path.join(__dirname, '../../src/models'))
        .on('end', done);
    });

    it('Should properly create api files', () => {
      assert.file([
        'api/models/.gitkeep'
      ]);
    });

    it('Should properly create fixtures files', () => {
      assert.file([
        'test/fixtures/.gitkeep'
      ]);
    });

    it('Should properly create test files', () => {
      assert.file([
        'test/unit/models/.gitkeep'
      ]);
    });
  });
});
