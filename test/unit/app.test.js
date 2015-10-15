import path from 'path';
import os from 'os';
import { assert, test } from 'yeoman-generator';

describe('sails-rest-api:app', () => {
  before(done => {
    test
      .run(path.join(__dirname, '../../src/app'))
      .withGenerators([
        [test.createDummyGenerator(), 'sails-rest-api:adapter'],
        [test.createDummyGenerator(), 'sails-rest-api:authentication'],
        [test.createDummyGenerator(), 'sails-rest-api:blueprints'],
        [test.createDummyGenerator(), 'sails-rest-api:config'],
        [test.createDummyGenerator(), 'sails-rest-api:controller'],
        [test.createDummyGenerator(), 'sails-rest-api:cron'],
        [test.createDummyGenerator(), 'sails-rest-api:hook'],
        [test.createDummyGenerator(), 'sails-rest-api:logger'],
        [test.createDummyGenerator(), 'sails-rest-api:model'],
        [test.createDummyGenerator(), 'sails-rest-api:policy'],
        [test.createDummyGenerator(), 'sails-rest-api:response'],
        [test.createDummyGenerator(), 'sails-rest-api:service']
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
