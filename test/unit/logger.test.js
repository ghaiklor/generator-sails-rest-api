import path from 'path';
import os from 'os';
import { assert, test } from 'yeoman-generator';

describe('sails-rest-api:logger', () => {
  describe('Should properly scaffold bunyan configuration', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../src/logger'))
        .withOptions({
          'logger': 'bunyan'
        })
        .on('end', done)
    });

    it('Should properly create configuration files', () => {
      assert.file([
        'config/log.js'
      ]);

      assert.fileContent('config/log.js', /bunyan/);
    });
  });

  describe('Should properly scaffold default configuration', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../src/logger'))
        .withOptions({
          'logger': 'default'
        })
        .on('end', done)
    });

    it('Should properly create configuration files', () => {
      assert.file([
        'config/log.js'
      ]);

      assert.fileContent('config/log.js', /level: 'silly'/);
    });
  });

  describe('Should properly scaffold winston configuration', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../src/logger'))
        .withOptions({
          'logger': 'winston'
        })
        .on('end', done)
    });

    it('Should properly create configuration files', () => {
      assert.file([
        'config/log.js'
      ]);

      assert.fileContent('config/log.js', /dailyRotate:/);
    });
  });
});
