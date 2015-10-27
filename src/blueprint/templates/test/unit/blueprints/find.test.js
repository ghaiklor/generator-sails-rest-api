import { assert } from 'chai';

const user = {
  username: 'test',
  password: 'test',
  email: 'test@gmail.com'
};

describe('blueprints:find', () => {
  it('Should find an user', done => {
    User
      .create(user)
      .then(() => {
        sails.request({
          method: 'GET',
          url: '/v1/users',
          params: {
            username: 'test'
          }
        }, (error, res, body) => {
          if (error) return done(error);

          assert.equal(res.statusCode, 200);
          assert.equal(body.code, 'OK');
          assert.equal(body.data[0].username, 'test');

          done();
        });
      });
  });
});
