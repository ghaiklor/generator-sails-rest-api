import path from 'path'
import os from 'os'
import assert from 'yeoman-assert'
import test from 'yeoman-test'

describe('trails:service', () => {
  describe('Should properly generate service interface', () => {
    before(() => {
      return test
        .run(path.join(__dirname, '../../src/service'))
        .withArguments(['test'])
        .toPromise()
    })

    it('Should properly create service files', () => {
      assert.file([
        'api/services/TestService.js'
      ])

    })

    it('Should properly create test files', () => {
      assert.file([
        'test/unit/services/TestService.test.js'
      ])

    })
  })
})
