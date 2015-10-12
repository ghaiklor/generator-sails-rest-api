import path from 'path';
import os from 'os';
import { assert, test } from 'yeoman-generator';

describe('sails-rest-api:model', () => {
  describe('Should properly generate model', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../src/model'))
        .withArguments(['test'])
        .on('end', done)
    });

    it('Should properly create api files', () => {
      assert.file([
        'api/models/Test.js'
      ]);
    });

    it('Should properly create fixtures files', () => {
      assert.file([
        'test/fixtures/Test.js'
      ]);
    });

    it('Should properly create test files', () => {
      assert.file([
        'test/unit/models/Test.test.js'
      ]);
    });
  });
});
