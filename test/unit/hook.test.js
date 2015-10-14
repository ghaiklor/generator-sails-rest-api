import path from 'path';
import os from 'os';
import { assert, test } from 'yeoman-generator';

describe('sails-rest-api:hook', () => {
  describe('Should properly scaffold predefined hook', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../src/hook'))
        .withArguments(['pluralizeHook'])
        .on('end', done)
    });

    it('Should properly create api files', () => {
      assert.file([
        'api/hooks/PluralizeHook.js'
      ]);

      assert.noFile([
        'api/hooks/TestHook.js'
      ]);

      assert.fileContent('api/hooks/PluralizeHook.js', /sails.on\('router:before'/);
    });

    it('Should properly create test files', () => {
      assert.file([
        'test/unit/hooks/PluralizeHook.test.js'
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
        'api/hooks/TestHook.js'
      ]);

      assert.noFile([
        'api/hooks/PluralizeHook.js'
      ]);

      assert.fileContent('api/hooks/TestHook.js', /initialize: cb => cb\(\)/);
    });

    it('Should properly create test files', () => {
      assert.file([
        'test/unit/hooks/TestHook.test.js'
      ]);

      assert.noFile([
        'test/unit/hooks/PluralizeHook.test.js'
      ]);

      assert.fileContent('test/unit/hooks/TestHook.test.js', /import hook from '\.\.\/\.\.\/\.\.\/api\/hooks\/TestHook';/);
    });
  });
});
