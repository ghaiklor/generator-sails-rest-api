import path from 'path';
import os from 'os';
import { assert, test } from 'yeoman-generator';

describe('sails-rest-api:blueprints', () => {
  describe('Should properly handle default configuration', () => {
    before(done => test.run(path.join(__dirname, '../../src/blueprints')).on('end', done));

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
        'api/blueprints/.gitkeep'
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
        'test/unit/blueprints/.gitkeep'
      ]);
    });
  });

  describe('Should properly handle custom configuration', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../src/blueprints'))
        .withOptions({
          'use-default': true
        })
        .on('end', done);
    });

    it('Should properly create api files', () => {
      assert.file([
        'api/blueprints/.gitkeep'
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
      ])
    });

    it('Should properly create test files', () => {
      assert.file([
        'test/unit/blueprints/.gitkeep'
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
      ])
    });
  });
});
