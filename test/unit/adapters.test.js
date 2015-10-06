import path from 'path';
import os from 'os';
import { assert, test } from 'yeoman-generator';

describe('sails-rest-api:adapters', () => {
  describe('Should properly handle default configuration', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../src/adapters'))
        .inDir(path.join(os.tmpdir(), './temp-test'))
        .on('end', done);
    });

    it('Should properly create api files', () => {
      assert.file([
        'api/adapters/.gitkeep'
      ]);
    });

    it('Should properly create test files', () => {
      assert.file([
        'test/unit/adapters/.gitkeep'
      ]);
    });
  });
});
