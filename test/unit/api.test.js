import path from 'path'
import os from 'os'
import assert from 'yeoman-assert'
import test from 'yeoman-test'

describe('trails:api', () => {
  describe('Should properly generate api interface', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../src/api'))
        .withArguments(['apiTest'])
        .on('end', function (err) {
          done(err)
        })
    })

    it('Should properly create controller files', () => {
      assert.file([
        'api/controllers/ApiTestController.js'
      ])
    })

    it('Should properly create model files', () => {
      assert.file([
        'api/models/ApiTest.js'
      ])
    })

    it('Should properly create test files', () => {
      assert.file([
        'test/unit/models/ApiTest.test.js',
        'test/integration/controllers/ApiTestController.test.js'
      ])
    })
  })
})
