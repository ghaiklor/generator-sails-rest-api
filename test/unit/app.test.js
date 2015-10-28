import path from 'path';
import os from 'os';
import { assert, test } from 'yeoman-generator';

describe('sails-rest-api:app', () => {
  describe('Should properly scaffold with default configuration', () => {
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
        'app.js',
        'Dockerfile',
        '.editorconfig',
        'esdoc.json',
        '.gitignore',
        'package.json',
        'README.md',
        '.sailsrc'
      ]);
    });

    it('Should properly create mocha.opts and bootstrap', () => {
      assert.file([
        'test/bootstrap.js',
        'test/mocha.opts'
      ]);
    });
  });

  describe('Should properly scaffold with custom configuration', () => {
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
        .withOptions({
          'skip-update': true
        })
        .withPrompts({
          'authentication:enabled': false,
          'blueprint:all': false,
          'cron:enabled': false,
          'swagger:enabled': false
        })
        .on('end', done);
    });

    it('Should properly create root files', () => {
      assert.file([
        'app.js',
        'Dockerfile',
        '.editorconfig',
        'esdoc.json',
        '.gitignore',
        'package.json',
        'README.md',
        '.sailsrc'
      ]);
    });

    it('Should properly create mocha.opts and bootstrap', () => {
      assert.file([
        'test/bootstrap.js',
        'test/mocha.opts'
      ]);
    });
  });
});
