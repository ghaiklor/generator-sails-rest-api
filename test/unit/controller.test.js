import path from 'path'
import os from 'os'
import assert from 'yeoman-assert'
import test from 'yeoman-test'

describe('trails:controller', () => {
  describe('Should properly generate controller interface', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../src/controller'))
        .withArguments(['test'])
        .on('end', done)
    })

    it('Should properly create controller files', () => {
      assert.file([
        'api/controllers/TestController.js'
      ])

    })

    it('Should properly create test files', () => {
      assert.file([
        'test/integration/controllers/TestController.test.js'
      ])

    })
  })
})
