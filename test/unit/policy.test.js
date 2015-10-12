import path from 'path';
import os from 'os';
import { assert, test } from 'yeoman-generator';

describe('sails-rest-api:policy', () => {
  describe('Should properly scaffold policy', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../src/policy'))
        .withArguments(['isPolicy'])
        .on('end', done)
    });

    it('Should properly create api files', () => {
      assert.file([
        'api/policies/isPolicy.js'
      ]);
    });

    it('Should properly create test files', () => {
      assert.file([
        'test/unit/policies/isPolicy.test.js'
      ]);
    });
  });
});
