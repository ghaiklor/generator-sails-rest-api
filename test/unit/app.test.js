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
        [test.createDummyGenerator(), 'sails-rest-api:blueprint'],
        [test.createDummyGenerator(), 'sails-rest-api:config'],
        [test.createDummyGenerator(), 'sails-rest-api:controller'],
        [test.createDummyGenerator(), 'sails-rest-api:cron'],
        [test.createDummyGenerator(), 'sails-rest-api:hook'],
        [test.createDummyGenerator(), 'sails-rest-api:logger'],
        [test.createDummyGenerator(), 'sails-rest-api:model'],
        [test.createDummyGenerator(), 'sails-rest-api:policy'],
        [test.createDummyGenerator(), 'sails-rest-api:response'],
        [test.createDummyGenerator(), 'sails-rest-api:service'],
        [test.createDummyGenerator(), 'sails-rest-api:swagger']
      ])
      .on('end', done);
  });

  it('Should properly create root files', () => {
    assert.file([
      '.editorconfig',
      '.gitignore',
      '.sailsrc',
      'app.js',
      'Dockerfile',
      'package.json'
    ]);
  });

  it('Should properly create mocha.opts and bootstrap', () => {
    assert.file([
      'test/bootstrap.js',
      'test/mocha.opts'
    ])
  });
});
