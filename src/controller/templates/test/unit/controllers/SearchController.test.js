import { assert } from 'assert';
import Promise from 'bluebird';
import Users from '../../fixtures/Users';
import controller from '../../../api/controllers/SearchController';

let authToken = '';

describe('controllers:SearchController', () => {
  before(done => {
    new Promise((resolve, reject) => {
      sails.requestForTest('post', '/v1/auth/signin')
        .send(Users[0])
        .expect(200)
        .end((error, data) => {
          if (error) return reject(error);
          return resolve(data.body);
        });
    })
      .then(answer => {
        if (!answer.data || !answer.data.token) return Promise.reject('Problem with authorization!');
        authToken = answer.data.token;

        return Promise.resolve();
      })
      .then(done)
      .catch(done)
  });

  it('Should return user with username "test2"', done => {
    new Promise((resolve, reject) => {
      sails.requestForTest('post', '/v1/search/')
        .send({q: "test2"})
        .set('Authorization', 'Bearer ' + authToken)
        .expect(200)
        .end((error, data) => {
          if (error) return reject(error);
          return resolve(data.body);
        });
    })
      .then(answer => {
        assert.ok(!!answer.data.user);
        assert.equal(answer.data.user.length, 1);
        assert.equal(answer.data.user[0].username, "test2");
      })
      .then(done)
      .catch(done)
  });

  it('Should return at least 2 users whose username contains \'test\'', done => {
    new Promise((resolve, reject) => {
      sails.requestForTest('post', '/v1/search/')
        .send({q: "test"})
        .set('Authorization', 'Bearer ' + authToken)
        .expect(200)
        .end((error, data) => {
          if (error) return reject(error);
          return resolve(data.body);
        });
    })
      .then(answer => {
        assert.ok(!!answer.data.user);
        assert.ok(answer.data.user.length >= 2);
      })
      .then(done)
      .catch(done)
  });

  it('Should return user with email \'test@gmail.com\' (request with \'model\' parameter)', done => {
    new Promise((resolve, reject) => {
      sails.requestForTest('post', '/v1/search/')
        .send({q: "test@gmail.com", model: 'User'})
        .set('Authorization', 'Bearer ' + authToken)
        .expect(200)
        .end((error, data) => {
          if (error) return reject(error);
          return resolve(data.body);
        });
    })
      .then(answer => {
        assert.ok(!!answer.data.user);
        assert.equal(answer.data.user.length, 1);
        assert.equal(answer.data.user[0].email, "test@gmail.com");
      })
      .then(done)
      .catch(done)
  });

  it('Should return badRequest error (\'q\' parameter doesn\'t exists)', done => {
    new Promise((resolve, reject) => {
      sails.requestForTest('get', '/v1/search/')
        .set('Authorization', 'Bearer ' + authToken)
        .expect(400, done);
    })
      .then(done)
      .catch(done)
  });

  it('Should return badRequest error (\'model\' parameter contains an invalid model name)', done => {
    new Promise((resolve, reject) => {
      sails.requestForTest('post', '/v1/search/')
        .send({q: 'someText', model: 'undefinedModel'})
        .set('Authorization', 'Bearer ' + authToken)
        .expect(400, done);
    })
      .then(done)
      .catch(done)
  });
});
