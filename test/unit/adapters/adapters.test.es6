import path from 'path';
import os from 'os';
import { assert, test } from 'yeoman-generator';

describe('sails-rest-api:adapters', () => {
  before(done => {
    test
      .run(path.join(__dirname, '../../../generators/adapters'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .on('end', done);
  });

  it('Should properly create root files', () => {
    assert.file([
      'api/adapters',
      'test/unit/adapters'
    ]);
  });
});
