var assert = require('assert');
var Promise = require('bluebird');

var Users = require('../../fixtures/Users.json');
var authToken = '';

describe("controllers:SearchController", function () {
  before(function (done) {
    new Promise(function (resolve, reject) {
      sails.requestForTest('post', '/v1/auth/signin')
        .send(Users[0])
        .expect(200)
        .end(function (err, data) {
          if (err) return reject(err);

          return resolve(data.body);
        });
    })
      .then(function (answer) {
        if (!answer.data || !answer.data.token) return Promise.reject("Problem with authorization!");
        authToken = answer.data.token;

        return Promise.resolve();
      })
      .then(done)
      .catch(done)
  });

  it('should return user with username "test2"', function (done) {
    new Promise(function (resolve, reject) {
      sails.requestForTest('post', '/v1/Search/')
        .send({q: "test2"})
        .set('Authorization', 'Bearer ' + authToken)
        .expect(200)
        .end(function (err, data) {
          if (err) return reject(err);

          return resolve(data.body);
        });
    })
      .then(function (answer) {
        assert.ok(!!answer.data.user);
        assert.equal(answer.data.user.length, 1);
        assert.equal(answer.data.user[0].username, "test2");
      })
      .then(done)
      .catch(done)
  });

  it("should return at least 2 users whose username contains 'test'", function (done) {
    new Promise(function (resolve, reject) {
      sails.requestForTest('post', '/v1/Search/')
        .send({q: "test"})
        .set('Authorization', 'Bearer ' + authToken)
        .expect(200)
        .end(function (err, data) {
          if (err) return reject(err);

          return resolve(data.body);
        });
    })
      .then(function (answer) {
        assert.ok(!!answer.data.user);
        assert.ok(answer.data.user.length >= 2);
      })
      .then(done)
      .catch(done)
  });

  it("should return user with email 'test@gmail.com' (request with 'model' parameter)", function (done) {
    new Promise(function (resolve, reject) {
      sails.requestForTest('post', '/v1/Search/')
        .send({q: "test@gmail.com", model: 'User'})
        .set('Authorization', 'Bearer ' + authToken)
        .expect(200)
        .end(function (err, data) {
          if (err) return reject(err);

          return resolve(data.body);
        });
    })
      .then(function (answer) {
        assert.ok(!!answer.data.user);
        assert.equal(answer.data.user.length, 1);
        assert.equal(answer.data.user[0].email, "test@gmail.com");
      })
      .then(done)
      .catch(done)
  });

  it("should return badRequest error ('q' parameter doesn't exists)", function (done) {
    new Promise(function (resolve, reject) {
      sails.requestForTest('get', '/v1/Search/')
        .set('Authorization', 'Bearer ' + authToken)
        .end(function (err, data) {
          if (err) return resolve();

          return reject('Should return badRequest error if "q" parameter does not exists!');
        });
    })
      .then(done)
      .catch(done)
  });

  it("should return badRequest error ('model' parameter contains an invalid model name)", function (done) {
    new Promise(function (resolve, reject) {
      sails.requestForTest('post', '/v1/Search/')
        .send({q: 'someText', model: 'undefinedModel'})
        .set('Authorization', 'Bearer ' + authToken)
        .end(function (err, data) {
          if (err) return resolve();

          return reject('Should return badRequest error if "model" parameter contains an invalid model name!');
        });
    })
      .then(done)
      .catch(done)
  });
});
