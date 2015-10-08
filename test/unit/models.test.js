import path from 'path';
import os from 'os';
import { assert, test } from 'yeoman-generator';

describe('sails-rest-api:models', () => {
  describe('Should properly handle default configuration', () => {
    before(done => test.run(path.join(__dirname, '../../src/models')).on('end', done));

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
