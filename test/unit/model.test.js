"use strict";

const path = require('path');
const assert = require('yeoman-assert');
const test = require('yeoman-test');

describe('sails-rest-api:model', () => {
  describe('Should properly scaffold model with REST interface', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../generators/model'))
        .withArguments(['test'])
        .withOptions({
          'rest': true
        })
        .on('end', done)
    });

    it('Should properly create api files', () => {
      assert.file([
        'api/controllers/TestController.js',
        'api/models/Test.js'
      ]);

      assert.fileContent('api/controllers/TestController.js', /module.exports = \{\}/);
      assert.fileContent('api/models/Test.js', /beforeUpdate:/);
    });

    it('Should properly create test files', () => {
      assert.file([
        'test/unit/controllers/TestController.test.js',
        'test/unit/models/Test.test.js'
      ]);

      assert.fileContent('test/unit/controllers/TestController.test.js', /const Controller = require\('\.\.\/\.\.\/\.\.\/api\/controllers\/TestController'\)/);
      assert.fileContent('test/unit/models/Test.test.js', /const Model = require\('\.\.\/\.\.\/\.\.\/api\/models\/Test'\)/);
    });

    it('Should properly create fixtures files', () => {
      assert.file([
        'test/fixtures/TestFixture.js'
      ]);

      assert.fileContent('test/fixtures/TestFixture.js', /module.exports = \{\}/);
    });
  });

  describe('Should properly scaffold model without REST interface', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../generators/model'))
        .withArguments(['anotherModel'])
        .withOptions({
          'rest': false
        })
        .on('end', done)
    });

    it('Should properly create api files', () => {
      assert.file([
        'api/models/Another.js'
      ]);

      assert.noFile([
        'api/controllers/AnotherController.js'
      ]);

      assert.fileContent('api/models/Another.js', /beforeUpdate:/);
    });

    it('Should properly create test files', () => {
      assert.file([
        'test/unit/models/Another.test.js'
      ]);

      assert.noFile([
        'test/unit/controllers/AnotherController.test.js'
      ]);

      assert.fileContent('test/unit/models/Another.test.js', /const Model = require\('\.\.\/\.\.\/\.\.\/api\/models\/Another'\)/);
    });

    it('Should properly create fixtures files', () => {
      assert.file([
        'test/fixtures/AnotherFixture.js'
      ]);

      assert.fileContent('test/fixtures/AnotherFixture.js', /module.exports = \{\}/);
    });
  });
});
