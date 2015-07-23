var assert = require('assert');
var UserController = require('../../../api/controllers/UserController');
var Promise = require('bluebird');

var Users = require('../../fixtures/Users.json');

describe("controllers:UserController", function () {
  it("should return maximum 5 recently registered users", function (done) {
    var lastUsers = Users.slice(-5); // get the last 5 users from our fixture

    new Promise(function (resolve, reject) {
      sails.requestForTest('post', '/v1/Auth/signin')
        .send(lastUsers[0])
        .expect(200)
        .end(function (err, data) {
          if (err) return reject(err);

          return resolve(data.body);
        });
    })
      .then(function (answer) {
        if (!answer.data || !answer.data.token) return Promise.reject("Problem with authorization!");

        return Promise.resolve(answer.data.token);
      })
      .then(function (authToken) {
        return new Promise(function (resolve, reject) {
          sails.requestForTest('get', '/v1/User/recently_registered')
            .set('Authorization', 'Bearer ' + authToken)
            .expect(200)
            .end(function (err, data) {
              if (err) return reject(err);

              return resolve(data.body);
            });
        })
      })
      .then(function (recRegistered) {
        lastUsers.forEach(function (user) {
          var res = recRegistered.data.some(function (recUser) {
            return user.username === recUser.username;
          });

          assert.ok(res);
        });
      })
      .then(done)
      .catch(done)
  });

});
