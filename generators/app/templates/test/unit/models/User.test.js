var assert = require('assert');
var UserModel = require('../../../api/models/User');
var Promise = require('bluebird');

var FaultyUsers = require('../../fixtures/FaultyUsers.json');
var newUser = {
  username: "modelTest",
  password: "password",
  email: "modelTest@gmail.com"
};

describe("models:User", function () {
  it("should create new user", function (done) {
    User
      .create(newUser)
      .then(function (user) {
        assert.equal(user.username, newUser.username);

        done();
      })
      .catch(done)
  });

  it("should remove user", function (done) {
    User
      .destroy({'username': newUser.username})
      .then(function (users) {
        assert.equal(users[0].username, newUser.username);

        done();
      })
      .catch(done)
  });

  it("should fail creating users", function (done) {
    Promise.map(FaultyUsers, function (user) {
      return new Promise(function (resolve, reject) {
        User
          .create(user)
          .then(function (user) {
            return reject(user);
          })
          .catch(resolve)
      })
    })
      .then(function (results) {
        done();
      })
      .catch(done)
  });

});
