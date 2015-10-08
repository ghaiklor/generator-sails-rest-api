import path from 'path';
import os from 'os';
import { assert, test } from 'yeoman-generator';

describe('sails-rest-api:policies', () => {
  describe('Should properly handle copying templates', () => {
    before(done => test.run(path.join(__dirname, '../../src/policies')).on('end', done));

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
