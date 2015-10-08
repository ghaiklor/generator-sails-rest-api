import path from 'path';
import os from 'os';
import { assert, test } from 'yeoman-generator';

describe('sails-rest-api:authentication', () => {
  describe('Should properly handle default configuration', () => {
    before(done => test.run(path.join(__dirname, '../../src/authentication')).on('end', done));

    it('Should properly create api files', () => {
      assert.file([
        'api/controllers/AuthController.js',
        'api/controllers/UserController.js',
        'api/models/User.js',
        'api/policies/isAuthenticated.js'
      ]);
    });

    it('Should properly create configuration files', () => {
      assert.file([
        'config/passport.js'
      ]);
    });

    it('Should properly create test files', () => {
      assert.file([
        'test/fixtures/FaultyUsers.js',
        'test/fixtures/Users.js',
        'test/unit/controllers/AuthController.test.js',
        'test/unit/controllers/UserController.test.js',
        'test/unit/models/User.test.js',
        'test/unit/policies/isAuthenticated.test.js'
      ])
    })
  });
});
