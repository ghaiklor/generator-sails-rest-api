"use strict";

const assert = require('chai').assert;

const newUser = {
  username: 'modelTest',
  password: 'password',
  email: 'modelTest@gmail.com'
};

describe('models:User', () => {
  it('Should create new user', done => {
    User
      .create(newUser)
      .then(user => {
        assert.equal(user.username, newUser.username);
        done();
      })
      .catch(done);
  });

  it('Should remove user', done => {
    User
      .destroy({username: newUser.username})
      .then(users => {
        assert.equal(users[0].username, newUser.username);
        done();
      })
      .catch(done);
  });
});
