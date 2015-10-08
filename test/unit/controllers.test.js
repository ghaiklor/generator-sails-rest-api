import path from 'path';
import os from 'os';
import { assert, test } from 'yeoman-generator';

describe('sails-rest-api:controllers', () => {
  describe('Should properly handle default configuration', () => {
    before(done => test.run(path.join(__dirname, '../../src/controllers')).on('end', done));

    it('Should properly create api files', () => {
      assert.file([
        'api/controllers/PingController.js',
        'api/controllers/SearchController.js'
      ]);
    });

    it('Should properly create test files', () => {
      assert.file([
        'test/unit/controllers/PingController.test.js',
        'test/unit/controllers/SearchController.test.js'
      ]);
    });
  });
});
