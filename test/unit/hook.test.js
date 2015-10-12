import path from 'path';
import os from 'os';
import { assert, test } from 'yeoman-generator';

describe('sails-rest-api:hook', () => {
  describe('Should properly scaffold predefined hook', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../src/hook'))
        .withArguments(['pluralize'])
        .on('end', done)
    });

    it('Should properly create api files', () => {
      assert.file([
        'api/hooks/pluralize.js'
      ]);

      assert.noFile([
        'api/hooks/test.js'
      ]);

      assert.fileContent('api/hooks/pluralize.js', /sails.on\('router:before'/);
    });

    it('Should properly create test files', () => {
      assert.file([
        'test/unit/hooks/pluralize.test.js'
      ]);
    });
  });

  describe('Should properly scaffold custom hook', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../src/hook'))
        .withArguments(['test'])
        .on('end', done)
    });

    it('Should properly create api files', () => {
      assert.file([
        'api/hooks/test.js'
      ]);

      assert.noFile([
        'api/hooks/pluralize.js'
      ]);

      assert.fileContent('api/hooks/test.js', /initialize: cb => cb\(\)/);
    });

    it('Should properly create test files', () => {
      assert.file([
        'test/unit/hooks/test.test.js'
      ]);

      assert.noFile([
        'test/unit/hooks/pluralize.test.js'
      ]);
    });
  });
});
