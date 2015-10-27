import { assert } from 'chai';

describe('blueprints:destroy', () => {
  it('Should destroy a user', done => {
    sails.request({
      method: 'DELETE',
      url: '/v1/users',
      params: {
        id: 1
      }
    }, (error, res, body) => {
      if (error) return done(error);

      assert.equal(res.statusCode, 200);
      done();
    });
  });

  it('Should response with notFound', done => {
    sails.request({
      method: 'DELETE',
      url: '/v1/users',
      params: {
        id: 1
      }
    }, (error, res, info) => {
      assert.equal(error.status, 404);

      done();
    });
  });
});
