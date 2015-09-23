import path from 'path';
import os from 'os';
import { assert, test } from 'yeoman-generator';

describe('sails-rest-api:config', function () {
  describe('Should properly handle default configuration', () => {
    this.timeout(10000);

    before(done => {
      test
        .run(path.join(__dirname, '../../generators/config'))
        .inDir(path.join(os.tmpdir(), './temp-test'))
        .on('end', done);
    });

    it('Should properly create environment configuration files', () => {
      assert.file([
        'config/env/development.js',
        'config/env/production.js',
        'config/env/test.js'
      ]);
    });

    it('Should properly create configuration files', () => {
      assert.file([
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

      assert.fileContent('config/passport.js', /secretOrKey: "[a-z0-9]{64}"/);
      assert.fileContent('config/models.js', /connection: "mongo"/);
      assert.fileContent('config/connections.js', /host: "localhost"/g);
      assert.fileContent('config/connections.js', /database: "sails-rest-api"/g);
      assert.fileContent('config/connections.js', /user: ""/g);
      assert.fileContent('config/connections.js', /password: ""/g);
      assert.fileContent('config/connections.js', /accessKeyId: ""/g);
      assert.fileContent('config/connections.js', /secretAccessKey: ""/g);
      assert.fileContent('config/connections.js', /region: "us-west-1"/g);
    });
  });
});
