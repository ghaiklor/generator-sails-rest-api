import path from 'path';
import os from 'os';
import { assert, test } from 'yeoman-generator';

describe('sails-rest-api:logger', () => {
  describe('Should properly handle default configuration', () => {
    before(done => test.run(path.join(__dirname, '../../src/logger')).on('end', done));

    it('Should properly create configuration files', () => {
      assert.file([
        'config/log.js'
      ]);

      assert.fileContent('config/log.js', /import winston/g);
    });
  });
});
