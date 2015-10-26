import path from 'path';
import os from 'os';
import { assert, test } from 'yeoman-generator';

describe('sails-rest-api:logger', () => {
  describe('Should properly scaffold default configuration', () => {
    before(done => test.run(path.join(__dirname, '../../src/logger')).on('end', done));

    it('Should properly create configuration files', () => {
      assert.file([
        'config/log.js'
      ]);

      assert.fileContent('config/log.js', /timestamp: true/);
    });
  });

  describe('Should properly scaffold bunyan configuration', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../src/logger'))
        .withArguments(['bunyan'])
        .on('end', done)
    });

    it('Should properly create configuration files', () => {
      assert.file([
        'config/log.js'
      ]);

      assert.fileContent('config/log.js', /bunyan:/);
    });
  });

  describe('Should properly scaffold Sails default configuration', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../src/logger'))
        .withArguments(['default'])
        .on('end', done)
    });

    it('Should properly create configuration files', () => {
      assert.file([
        'config/log.js'
      ]);

      assert.fileContent('config/log.js', /level: 'verbose'/);
    });
  });

  describe('Should properly scaffold winston configuration', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../src/logger'))
        .withArguments(['winston'])
        .on('end', done)
    });

    it('Should properly create configuration files', () => {
      assert.file([
        'config/log.js'
      ]);

      assert.fileContent('config/log.js', /timestamp: true/);
    });
  });
});
