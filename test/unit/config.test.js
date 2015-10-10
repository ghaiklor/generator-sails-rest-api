import path from 'path';
import os from 'os';
import { assert, test } from 'yeoman-generator';

describe('sails-rest-api:config', () => {
  describe('Should properly handle default configuration', () => {
    before(done => test.run(path.join(__dirname, '../../src/config')).on('end', done));

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
        'config/errors.js',
        'config/globals.js',
        'config/hooks.js',
        'config/http.js',
        'config/models.js',
        'config/routes.js'
      ]);

      assert.fileContent('config/connections.js', /host: 'localhost'/g);
      assert.fileContent('config/connections.js', /database: 'sails-rest-api'/g);
      assert.fileContent('config/connections.js', /user: ''/g);
      assert.fileContent('config/connections.js', /password: ''/g);
      assert.fileContent('config/connections.js', /accessKeyId: ''/g);
      assert.fileContent('config/connections.js', /secretAccessKey: ''/g);
      assert.fileContent('config/connections.js', /region: 'us-west-1'/g);
      assert.fileContent('config/cors.js', /allRoutes: false/g);
      assert.fileContent('config/models.js', /connection: 'mongo'/);
    });
  });

  describe('Should properly handle custom configuration', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../src/config'))
        .withOptions({
          'database-adapter': 'mysql',
          'database-host': '123.456.789.000',
          'database-name': 'db_name',
          'database-username': 'db_user',
          'database-password': 'db_pass',
          'dynamo-access-key-id': 'access_key_id',
          'dynamo-secret-access-key': 'secret_access_key',
          'dynamo-region': 'amazon_region',
          'enable-cors': true
        })
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
        'config/errors.js',
        'config/globals.js',
        'config/hooks.js',
        'config/http.js',
        'config/models.js',
        'config/routes.js'
      ]);

      assert.fileContent('config/connections.js', /host: '123\.456\.789\.000'/g);
      assert.fileContent('config/connections.js', /database: 'db_name'/g);
      assert.fileContent('config/connections.js', /user: 'db_user'/g);
      assert.fileContent('config/connections.js', /password: 'db_pass'/g);
      assert.fileContent('config/connections.js', /accessKeyId: 'access_key_id'/g);
      assert.fileContent('config/connections.js', /secretAccessKey: 'secret_access_key'/g);
      assert.fileContent('config/connections.js', /region: 'amazon_region'/g);
      assert.fileContent('config/cors.js', /allRoutes: true/g);
      assert.fileContent('config/models.js', /connection: 'mysql'/);
    });
  });
});
