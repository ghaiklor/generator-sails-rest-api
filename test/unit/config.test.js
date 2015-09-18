import path from 'path';
import os from 'os';
import { assert, test } from 'yeoman-generator';

describe('sails-rest-api:config', function () {
  this.timeout(10000);

  before(done => {
    test
      .run(path.join(__dirname, '../../generators/config'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .on('end', done);
  });

  it('Should properly create root files', () => {
    assert.file([
      'config/env/development.js',
      'config/env/production.js',
      'config/env/test.js',
      'config/blueprints.js',
      'config/bootstrap.js',
      'config/connections.js',
      'config/cors.js',
      'config/cron.js',
      'config/errors.js',
      'config/globals.js',
      'config/http.js',
      'config/log.js',
      'config/models.js',
      'config/passport.js',
      'config/policies.js',
      'config/routes.js'
    ]);
  });
});
