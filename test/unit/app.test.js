import path from 'path';
import os from 'os';
import { assert, test } from 'yeoman-generator';

describe('sails-rest-api:app', () => {
  before(done => {
    test
      .run(path.join(__dirname, '../../src/app'))
      .withGenerators([
        [test.createDummyGenerator(), 'sails-rest-api:adapters'],
        [test.createDummyGenerator(), 'sails-rest-api:authentication'],
        [test.createDummyGenerator(), 'sails-rest-api:blueprints'],
        [test.createDummyGenerator(), 'sails-rest-api:config'],
        [test.createDummyGenerator(), 'sails-rest-api:controller'],
        [test.createDummyGenerator(), 'sails-rest-api:cron'],
        [test.createDummyGenerator(), 'sails-rest-api:hooks'],
        [test.createDummyGenerator(), 'sails-rest-api:logger'],
        [test.createDummyGenerator(), 'sails-rest-api:models'],
        [test.createDummyGenerator(), 'sails-rest-api:policies'],
        [test.createDummyGenerator(), 'sails-rest-api:responses'],
        [test.createDummyGenerator(), 'sails-rest-api:services']
      ])
      .on('end', done);
  });

  it('Should properly create root files', () => {
    assert.file([
      'test/bootstrap.js',
      'test/mocha.opts',
      '.editorconfig',
      '.gitignore',
      '.sailsrc',
      'app.js',
      'Dockerfile',
      'package.json'
    ]);
  });
});
