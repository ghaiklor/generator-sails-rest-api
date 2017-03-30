const path = require('path')
const assert = require('yeoman-assert')
const test = require('yeoman-test')

describe.only('trails:controller', () => {
  describe('Should properly generate controller interface', () => {
    before(() => {
      return test
        .run(path.join(__dirname, '../../generators/controller'))
        .withArguments(['test'])
        .toPromise()
    })

    it('should create controller class file', () => {
      assert.file([
        'api/controllers/TestController.js'
      ])
    })
    it('should correctly set Controller class name', () => {
      assert.fileContent('api/controllers/TestController.js', /class TestController/)
    })
    it('should create test suite file', () => {
      assert.file([
        'test/integration/controllers/TestController.test.js'
      ])
    })
    it('should correctly set test suite name', () => {
      assert.fileContent('test/integration/controllers/TestController.test.js', /describe\('TestController/)
    })
  })
})
