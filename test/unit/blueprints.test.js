import path from 'path';
import os from 'os';
import { assert, test } from 'yeoman-generator';

describe('sails-rest-api:blueprints', function () {
  this.timeout(10000);

  before(done => {
    test
      .run(path.join(__dirname, '../../generators/blueprints'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .on('end', done);
  });

  it('Should properly create root files', () => {
    assert.file([
      'api/blueprints/add.js',
      'api/blueprints/create.js',
      'api/blueprints/destroy.js',
      'api/blueprints/find.js',
      'api/blueprints/findone.js',
      'api/blueprints/populate.js',
      'api/blueprints/remove.js',
      'api/blueprints/update.js',
      'test/unit/blueprints/add.js',
      'test/unit/blueprints/create.js',
      'test/unit/blueprints/destroy.js',
      'test/unit/blueprints/find.js',
      'test/unit/blueprints/findone.js',
      'test/unit/blueprints/populate.js',
      'test/unit/blueprints/remove.js',
      'test/unit/blueprints/update.js'
    ]);
  });
});
