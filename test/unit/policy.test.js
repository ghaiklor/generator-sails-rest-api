import path from 'path';
import os from 'os';
import { assert, test } from 'yeoman-generator';

describe('sails-rest-api:policy', () => {
  describe('Should properly scaffold policy', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../src/policy'))
        .withArguments(['IsAdmin'])
        .on('end', done)
    });

    it('Should properly create api files', () => {
      assert.file([
        'api/policies/isAdmin.js'
      ]);

      assert.fileContent('api/policies/isAdmin.js', /export default function \(req, res, next\)/);
    });

    it('Should properly create test files', () => {
      assert.file([
        'test/unit/policies/isAdmin.test.js'
      ]);

      assert.fileContent('test/unit/policies/isAdmin.test.js', /import Policy from '\.\.\/\.\.\/\.\.\/api\/policies\/isAdmin'/);
    });
  });
});
