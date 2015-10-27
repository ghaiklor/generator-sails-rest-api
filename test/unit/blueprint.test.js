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
  });
});
