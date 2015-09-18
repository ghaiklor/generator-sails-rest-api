import path from 'path';
import os from 'os';
import { assert, test } from 'yeoman-generator';

describe('sails-rest-api:controllers', function () {
  this.timeout(10000);

  before(done => {
    test
      .run(path.join(__dirname, '../../generators/controllers'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .on('end', done);
  });

  it('Should properly create root files', () => {
    assert.file([
      'api/controllers/AuthController.js',
      'api/controllers/PingController.js',
      'api/controllers/SearchController.js',
      'api/controllers/UserController.js',
      'test/unit/controllers/AuthController.js',
      'test/unit/controllers/PingController.js',
      'test/unit/controllers/SearchController.js',
      'test/unit/controllers/UserController.js'
    ]);
  });
});
