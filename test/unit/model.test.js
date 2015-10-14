import path from 'path';
import os from 'os';
import { assert, test } from 'yeoman-generator';

describe('sails-rest-api:model', () => {
  describe('Should properly scaffold model with REST interface', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../src/model'))
        .withArguments(['test'])
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

    it('Should properly create fixtures files', () => {
      assert.file([
        'test/fixtures/Test.js'
      ]);

      assert.fileContent('test/fixtures/Test.js', /export default \{\}/);
    });

    it('Should properly create test files', () => {
      assert.file([
        'test/unit/controllers/TestController.test.js',
        'test/unit/models/Test.test.js'
      ]);

      assert.fileContent('test/unit/controllers/TestController.test.js', /import controller from '\.\.\/\.\.\/\.\.\/api\/controllers\/TestController'/);
      assert.fileContent('test/unit/models/Test.test.js', /import Model from '\.\.\/\.\.\/\.\.\/api\/models\/Test'/);
    });
  });
});
