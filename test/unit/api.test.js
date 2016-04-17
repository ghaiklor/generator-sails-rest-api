import path from 'path'
import os from 'os'
import assert from 'yeoman-assert'
import test from 'yeoman-test'

describe('trails:api', () => {
  describe('Should properly generate api interface', () => {
    describe('Should properly generate model interface', () => {
      before(done => {
        /*
         test
         .run(path.join(__dirname, '../../src/api'))
         .withArguments(['apiTest'])
         .on('end', done)
         */
        //FIXME: really test api call, currently not working cause api run model and controller
        test
          .run(path.join(__dirname, '../../src/model'))
          .withArguments(['apiTest'])
          .on('end', done)
      })

      it('Should properly create model files', () => {
        assert.file([
          'api/models/ApiTest.js'
        ])
      })


      it('Should properly create test files', () => {
        assert.file([
          'test/unit/models/ApiTest.test.js'
        ])
      })

    })
    describe('Should properly generate controller interface', () => {
      before(done => {
        test
          .run(path.join(__dirname, '../../src/controller'))
          .withArguments(['apiTest'])
          .on('end', done)

      })

      it('Should properly create controller files', () => {
        assert.file([
          'api/controllers/ApiTestController.js'
        ])
      })

      it('Should properly create test files', () => {
        assert.file([
          'test/integration/controllers/ApiTestController.test.js'
        ])
      })
    })
  })
})
