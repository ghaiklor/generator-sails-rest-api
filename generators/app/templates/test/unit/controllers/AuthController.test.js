var assert = require('assert');
var AuthController = require('../../../api/controllers/AuthController');
var Promise = require('bluebird');

var Users = require('../../fixtures/Users.json');
var FaultyUsers = require('../../fixtures/FaultyUsers.json');

describe("controllers:AuthController", function () {
  it("should register new users", function (done) {
    Promise.map(Users, function (user) {
      return new Promise(function (resolve, reject) {
        sails.requestForTest('post', '/v1/auth/signup')
          .send(user)
          .expect(201)
          .end(function (err, data) {
            if (err) return reject(err);

            return resolve(data.body);
          });
      })
    })
      .then(function (answers) {
        done();
      })
      .catch(done)
  });

  it("should login with just created users", function (done) {
    Promise.map(Users, function (user) {
      return new Promise(function (resolve, reject) {
        sails.requestForTest('post', '/v1/auth/signin')
          .send(user)
          .expect(200)
          .end(function (err, data) {
            if (err) return reject(err);

            return resolve(data.body);
          });
      })
    })
      .then(function (answers) {
        var res = _.every(answers, function (answer) {
          return !!answer.data.token;
        });
        assert(res);

        done();
      })
      .catch(done)
  });

  it("should be rejected after trying to signup with faulty users", function (done) {
    Promise.map(FaultyUsers, function (user) {
      return new Promise(function (resolve, reject) {
        sails.requestForTest('post', '/v1/auth/signup')
          .send(user)
          .end(function (err, data) {
            if (err) return resolve(err);

            return reject(data.body);
          });
      })
    })
      .then(function (answers) {
        assert(answers.length === FaultyUsers.length);
        done();
      })
      .catch(done)
  });

});
