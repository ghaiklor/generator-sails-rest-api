import { assert } from 'chai';

const user = {
  username: 'test',
  password: 'test',
  email: 'test@gmail.com'
};

describe('blueprints:create', () => {
  it('Should properly create user', done => {
    sails.request({
      method: 'POST',
      url: '/v1/users',
      params: user
    }, (error, res, body) => {
      if (error) return done(error);

      assert.equal(res.statusCode, 201);
      assert.equal(body.code, 'CREATED');
      done();
    });
  });

  it('Should reject creating the same user', done => {
    sails.request({
      method: 'POST',
      url: '/v1/users',
      params: user
    }, (error, res, body) => {
      assert.equal(error.status, 400);

      done();
    });
  });
});
