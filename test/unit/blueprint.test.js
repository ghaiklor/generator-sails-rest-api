import path from 'path';
import os from 'os';
import { assert, test } from 'yeoman-generator';

describe('sails-rest-api:blueprint', () => {
  describe('Should properly scaffold blueprints without arguments and options', () => {
    before(done => test.run(path.join(__dirname, '../../src/blueprint')).on('end', done));

    it('Should properly create api files', () => {
      assert.file([
        'api/blueprints/add.js',
        'api/blueprints/create.js',
        'api/blueprints/destroy.js',
        'api/blueprints/find.js',
        'api/blueprints/findone.js',
        'api/blueprints/populate.js',
        'api/blueprints/remove.js',
        'api/blueprints/update.js'
      ]);

      assert.noFile([
        'api/blueprints/custom.js'
      ]);
    });

    it('Should properly create test files', () => {
      assert.file([
        'test/unit/blueprints/add.test.js',
        'test/unit/blueprints/create.test.js',
        'test/unit/blueprints/destroy.test.js',
        'test/unit/blueprints/find.test.js',
        'test/unit/blueprints/findone.test.js',
        'test/unit/blueprints/populate.test.js',
        'test/unit/blueprints/remove.test.js',
        'test/unit/blueprints/update.test.js'
      ]);

      assert.noFile([
        'test/unit/blueprints/custom.test.js'
      ]);
    });
  });

  describe('Should properly scaffold predefined blueprint', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../src/blueprint'))
        .withArguments(['find'])
        .on('end', done)
    });

    it('Should properly create api files', () => {
      assert.file([
        'api/blueprints/find.js'
      ]);

      assert.noFile([
        'api/blueprints/add.js',
        'api/blueprints/create.js',
        'api/blueprints/destroy.js',
        'api/blueprints/findone.js',
        'api/blueprints/populate.js',
        'api/blueprints/remove.js',
        'api/blueprints/update.js',
        'api/blueprints/test.js'
      ]);

      assert.fileContent('api/blueprints/find.js', /const populateAlias = \(model, alias\) => model.populate\(alias\);/);
    });

    it('Should properly create test files', () => {
      assert.file([
        'test/unit/blueprints/find.test.js'
      ]);

      assert.noFile([
        'test/unit/blueprints/add.test.js',
        'test/unit/blueprints/create.test.js',
        'test/unit/blueprints/destroy.test.js',
        'test/unit/blueprints/findone.test.js',
        'test/unit/blueprints/populate.test.js',
        'test/unit/blueprints/remove.test.js',
        'test/unit/blueprints/update.test.js',
        'test/unit/blueprints/test.test.js'
      ]);

      assert.fileContent('test/unit/blueprints/find.test.js', /import find from '\.\.\/\.\.\/\.\.\/api\/blueprints\/find';/);
    });
  });

  describe('Should properly scaffold overridden predefined blueprint', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../src/blueprint'))
        .withArguments(['find'])
        .withOptions({
          'new': true
        })
        .on('end', done)
    });

    it('Should properly create api files', () => {
      assert.file([
        'api/blueprints/find.js'
      ]);

      assert.noFile([
        'api/blueprints/add.js',
        'api/blueprints/create.js',
        'api/blueprints/destroy.js',
        'api/blueprints/findone.js',
        'api/blueprints/populate.js',
        'api/blueprints/remove.js',
        'api/blueprints/update.js',
        'api/blueprints/test.js'
      ]);

      assert.fileContent('api/blueprints/find.js', /res.ok\(\)/);
      assert.noFileContent('api/blueprints/find.js', /const populateAlias = \(model, alias\) => model.populate\(alias\);/);
    });

    it('Should properly create test files', () => {
      assert.file([
        'test/unit/blueprints/find.test.js'
      ]);

      assert.noFile([
        'test/unit/blueprints/add.test.js',
        'test/unit/blueprints/create.test.js',
        'test/unit/blueprints/destroy.test.js',
        'test/unit/blueprints/findone.test.js',
        'test/unit/blueprints/populate.test.js',
        'test/unit/blueprints/remove.test.js',
        'test/unit/blueprints/update.test.js',
        'test/unit/blueprints/test.test.js'
      ]);

      assert.fileContent('test/unit/blueprints/find.test.js', /import blueprint from '\.\.\/\.\.\/\.\.\/api\/blueprints\/find';/);
    });
  });

  describe('Should properly scaffold custom blueprint', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../src/blueprint'))
        .withArguments(['custom'])
        .on('end', done)
    });

    it('Should properly create api files', () => {
      assert.file([
        'api/blueprints/custom.js'
      ]);

      assert.noFile([
        'api/blueprints/add.js',
        'api/blueprints/create.js',
        'api/blueprints/destroy.js',
        'api/blueprints/find.js',
        'api/blueprints/findone.js',
        'api/blueprints/populate.js',
        'api/blueprints/remove.js',
        'api/blueprints/update.js'
      ]);

      assert.fileContent('api/blueprints/custom.js', /res.ok\(\)/);
    });

    it('Should properly create test files', () => {
      assert.file([
        'test/unit/blueprints/custom.test.js'
      ]);

      assert.noFile([
        'test/unit/blueprints/add.test.js',
        'test/unit/blueprints/create.test.js',
        'test/unit/blueprints/destroy.test.js',
        'test/unit/blueprints/find.test.js',
        'test/unit/blueprints/findone.test.js',
        'test/unit/blueprints/populate.test.js',
        'test/unit/blueprints/remove.test.js',
        'test/unit/blueprints/update.test.js'
      ]);

      assert.fileContent('test/unit/blueprints/custom.test.js', /import blueprint from '\.\.\/\.\.\/\.\.\/api\/blueprints\/custom';/);
    });
  });

  describe('Should properly scaffold all predefined blueprints at once', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../src/blueprint'))
        .withOptions({
          'all': true
        })
        .on('end', done)
    });

    it('Should properly create api files', () => {
      assert.file([
        'api/blueprints/add.js',
        'api/blueprints/create.js',
        'api/blueprints/destroy.js',
        'api/blueprints/find.js',
        'api/blueprints/findone.js',
        'api/blueprints/populate.js',
        'api/blueprints/remove.js',
        'api/blueprints/update.js'
      ]);

      assert.noFile([
        'api/blueprints/custom.js'
      ]);

      assert.fileContent('api/blueprints/find.js', /const populateAlias = \(model, alias\) => model.populate\(alias\);/);
    });

    it('Should properly create test files', () => {
      assert.file([
        'test/unit/blueprints/add.test.js',
        'test/unit/blueprints/create.test.js',
        'test/unit/blueprints/destroy.test.js',
        'test/unit/blueprints/find.test.js',
        'test/unit/blueprints/findone.test.js',
        'test/unit/blueprints/populate.test.js',
        'test/unit/blueprints/remove.test.js',
        'test/unit/blueprints/update.test.js'
      ]);

      assert.noFile([
        'test/unit/blueprints/custom.test.js'
      ]);

      assert.fileContent('test/unit/blueprints/find.test.js', /import find from '\.\.\/\.\.\/\.\.\/api\/blueprints\/find';/);
    });
  });
});
