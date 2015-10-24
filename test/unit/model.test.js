import path from 'path';
import os from 'os';
import { assert, test } from 'yeoman-generator';

describe('sails-rest-api:model', () => {
  describe('Should properly scaffold model with REST interface', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../src/model'))
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

      assert.fileContent('api/controllers/TestController.js', /export default \{\}/);
      assert.fileContent('api/models/Test.js', /beforeUpdate:/);
    });

    it('Should properly create test files', () => {
      assert.file([
        'test/unit/controllers/TestController.test.js',
        'test/unit/models/Test.test.js'
      ]);

      assert.fileContent('test/unit/controllers/TestController.test.js', /import Controller from '\.\.\/\.\.\/\.\.\/api\/controllers\/TestController'/);
      assert.fileContent('test/unit/models/Test.test.js', /import Model from '\.\.\/\.\.\/\.\.\/api\/models\/Test'/);
    });

    it('Should properly create fixtures files', () => {
      assert.file([
        'test/fixtures/TestFixture.js'
      ]);

      assert.fileContent('test/fixtures/TestFixture.js', /export default \{\}/);
    });
  });

  describe('Should properly scaffold model without REST interface', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../src/model'))
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

      assert.fileContent('test/unit/models/Another.test.js', /import Model from '\.\.\/\.\.\/\.\.\/api\/models\/Another'/);
    });

    it('Should properly create fixtures files', () => {
      assert.file([
        'test/fixtures/AnotherFixture.js'
      ]);

      assert.fileContent('test/fixtures/AnotherFixture.js', /export default \{\}/);
    });
  });
});
