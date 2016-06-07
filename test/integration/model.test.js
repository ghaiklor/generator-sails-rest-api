import path from 'path'
import assert from 'yeoman-assert'
import test from 'yeoman-test'

describe('trails:model', () => {
  describe('Should properly generate model interface', () => {
    before(() => {
      return test
        .run(path.join(__dirname, '../../src/model'))
        .withArguments(['test'])
        .toPromise()
    })

    it('Should properly create model files', () => {
      assert.file([
        'api/models/Test.js'
      ])

    })

    it('Should properly create test files', () => {
      assert.file([
        'test/unit/models/Test.test.js'
      ])

    })
  })
})
