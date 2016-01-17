import path from 'path'
import os from 'os'
import { assert, test } from 'yeoman-generator'

describe('trailpack:service', () => {
  describe('Should properly generate service interface', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../src/service'))
        .withArguments(['test'])
        .on('end', done)
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
