"use strict";

const path = require('path');
const assert = require('yeoman-assert');
const test = require('yeoman-test');

describe('sails-rest-api:logger', () => {
  describe('Should properly scaffold default configuration', () => {
    before(() => test.run(path.join(__dirname, '../../generators/logger')));

    it('Should properly create configuration files', () => {
      assert.file([
        'config/log.js'
      ]);

      assert.fileContent('config/log.js', /timestamp: true/);
    });
  });

  describe('Should properly scaffold bunyan configuration', () => {
    before(() => {
      return test
        .run(path.join(__dirname, '../../generators/logger'))
        .withArguments(['bunyan'])
    });

    it('Should properly create configuration files', () => {
      assert.file([
        'config/log.js'
      ]);

      assert.fileContent('config/log.js', /bunyan:/);
    });
  });

  describe('Should properly scaffold Sails default configuration', () => {
    before(() => {
      return test
        .run(path.join(__dirname, '../../generators/logger'))
        .withArguments(['default'])
    });

    it('Should properly create configuration files', () => {
      assert.file([
        'config/log.js'
      ]);

      assert.fileContent('config/log.js', /level: 'verbose'/);
    });
  });

  describe('Should properly scaffold winston configuration', () => {
    before(() => {
      return test
        .run(path.join(__dirname, '../../generators/logger'))
        .withArguments(['winston'])
    });

    it('Should properly create configuration files', () => {
      assert.file([
        'config/log.js'
      ]);

      assert.fileContent('config/log.js', /timestamp: true/);
    });
  });
});
