import path from 'path';
import os from 'os';
import { assert, test } from 'yeoman-generator';

describe('sails-rest-api:swagger', () => {
  describe('Should properly scaffold swagger support with default configuration', () => {
    before(done => test.run(path.join(__dirname, '../../src/swagger')).on('end', done));

    it('Should properly create api files', () => {
      assert(false);
    });
  });
});
