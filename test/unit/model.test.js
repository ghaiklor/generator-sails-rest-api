import path from 'path'
import os from 'os'
import { assert, test } from 'yeoman-generator'

describe('trails:model', () => {
  describe('Should properly generate model interface', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../src/model'))
        .withArguments(['test'])
        .on('end', done)
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
