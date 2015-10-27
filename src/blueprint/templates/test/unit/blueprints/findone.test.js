import { assert } from 'chai';

describe('blueprints:findOne', () => {
  it('Should properly find user', done => {
    sails.request({
      method: 'GET',
      url: '/v1/users/2'
    }, (error, res, body) => {
      if (error) return done(error);

      assert.equal(res.statusCode, 200);
      assert.equal(body.data.username, 'test');
      done();
    });
  });

  it('Should return notFound', done => {
    sails.request({
      method: 'GET',
      url: '/v1/users/1234567890'
    }, (error, res, body) => {
      assert.equal(error.status, 404);

      done();
    });
  });
});
