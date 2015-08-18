var assert = require('assert');
var AuthController = require('../../../api/controllers/AuthController');
var Promise = require('bluebird');
var CipherService = require('../../../api/services/CipherService');
var jwt = CipherService.jwt;

var Users = require('../../fixtures/Users.json');
var FaultyUsers = require('../../fixtures/FaultyUsers.json');
var token = '';

describe("controllers:AuthController", function () {
  this.timeout(40000);

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
        token = answers[0].data.token;

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
            if (err) return resolve(data.body);

            return reject(new Error("Faulty user was created!"));
          });
      })
    })
      .then(function (answers) {
        answers.forEach(function (answer) {
          assert.ok(!!answer.data.error);
        });
        done();
      })
      .catch(done)
  });

  it("should return error 'email not found'", function (done) {
    new Promise(function (resolve, reject) {
      sails.requestForTest('post', '/v1/auth/signin')
        .send({email: 'my404email@gmail.com', password: 'yeah'})
        .expect(401)
        .end(function (err) {
          if (err) return reject(new Error("Not existing user was logged in!"));

          return resolve();
        });
    })
      .then(done)
      .catch(done)
  });

  it("should return error 'Password is wrong'", function (done) {
    new Promise(function (resolve, reject) {
      var user = _.assign({}, Users[0]);
      user.password += '3';
      sails.requestForTest('post', '/v1/auth/signin')
        .send(user)
        .expect(401)
        .end(function (err) {
          if (err) return reject(new Error("User with wrong password was logged in!"));

          return resolve();
        });
    })
      .then(done)
      .catch(done)
  });

  it("should return error 'User with that JWT not found'", function (done) {
    new Promise(function (resolve, reject) {
      var wrongAuthToken = jwt.encodeSync({id: -1});
      sails.requestForTest('get', '/v1/User/recently_registered')
        .set('Authorization', 'Bearer ' + wrongAuthToken)
        .expect(401)
        .end(function (err) {
          if (err) return reject(new Error('Found a user with wrong JWT!'));

          return resolve();
        });
    })
      .then(done)
      .catch(done)
  });

  it("should refresh token", function (done) {
    // we should wait a little bit to get a new token
    setTimeout(function () {
      new Promise(function (resolve, reject) {
        sails.requestForTest('post', '/v1/auth/refresh_token')
          .send({token: token})
          .expect(200)
          .set('Authorization', 'Bearer ' + token)
          .end(function (err, data) {
            if (err) return reject(err);

            return resolve(data.body);
          });
      })
        .then(function (answer) {
          assert.notEqual(token, answer.data.token);
          done();
        })
        .catch(done)
    }, 2000);
  });

});
