import { assert } from 'chai';

describe('blueprints:update', () => {
  it('Should properly update user', done => {
    sails.request({
      method: 'PUT',
      url: '/v1/users/2',
      params: {
        username: 'testUpdate'
      }
    }, (error, res, body) => {
      if (error) return done(error);

      assert.equal(res.statusCode, 200);
      assert.equal(body.data.username, 'testUpdate');
      done();
    });
  });

  it('Should properly return notFound', done => {
    sails.request({
      method: 'PUT',
      url: '/v1/users/1234567890'
    }, (error, res, body) => {
      assert.equal(error.status, 404);

      done();
    });
  });
});
