import path from 'path';
import os from 'os';
import { assert, test } from 'yeoman-generator';

describe('trails:api', () => {
  describe('Should properly generate api interface', () => {
    before(done => {
      //FIXME: really test api call, currently not working cause api run model and controller
      var controller = false;
      var model = false;
      test
        .run(path.join(__dirname, '../../src/model'))
        .withArguments(['apiTest'])
        .on('end', function (err) {
          model = true;
          if (controller == true && model == true) {
            done(err);
          }
        })
      test
        .run(path.join(__dirname, '../../src/controller'))
        .withArguments(['apiTest'])
        .on('end', function (err) {
          controller = true;
          if (controller == true && model == true) {
            done(err);
          }
        })

    });

    it('Should properly create controller files', () => {
      assert.file([
        'api/controllers/ApiTestController.js'
      ]);
    });

    it('Should properly create model files', () => {
      assert.file([
        'api/models/ApiTest.js'
      ]);
    });

    it('Should properly create test files', () => {
      assert.file([
        'test/unit/models/ApiTest.test.js',
        'test/integration/controllers/ApiTestController.test.js'
      ]);
    });
  });
});
