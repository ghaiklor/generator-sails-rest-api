import { assert } from 'chai';
import Promise from 'bluebird';
import AuthController from '../../../api/controllers/AuthController';
import { jwt } from '../../../api/services/CipherService';
import Users from '../../fixtures/Users';
import FaultyUsers from '../../fixtures/FaultyUsers';

let token = '';

describe('controllers:AuthController', function () {
  this.timeout(40000);

  it('Should register new users', done => {
    Promise.map(Users, user => {
      return new Promise((resolve, reject) => {
        sails.requestForTest('post', '/v1/auth/signup')
          .send(user)
          .expect(201)
          .end((error, data) => {
            if (error) return reject(err);
            return resolve(data.body);
          });
      })
    })
      .then(done)
      .catch(done);
  });

  it('Should login with just created users', done => {
    Promise.map(Users, user => {
      return new Promise((resolve, reject) => {
        sails.requestForTest('post', '/v1/auth/signin')
          .send(user)
          .expect(200)
          .end((error, data) => {
            if (error) return reject(err);
            return resolve(data.body);
          });
      })
    })
      .then(answers => {
        let res = _.every(answers, answer => !!answer.data.token);
        assert(res);
        token = answers[0].data.token;

        done();
      })
      .catch(done)
  });

  it('Should be rejected after trying to signup with faulty users', done => {
    Promise.map(FaultyUsers, user => {
      return new Promise((resolve, reject) => {
        sails.requestForTest('post', '/v1/auth/signup')
          .send(user)
          .end((error, data) => resolve(data.body));
      })
    })
      .then(answers => {
        answers.forEach(answer => assert.ok(!!answer.data.error));
        done();
      })
      .catch(done)
  });

  it('Should return error when email not found', done => {
    new Promise((resolve, reject) => {
      sails.requestForTest('post', '/v1/auth/signin')
        .send({email: 'my404email@gmail.com', password: 'yeah'})
        .expect(401)
        .end(error => {
          if (error) return reject(new Error("Not existing user was logged in!"));
          return resolve();
        });
    })
      .then(done)
      .catch(done)
  });

  it('Should return error on password is wrong', done => {
    new Promise((resolve, reject) => {
      let user = _.assign({}, Users[0]);
      user.password += '3';
      sails.requestForTest('post', '/v1/auth/signin')
        .send(user)
        .expect(401)
        .end(error => {
          if (error) return reject(new Error("User with wrong password was logged in!"));
          return resolve();
        });
    })
      .then(done)
      .catch(done)
  });

  it('Should return error on user with JWT not found', done => {
    new Promise((resolve, reject) => {
      let wrongAuthToken = jwt.encodeSync({id: -1});
      sails.requestForTest('get', '/v1/User/recently_registered')
        .set('Authorization', 'Bearer ' + wrongAuthToken)
        .expect(401)
        .end(error => {
          if (error) return reject(new Error('Found a user with wrong JWT!'));
          return resolve();
        });
    })
      .then(done)
      .catch(done)
  });

  it('Should refresh token', done => {
    // we should wait a little bit to get a new token
    setTimeout(() => {
      new Promise((resolve, reject) => {
        sails.requestForTest('post', '/v1/auth/refresh_token')
          .send({token: token})
          .expect(200)
          .set('Authorization', 'Bearer ' + token)
          .end((error, data) => {
            if (error) return reject(error);
            return resolve(data.body);
          });
      })
        .then(answer => {
          assert.notEqual(token, answer.data.token);
          done();
        })
        .catch(done)
    }, 2000);
  });
});
